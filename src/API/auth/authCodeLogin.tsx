import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { END_POINT, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from "./authURL";
import { setRefreshAccessToken } from "./setRefreshAccessToken";

export interface AuthProp {
  children: ReactNode;
}

export const AuthContext = createContext({
  isAuth: false,
  signInAuth: () => {},
  signOutAuth: () => {},
});

export const AuthAccess: FC<AuthProp> = ({ children }) => {
  const refreshToken = localStorage.getItem("refresh_token");
  const authCode = localStorage.getItem("auth_code");
  const [isAuth, setAuth] = useState<boolean>(Boolean(refreshToken));

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const search = location.search.split("=");
    if (search[0] === "?code") {
      localStorage.setItem("auth_code", search[1]);
      navigate("/");
    }
  }, []);

  const signInAuth = async (): Promise<void> => {
    try {
      const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
      window.location.replace(
        `${END_POINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      );
      // Wait for a while to allow the redirection to happen
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const search = location.search.split("=");
      if (search[0] === "?code") {
        localStorage.setItem("auth_code", search[1]);
        await setRefreshAccessToken();
        setAuth(true);
      } else {
        console.error("Authentication failed. Auth code not found.");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

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
