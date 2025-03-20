const http = require("http"),
	gtfs = require("./res/gtfs-realtime.js"),
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
						gtfs.transit_realtime.FeedMessage.decode(mergedData);
				return resolve(message);
			});
		}),
	);

Promise.all([
	parseFeedMessageFromURI(vehiclePositionURL),
	parseFeedMessageFromURI(tripUpdateURL),
]).then((results) => {
	const [vehiclePositions, tripUpdate] = results,
		vehicleStatuses = {};
	// Get current route and current vehicle stops of each vehicle
	vehiclePositions.entity.forEach((entity) => console.log(entity));
	// Get trip update for current stop for each vehicle
	tripUpdate.entity.forEach((entity) => console.log(entity));
});
