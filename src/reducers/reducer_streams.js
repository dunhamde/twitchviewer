import _ from "lodash";
import { createSelector } from "reselect";
import {
  FETCH_FEATURED,
  FETCH_FEATURED_SUCCESS,
  FETCH_FEATURED_FAILURE
} from "../actions/fetch";
import {
  ACTIVE_CHANNEL_UPDATE,
  SHOW_FEATURED,
  HIDE_FEATURED,
  SHOW_RECENT,
  HIDE_RECENT
} from "../actions/header";
import {
  SEARCH_STREAMS,
  SEARCH_STREAMS_SUCCESS,
  SEARCH_STREAMS_FAILURE
} from "../actions/search";

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
        streams: action.streams
      };
    case FETCH_FEATURED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case ACTIVE_CHANNEL_UPDATE:
      return {
        ...state,
        activeChannel: action.channel
      };
    case SHOW_FEATURED:
      return {
        ...state,
        showFeatured: true
      };
    case HIDE_FEATURED:
      return {
        ...state,
        showFeatured: false
      };
    case SHOW_RECENT:
      return {
        ...state,
        showRecent: true
      };
    case HIDE_RECENT:
      return {
        ...state,
        showRecent: false
      };
    case SEARCH_STREAMS:
      return {
        ...state,
        loadingSearch: true
      };
    case SEARCH_STREAMS_SUCCESS:
      return {
        ...state,
        loadingSearch: false,
        searchResults: action.streams
      };
    case SEARCH_STREAMS_FAILURE:
      return {
        ...state,
        loadingSearch: false,
        searchError: action.error
      };
    default:
      return state;
  }
}

export const getStreamState = createSelector(
  state => state,
  state => _.get(state, "streams")
);

export const getStreams = createSelector(getStreamState, streamState =>
  _.get(streamState, "streams")
);

export const getFeaturedStreams = createSelector(getStreams, streams =>
  _.get(streams, "data.featured")
);

export const getIsLoading = createSelector(getStreamState, streamState =>
  _.get(streamState, "loading")
);

export const getError = createSelector(getStreamState, streamState =>
  _.get(streamState, "error")
);

export const getActiveChannel = createSelector(getStreamState, streamState =>
  _.get(streamState, "activeChannel")
);

export const getShowFeatured = createSelector(getStreamState, streamState =>
  _.get(streamState, "showFeatured")
);

export const getShowRecent = createSelector(getStreamState, streamState =>
  _.get(streamState, "showRecent")
);

export const getSearchStreams = createSelector(getStreamState, streamState =>
  _.get(streamState, "searchResults.data.streams")
);

export const getSearchLoading = createSelector(getStreamState, streamState =>
  _.get(streamState, "loadingSearch")
);
