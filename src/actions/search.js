import axios from "axios";
export const SEARCH_STREAMS = "SEARCH_FEATURED";
export const SEARCH_STREAMS_SUCCESS = "SEARCH_STREAMS_SUCCESS";
export const SEARCH_STREAMS_FAILURE = "SEARCH_STREAMS_FAILURE";
const SEARCH_URL = "https://api.twitch.tv/kraken/search/streams?query=";
const CLIENT_ID = "e7t3euzce0fa7oe93h3ovktw4gzvfx";

export const searchStreams = () => ({
  type: SEARCH_STREAMS
});

export const searchStreamsSuccess = data => ({
  type: SEARCH_STREAMS_SUCCESS,
  streams: data
});

export const searchStreamsFailure = error => ({
  type: SEARCH_STREAMS_FAILURE,
  reason: error
});

export function search(query) {
  const requestURL = `${SEARCH_URL}${query}&client_id=${CLIENT_ID}`;
  return function(dispatch) {
    dispatch(searchStreams());
    axios
      .get(requestURL)
      .then(response => {
        dispatch(searchStreamsSuccess(response));
      })
      .catch(error => {
        dispatch(searchStreamsFailure(error));
      });
  };
}
