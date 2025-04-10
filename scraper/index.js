const http = require("https"),
	gtfs = require("./res/gtfs-realtime.js"),
	toadScheduler = require("toad-scheduler"),
	secrets = require("./secrets.js"),
	pg = require("pg"),
	appID = secrets.appID,
	openWeatherKey = secrets.openWeatherKey,
	location = {
		lat: 45.519135,
		lon: -122.6795,
	},
	vehiclePositionURL = `https://developer.trimet.org/ws/V1/VehiclePositions/?appID=${appID}`,
	tripUpdateURL = `https://developer.trimet.org/ws/V1/TripUpdate/?appID=${appID}`,
	weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&exclude=hourly,minutely,daily&appid=${openWeatherKey}`;

// Connect to Database
const pool = new pg.Pool({
	connectionString: secrets.databaseURI,
	ssl: secrets.databaseURI.startsWith("postgresql://postgres")
		? false
		: { rejectUnauthorized: false },
});
let client;
const attemptConnection = async () => (client = await pool.connect()),
	checkDatabaseSetup = async () => {
		try {
			await client.query(`
				CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
				-- DROP TABLE IF EXISTS trimet_observation CASCADE;
				-- DROP TABLE IF EXISTS route_description CASCADE;
				-- DROP TABLE IF EXISTS trip_update CASCADE;
				-- DROP TABLE IF EXISTS weather_description CASCADE;
				-- DROP TABLE IF EXISTS weather_observation CASCADE;

				CREATE TABLE trimet_observation(
					trimet_observation_id
						UUID
						PRIMARY KEY
						NOT NULL
						DEFAULT GEN_RANDOM_UUID(),
					date TIMESTAMPTZ NOT NULL DEFAULT NOW()
				);
				CREATE TABLE route_description(
					route_id
						NUMERIC(4, 0)
						NOT NULL
						PRIMARY KEY,
					route_label TEXT
				);
				CREATE TABLE trip_update(
					trip_update_id
						UUID
						PRIMARY KEY
						NOT NULL
						DEFAULT GEN_RANDOM_UUID(),
					trimet_observation_id
						UUID
						NOT NULL
						REFERENCES trimet_observation(trimet_observation_id),
					vehicle_id NUMERIC(5, 0),
					stop_in_sequence NUMERIC(3, 0),
					route_id
						NUMERIC(4, 0)
						NOT NULL
						REFERENCES route_description(route_id),
					trip_id NUMERIC(10, 0) NOT NULL,
					status_departure_delay_seconds NUMERIC(10, 0),
					status_arrival_delay_seconds NUMERIC(10,0)
				);
				CREATE TABLE weather_description(
					weather_description_id NUMERIC(3,0) NOT NULL PRIMARY KEY,
					text_description TEXT NOT NULL
				);
				CREATE TABLE weather_observation(
					weather_observation_id
						UUID
						PRIMARY KEY
						NOT NULL
						DEFAULT GEN_RANDOM_UUID(),
					date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
					temperature_kelvin NUMERIC(6, 3),
					feels_like_kelvin NUMERIC(6, 3),
					visibility NUMERIC(6, 1),
					wind_speed_m_s NUMERIC(6, 2),
					wind_gust_m_s NUMERIC(6, 2),
					weather_description_id NUMERIC(3,0)
						NOT NULL
						REFERENCES weather_description(weather_description_id),
					next_hour_rain_mm NUMERIC(5, 2)
				);
			`);
			console.log("Set up table");
		} catch (err) {
			console.log(
				"Table is already set up. Attempting initial observations",
			);
			observeWeather();
			observeTrimet();
		}
	},
	connectInterval = setInterval(
		() =>
			attemptConnection()
				.then(() => {
					console.log("Successful connection");
					clearInterval(connectInterval);
					checkDatabaseSetup();
				})
				.catch((err) =>
					console.error("Failed to connect, trying in 2000ms", err),
				),
		2000,
	);

const downloadVehicleFeed = (feedURL) =>
		new Promise((resolve) =>
			http.get(feedURL, (feedResponse) => {
				const data = [];
				feedResponse.on("data", (chunk) => data.push(chunk));
				feedResponse.on("end", () => {
					const mergedData = Buffer.concat(data),
						message =
							gtfs.transit_realtime.FeedMessage.decode(
								mergedData,
							);
					return resolve(message);
				});
			}),
		),
	scrapeVehicles = () =>
		new Promise((resolve) =>
			Promise.all([
				downloadVehicleFeed(vehiclePositionURL),
				downloadVehicleFeed(tripUpdateURL),
			]).then((results) => {
				const [vehiclePositions, tripUpdate] = results,
					vehicleStatuses = {};
				// Get current route and current vehicle stops of each vehicle
				vehiclePositions.entity.forEach((entity) => {
					const vehicleID = entity.id, // Vehicle ID is the same as entity ID
						vehicle = entity.vehicle ?? {},
						stopInSequence = vehicle.currentStopSequence,
						trip = vehicle.trip ?? {},
						tripID = trip.tripId ?? null,
						routeID = trip.routeId ?? null,
						routeLabel = (vehicle.vehicle ?? {}).label;
					vehicleStatuses[vehicleID] = {
						// vehicleType: vehicleID < 1000 ? "train" : "bus",
						stopInSequence: stopInSequence,
						tripID: tripID,
						routeID: routeID,
						routeLabel: routeLabel,
					};
				});
				// Get trip update for current stop for each vehicle
				tripUpdate.entity.forEach((entity) => {
					const tripUpdate = entity.tripUpdate ?? {},
						vehicle = tripUpdate.vehicle ?? {},
						vehicleID = vehicle.id ?? null;
					if (vehicleID === null || vehicleID === undefined) return;
					const vehicleStatus = vehicleStatuses[vehicleID] ?? {},
						stopInSequence = vehicleStatus.stopInSequence,
						lastStopTimeUpdate =
							entity.tripUpdate.stopTimeUpdate[
								stopInSequence - 1
							],
						dataExists = !(
							lastStopTimeUpdate === undefined ||
							lastStopTimeUpdate.scheduleRelationship === 2
						),
						arrivalDelaySeconds = dataExists
							? ((lastStopTimeUpdate.arrival ?? {}).delay ?? null)
							: null,
						departureDelaySeconds = dataExists
							? ((lastStopTimeUpdate.departure ?? {}).delay ??
								null)
							: null;
					if (lastStopTimeUpdate)
						vehicleStatus.status = {
							dataExists: dataExists,
							arrivalDelaySeconds: arrivalDelaySeconds,
							departureDelaySeconds: departureDelaySeconds,
						};
				});
				return resolve(vehicleStatuses);
			}),
		),
	downloadWeather = (feedURL) =>
		new Promise((resolve, reject) => {
			http.get(feedURL, (feedResponse) => {
				const data = [];
				feedResponse.on("data", (chunk) => data.push(chunk));
				feedResponse.on("end", () => {
					const mergedData = Buffer.concat(data),
						message = JSON.parse(mergedData.toString("utf8"));
					return resolve(message);
				});
			});
		}),
	scrapeWeather = async () => {
		const weatherData = await downloadWeather(weatherURL),
			currentWeather = weatherData.current;
		return {
			temperatureKelvin: currentWeather.temp,
			feelsLikeKelvin: currentWeather.feels_like,
			visibility: currentWeather.visibility,
			windSpeed: currentWeather.wind_speed,
			windGust: currentWeather.wind_gust,
			weatherCode: currentWeather.weather[0].id,
			weatherDescription: currentWeather.weather[0].description,
			rain: (currentWeather.rain ?? { "1h": 0 })["1h"],
		};
	},
	saveWeather = async (weather) => {
		await client.query(
			`
			INSERT INTO weather_description(
				weather_description_id,
				text_description
			) VALUES($1, $2) ON CONFLICT(weather_description_id) DO NOTHING;
			`,
			[weather.weatherCode, weather.weatherDescription],
		);
		await client.query(
			`
			INSERT INTO weather_observation(
				temperature_kelvin,
				feels_like_kelvin,
				visibility,
				wind_speed_m_s,
				wind_gust_m_s,
				weather_description_id,
				next_hour_rain_mm
			) VALUES($1, $2, $3, $4, $5, $6, $7);
			`,
			[
				weather.temperatureKelvin,
				weather.feelsLikeKelvin,
				weather.visibility,
				weather.windSpeed,
				weather.windGust,
				weather.weatherCode,
				weather.rain,
			],
		);
	},
	saveTrimetObservation = async (observationID, vehicleStatuses) => {
		const entryPromises = Object.entries(vehicleStatuses).map(
			(entry) => async () => {
				const [key, value] = entry;
				await client.query(
					`
					INSERT INTO route_description(
						route_id,
						route_label
					) VALUES($1, $2)
						ON CONFLICT (route_id)
						DO NOTHING;
					`,
					[value.routeID, value.routeLabel],
				);
				await client.query(
					`
					INSERT INTO vehicle_statuses(
						trimet_observation_id,
						vehicle_id,
						stop_in_sequence,
						trip_id,
						route_id,
						status_departure_delay_seconds,
						status_arrival_delay_seconds
					) VALUES($1, $2, $3, $4, $5, $6, $7);
					`,
					[
						observationID,
						parseInt(key),
						value.stopInSequence,
						value.tripID,
						value.routeID,
						value.status.departureDelaySeconds,
						value.status.arrivalDelaySeconds,
					],
				);
			},
		);
		return await Promise.all(entryPromises);
	},
	observeTrimet = () => {
		scrapeVehicles().then(async (vehicleStatuses) => {
			// Add new observation
			let observationID;
			try {
				const observationQuery = await client.query(`
