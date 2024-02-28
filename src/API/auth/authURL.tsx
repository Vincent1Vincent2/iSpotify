import { scopes } from "../spotifyConfig/spotifyScopeConfig";

export const END_POINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "code";
export const REDIRECT_URI = `${window.location.origin}/`;
export const SCOPE = scopes;
