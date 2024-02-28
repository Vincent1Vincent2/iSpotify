import { useContext } from "react";
import { AuthAccess, AuthContext } from "../auth/authCodeLogin";
import Frame from "./Frame";

function AuthAccessInitializer() {
  const { isAuth } = useContext(AuthContext);
  return (
    <AuthAccess>
      <Frame />
    </AuthAccess>
  );
}

export default AuthAccessInitializer;
