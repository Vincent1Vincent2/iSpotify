import { AuthAccess } from "../auth/authCodeLogin";
import SignIn from "./SignIn";

function AuthAccessInitializer() {
  return (
    <AuthAccess>
      <SignIn />
    </AuthAccess>
  );
}
export default AuthAccessInitializer;
