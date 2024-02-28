import { setRefreshAccessToken } from "./setRefreshAccessToken";

export const getAccessToken = async () => {
  const accessTokenAt = new Date(
    JSON.parse(localStorage.getItem("access_token_time") as string)
  ).getTime();
  const currentTime = new Date();

  if (currentTime.getTime() - accessTokenAt < 990823) {
    return localStorage.getItem("access_token");
  } else {
    return await setRefreshAccessToken();
  }
};
