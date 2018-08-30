import axios from "axios";

const FEATURED_URL = "https://api.twitch.tv/kraken/streams/featured";
const CLIENT_ID = "e7t3euzce0fa7oe93h3ovktw4gzvfx";
export const FETCH_FEATURED = "FETCH_FEATURED";
export const FETCH_FEATURED_SUCCESS = "FETCH_FEATURED_SUCCESS";
export const FETCH_FEATURED_FAILURE = "FETCH_FEATURED_FAILURE";

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
