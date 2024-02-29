import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../API/auth/authCodeLogin";
import SignIn from "./SignIn";

interface AuthAccessInitializerProps {}

const AuthAccessInitializer: FC<AuthAccessInitializerProps> = () => {
  const { isAuth } = useContext(AuthContext);

  console.log(isAuth);

  return isAuth ? <Link to="/ipod" /> : <SignIn />;
};

export default AuthAccessInitializer;
