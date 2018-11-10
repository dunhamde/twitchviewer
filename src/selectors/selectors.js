import { createSelector } from "reselect";
import _ from "lodash";

const getHeaderState = createSelector(
  state => state,
  state => _.get(state, "header")
);

const getFetchState = createSelector(
  state => state,
  state => _.get(state, "fetch")
);

const getSearchState = createSelector(
  state => state,
  state => _.get(state, "search")
);

export const getStreams = createSelector(
  getFetchState,
  streamState => _.get(streamState, "streams")
);

export const getFeaturedStreams = createSelector(
  getStreams,
  streams => _.get(streams, "data.featured")
);

export const getIsLoading = createSelector(
  getFetchState,
  streamState => _.get(streamState, "loading")
);

export const getError = createSelector(
  getFetchState,
  streamState => _.get(streamState, "error")
);

export const getActiveChannel = createSelector(
  getHeaderState,
  streamState => _.get(streamState, "activeChannel")
);

export const getShowFeatured = createSelector(
  getHeaderState,
  streamState => _.get(streamState, "showFeatured")
);

export const getShowRecent = createSelector(
  getHeaderState,
  streamState => _.get(streamState, "showRecent")
);

export const getSearchStreams = createSelector(
  getSearchState,
  streamState => _.get(streamState, "searchResults.data.streams")
);

export const getSearchLoading = createSelector(
  getSearchState,
  streamState => _.get(streamState, "loadingSearch")
);
