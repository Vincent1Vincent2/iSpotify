import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../API/auth/authCodeLogin";

function SignIn() {
  const authContext = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = async () => {
    try {
      authContext.signInAuth();
      setIsAuthenticated(true);
    } catch (error) {
      // Handle authentication error
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        // Use Link for navigation
        <Link to="/ipod">Go to Ipod</Link>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
}

export default SignIn;
