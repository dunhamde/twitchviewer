import _ from "lodash";
import {
  FETCH_FEATURED,
  FETCH_FEATURED_SUCCESS,
  FETCH_FEATURED_FAILURE
} from "../actions/fetch";

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
    default:
      return state;
  }
}
