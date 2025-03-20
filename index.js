const http = require("http"),
	gtfs = require("./res/gtfs-realtime.js"),
	toadScheduler = require("toad-scheduler"),
	secrets = require("./secrets.js"),
	appID = secrets.appID,
	vehiclePositionURL = `http://developer.trimet.org/ws/V1/VehiclePositions/?appID=${appID}`,
	tripUpdateURL = `http://developer.trimet.org/ws/V1/TripUpdate/?appID=${appID}`;

console.log(appID);

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
		new Promise((resolve, reject) =>
			Promise.all([
				parseFeedMessageFromURI(vehiclePositionURL),
				parseFeedMessageFromURI(tripUpdateURL),
			]).then((results) => {
				const date = new Date(),
					[vehiclePositions, tripUpdate] = results,
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
						vehicleType: vehicleID < 1000 ? "train" : "bus",
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
							? (lastStopTimeUpdate.arrival ?? {}).delay
							: null,
						departureDelaySeconds = dataExists
							? (lastStopTimeUpdate.departure ?? {}).delay
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
	scheduler = new toadScheduler.ToadScheduler(),
	scrapeTask = new toadScheduler.Task("scrapeVehicles", scrapeVehicles),
	scrapeJob = new toadScheduler.SimpleIntervalJob({ minutes: 1 }, scrapeTask);

scheduler.addSimpleIntervalJob(scrapeJob);

scrapeVehicles();
