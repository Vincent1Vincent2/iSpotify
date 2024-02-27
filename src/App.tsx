import { useState } from "react";
import Login from "./auth/Login";
import Frame from "./components/Frame";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <Frame />
      ) : (
        <Login setAuthenticated={setAuthenticated} />
      )}
    </div>
  );
}

export default App;
