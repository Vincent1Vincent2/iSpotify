import { Route, Routes } from "react-router-dom";
import AuthAccessInitializer from "./components/AuthAccessInitializer";
AuthAccessInitializer;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthAccessInitializer />}></Route>
    </Routes>
  );
};

export default App;
