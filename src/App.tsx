import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import AuthAccessInitializer from "./components/AuthAccessInitializer";
import Frame from "./components/Frame";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={AuthAccessInitializer}>
      <Route index element={<Navigate to="iSpotify" />} />
      <Route path="iSpotify" Component={Frame} />
    </Route>
  )
);
