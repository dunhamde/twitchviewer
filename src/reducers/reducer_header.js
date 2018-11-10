import _ from "lodash";
import {
  ACTIVE_CHANNEL_UPDATE,
  SHOW_FEATURED,
  HIDE_FEATURED,
  SHOW_RECENT,
  HIDE_RECENT
} from "../actions/header";

export default function(state = {}, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
