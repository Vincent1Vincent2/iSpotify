import axios from "axios";
import { getAccessToken } from "./getAccessToken";

const formatParams = (params: Record<string, any>): string => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};

export const spotifyClientApi = axios.create({
  baseURL: "https://api.spotify.com/v1",
  paramsSerializer: (params) => formatParams(params),
});

spotifyClientApi.interceptors.request.use(async (config) => {
  config.headers["Content-Type"] = "application/json";
  const token = await getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.error("No access token available.");
  }

  return config;
});
