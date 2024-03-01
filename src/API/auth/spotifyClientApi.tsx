import axios from "axios";
import { REDIRECT_URI } from "./authURL";

export const setRefreshAccessToken = async () => {
  const authCode = localStorage.getItem("auth_code");

  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", authCode as string);
  params.append("redirect_uri", REDIRECT_URI);
  params.append("client_id", CLIENT_ID);
  params.append("client_secret", CLIENT_SECRET);

  try {
    const { data } = await axios.post(
      "https://accounts.spotify.com/api/token",
      params
    );
    const currentTime = new Date();

    localStorage.setItem("refresh_token", data.refresh_token);
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("access_token_time", JSON.stringify(currentTime));
    return { status: true };
  } catch {
    return { status: false };
  }
};
