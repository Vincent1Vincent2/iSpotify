import { AuthContext } from "../API/auth/authCodeLogin";

import { useContext } from "react";

function SignIn() {
  const authContext = useContext(AuthContext);

  const handleSignIn = () => {
    authContext.signInAuth();
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
