import _ from "lodash";
import { createSelector } from "reselect";
import {
  SEARCH_STREAMS,
  SEARCH_STREAMS_SUCCESS,
  SEARCH_STREAMS_FAILURE
} from "../actions/search";
import { getStreamState } from "./reducer_fetch";

export default function(state = {}, action) {
  switch (action.type) {
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
