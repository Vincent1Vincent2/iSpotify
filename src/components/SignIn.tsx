import { useContext } from "react";
import { AuthContext } from "../auth/authCodeLogin";

function SignIn() {
  const authContext = useContext(AuthContext);

  const signInAuth = () => {
    authContext.signInAuth();
  };

  return (
    <div>
      <button onClick={signInAuth}>Sign In</button>
    </div>
  );
}

export default SignIn;
