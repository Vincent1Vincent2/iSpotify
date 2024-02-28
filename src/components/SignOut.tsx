import { useContext } from "react";
import { AuthContext } from "../API/auth/authCodeLogin";

function SignOut() {
  const authContext = useContext(AuthContext);

  const signOutAuth = () => {
    authContext.signOutAuth();
  };

  return (
    <div>
      <button onClick={signOutAuth}>Sign Out</button>
    </div>
  );
}

export default SignOut;
