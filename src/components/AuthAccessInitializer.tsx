import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthAccess, AuthContext } from "../API/auth/authCodeLogin";
import IpodBody from "./IpodBody";

interface AuthAccessInitializerProps {}

const AuthAccessInitializer: FC<AuthAccessInitializerProps> = () => {
  const authContext = React.useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!authContext.isAuth) {
      navigate("");
    }
  }, [authContext.isAuth, navigate]);

  return (
    <AuthAccess>
      <IpodBody />
    </AuthAccess>
  );
};

export default AuthAccessInitializer;
