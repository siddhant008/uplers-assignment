import Pusher from "pusher-js";

const pusher = new Pusher("82e423da730a4dcad899", {
	cluster: "ap2",
	encrypted: true,
});

export const subscribeToChannel = (channelName, eventName, callback) => {
	const channel = pusher.subscribe(channelName);
	channel.bind(eventName, callback);
};
