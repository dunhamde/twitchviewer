import { createSelector } from "reselect";
import {
	FETCH_FEATURED,
	FETCH_FEATURED_SUCCESS,
	FETCH_FEATURED_FAILURE
} from "../actions/streams";

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_FEATURED:
			return {
				...state,
				loading: true
			};
		case FETCH_FEATURED_SUCCESS:
			return {
				...state,
				loading: false,
				streams: action.payload
			};
		case FETCH_FEATURED_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
}

const loadingSelector = state => state.loading;
const streamsSelector = state => state.streams;
const errorSelector = state => state.error;

export const getFortniteStreams = () => {
	return createSelector(
		[loadingSelector, streamsSelector],
		(loading, streams) => {
			// if (!loading && streams) {
			// 	return streams.filter(stream =>
			// 		stream.stream.game.text.includes("Fortnite")
			// 	);
			// }
			return streams;
		}
	);
};

export const getLoadingStatus = () => {
	return createSelector([loadingSelector], loading => {
		if (loading) {
			return true;
		} else {
			return false;
		}
	});
};