INSERT INTO trimet_observation DEFAULT VALUES RETURNING *;
`);
				if (observationQuery.rows.length == 0) {
					throw "Failed to create observation";
				}
				observationID = observationQuery.rows[0].trimet_observation_id;
				await saveTrimetObservation(observationID, vehicleStatuses);
				console.log("Successfully saved trimet data");
			} catch (error) {
				console.error(error);
			}
		});
	},
	observeWeather = async () => {
		try {
			await scrapeWeather().then((weather) => saveWeather(weather));
			console.log("Successfully saved weather data");
		} catch (error) {
			console.error(error);
		}
	},
	scheduler = new toadScheduler.ToadScheduler(),
	observeTrimetTask = new toadScheduler.Task("observeTrimet", observeTrimet),
	observeTrimetJob = new toadScheduler.SimpleIntervalJob(
		{ minutes: 1 },
		observeTrimetTask,
	),
	observeWeatherTask = new toadScheduler.Task(
		"observeWeather",
		observeWeather,
	),
	observeWeatherJob = new toadScheduler.SimpleIntervalJob(
		{ minutes: 30 },
		observeWeatherTask,
	);

scheduler.addSimpleIntervalJob(observeTrimetJob);
scheduler.addSimpleIntervalJob(observeWeatherJob);
