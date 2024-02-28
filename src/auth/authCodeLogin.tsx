import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserData } from "../API/dataTypes/spotifyUserData";
import { getUserData, getUserPlaylists } from "../API/userApi";
import { END_POINT, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from "./authURL";
import { setRefreshAccessToken } from "./setRefreshAccessToken";

interface AuthProp {
  children: ReactNode;
}

interface AuthContext {
  isAuth: boolean;
  signInAuth: () => void;
  signOutAuth: () => void;
}

export const AuthContext = createContext({} as AuthContext);

export const AuthAccess: FC<AuthProp> = ({ children }) => {
  const refreshToken = localStorage.getItem("refresh_token");
  const authCode = localStorage.getItem("auth_code");

  const [isAuth, setAuth] = useState<boolean>(Boolean(refreshToken));
  const [userData, setUserData] = useState<UserData>({});
  const [userPlaylistData, setUserPlaylistData] = useState<UserData>({});

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const search = location.search.split("=");
    if (search[0] === "?code") {
      localStorage.setItem("auth_code", search[1]);
      navigate({ search: "" });
    }
  }, []);

  useEffect(() => {
    if (authCode && !isAuth) {
      const handleAuth = async () => {
        const { status } = await setRefreshAccessToken();
        if (status) {
          setAuth(true);
        } else setAuth(false);
      };
      handleAuth();
    }
  }, [authCode]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUserData(data);
    };
    if (isAuth) {
      fetchUserData();
    }
  }, [isAuth]);

  useEffect(() => {
    const fetchUserPlayList = async () => {
      const data = await getUserPlaylists();
      setUserPlaylistData(data);
    };
    if (isAuth) {
      fetchUserPlayList();
    }
  }, [isAuth]);

  const signInAuth = (): void => {
    const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    window.location.replace(
      `${END_POINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
    );
  };

  const signOutAuth = () => {
    localStorage.clear();
    setAuth(false);
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ isAuth, signInAuth, signOutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
