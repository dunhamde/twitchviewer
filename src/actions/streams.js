import axios from "axios";

const FEATURED_URL = "https://api.twitch.tv/kraken/streams/featured";
const CLIENT_ID = "e7t3euzce0fa7oe93h3ovktw4gzvfx";
export const FETCH_FEATURED = "FETCH_FEATURED";
export const FETCH_FEATURED_SUCCESS = "FETCH_FEATURED_SUCCESS";
export const FETCH_FEATURED_FAILURE = "FETCH_FEATURED_FAILURE";
export const ACTIVE_CHANNEL_UPDATE = "ACTIVE_CHANNEL_UPDATE";
export const SHOW_FEATURED = "SHOW_FEATURED";
export const HIDE_FEATURED = "HIDE_FEATURED";

export const fetchFeatured = () => ({
	type: FETCH_FEATURED
});

export const fetchFeaturedSuccess = data => ({
	type: FETCH_FEATURED_SUCCESS,
	streams: data
});

export const fetchFeaturedFailure = error => ({
	type: FETCH_FEATURED_FAILURE,
	reason: error
});

export const updateActiveChannel = channel => ({
	type: ACTIVE_CHANNEL_UPDATE,
	channel: channel
});

export const showFeaturedStreams = () => ({
	type: SHOW_FEATURED
});

export const hideFeaturedStreams = () => ({
	type: HIDE_FEATURED
});

export function fetchFeaturedStreams() {
	const requestURL = `${FEATURED_URL}?client_id=${CLIENT_ID}`;
	return function(dispatch) {
		dispatch(fetchFeatured());
		axios
			.get(requestURL)
			.then(response => {
				dispatch(fetchFeaturedSuccess(response));
			})
			.catch(error => {
				dispatch(fetchFeaturedFailure(error));
			});
	};
}

export function activeChannelUpdate(channel) {
	return function(dispatch) {
		dispatch(updateActiveChannel(channel));
	};
}

export function showFeatured(show) {
	return function(dispatch) {
		if (show) {
			dispatch(showFeaturedStreams());
		} else {
			dispatch(hideFeaturedStreams());
		}
	};
}
