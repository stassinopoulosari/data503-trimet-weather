const http = require("http"),
	gtfs = require("./res/gtfs-realtime.js"),
	toadScheduler = require("toad-scheduler"),
	secrets = require("./secrets.js"),
	pg = require("pg"),
	appID = secrets.appID,
	vehiclePositionURL = `http://developer.trimet.org/ws/V1/VehiclePositions/?appID=${appID}`,
	tripUpdateURL = `http://developer.trimet.org/ws/V1/TripUpdate/?appID=${appID}`;

// Connect to Database
const pool = new pg.Pool({
	connectionString: secrets.testDatabaseURI,
	ssl: false,
});
let client;
const attemptConnection = async () => (client = await pool.connect()),
	checkDatabaseSetup = async () => {
		try {
			await client.query(`
				CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE trimet_observation(
					trimet_observation_id
						UUID
						PRIMARY KEY
						NOT NULL
						DEFAULT GEN_RANDOM_UUID(),
					date TIMESTAMPTZ NOT NULL DEFAULT NOW()
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
					trip_id NUMERIC(10, 0) NOT NULL,
					route_id NUMERIC(4, 0) NOT NULL,
					route_label TEXT,
					status_data_exists BOOLEAN,
					status_departure_delay_seconds NUMERIC(10, 0),
					status_arrival_delay_seconds NUMERIC(10,0)
);
			`);
			console.log("Set up table");
		} catch (err) {
			console.log("Table is already set up");
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

const parseFeedMessageFromURI = (feedURL) =>
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
				parseFeedMessageFromURI(vehiclePositionURL),
				parseFeedMessageFromURI(tripUpdateURL),
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
	saveTrimetObservation = async (observationID, vehicleStatuses) => {
		const entryPromises = Object.entries(vehicleStatuses).map(
			(entry) => async () => {
				const [key, value] = entry,
					query = await client.query(
						`
INSERT INTO vehicle_statuses(
trimet_observation_id,
vehicle_id,
stop_in_sequence,
trip_id,
route_id,
route_label,
status_data_exists,
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
							value.routeLabel,
							value.status.dataExists,
							value.status.departureDelaySeconds,
							value.status.arrivalDelaySeconds,
						],
					);
			},
		);
		return await Promise.all(entryPromises);
	},
	observeTrimet = () => {
		const date = new Date();
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
				console.log("Successfully saved obserxvations");
			} catch (error) {
				console.error(error);
			}
		});
	},
	scheduler = new toadScheduler.ToadScheduler(),
	observeTrimetTask = new toadScheduler.Task("observeTrimet", observeTrimet),
	observeTrimetJob = new toadScheduler.SimpleIntervalJob(
		{ minutes: 1 },
		observeTrimetTask,
	);

scheduler.addSimpleIntervalJob(observeTrimetJob);
