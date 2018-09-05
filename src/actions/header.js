export const ACTIVE_CHANNEL_UPDATE = "ACTIVE_CHANNEL_UPDATE";
export const SHOW_FEATURED = "SHOW_FEATURED";
export const HIDE_FEATURED = "HIDE_FEATURED";
export const SHOW_RECENT = "SHOW_RECENT";
export const HIDE_RECENT = "HIDE_RECENT";

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

export const showRecentStreams = () => ({
  type: SHOW_RECENT
});

export const hideRecentStreams = () => ({
  type: HIDE_RECENT
});

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

export function showRecent(show) {
  return function(dispatch) {
    if (show) {
      dispatch(showRecentStreams());
    } else {
      dispatch(hideRecentStreams());
    }
  };
}
