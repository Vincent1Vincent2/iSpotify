import { AuthAccess } from "./API/auth/authCodeLogin";
import AuthAccessInitializer from "./components/AuthAccessInitializer";
AuthAccessInitializer;

const App = () => {
  return (
    <AuthAccess>
      {" "}
      <AuthAccessInitializer></AuthAccessInitializer>
    </AuthAccess>
  );
};

export default App;
