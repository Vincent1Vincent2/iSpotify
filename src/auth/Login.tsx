import { useContext } from "react";
import { AuthContext } from "./authCodeLogin";

function Login() {
  const authContext = useContext(AuthContext);

  const signInAuth = () => {
    authContext.signInAuth();
  };

  const signOutAuth = () => {
    authContext.signOutAuth();
  };

  return (
    <div>
      <button onClick={signInAuth}>Sign In</button>
      <button onClick={signOutAuth}>Sign Out</button>
    </div>
  );
}

export default Login;
