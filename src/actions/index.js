import axios from 'axios';

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";
const FEATURED_URL = "https://api.twitch.tv/kraken/streams/featured";
const CLIENT_ID = "e7t3euzce0fa7oe93h3ovktw4gzvfx";
export const FETCH_FEATURED = "FETCH_FEATURED";

export function fetchFeaturedStreams() {
    const request = axios.get(`${FEATURED_URL}?client_id=${CLIENT_ID}`);

    return {
        type: FETCH_FEATURED,
        payload: request
    };
}