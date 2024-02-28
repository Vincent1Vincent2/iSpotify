import Login from "./auth/Login";
import { AuthAccess } from "./auth/authCodeLogin";

function App() {
  return (
    <AuthAccess>
      <Login />
    </AuthAccess>
  );
}

export default App;
