import { setRefreshAccessToken } from "./setRefreshAccessToken";

export const getAccessToken = async () => {
  const storedAccessTokenTime = localStorage.getItem("access_token_time");

  if (!storedAccessTokenTime) {
    // Handle the case when access token time is not found in localStorage
    return null;
  }

  let accessTokenAt: number;

  try {
    accessTokenAt = new Date(
      JSON.parse(storedAccessTokenTime as string)
    ).getTime();
  } catch (error) {
    console.error("Error parsing stored access token time:", error);
    return null;
  }

  const currentTime = new Date();

  if (currentTime.getTime() - accessTokenAt < 36000) {
    return localStorage.getItem("access_token");
  } else {
    try {
      const refreshResult = await setRefreshAccessToken();

      if (refreshResult.status) {
        return localStorage.getItem("access_token");
      } else {
        // Handle the case when token refresh fails
        return null;
      }
    } catch (error) {
      console.error("Error refreshing access token:", error);
      return null;
    }
  }
};
