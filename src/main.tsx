import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import IpodBody from "./components/IpodBody";
import PlaylistItem from "./components/UI/Playlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "ipod",
    element: <IpodBody></IpodBody>,
    children: [
      {
        path: "playlist",
        element: <PlaylistItem></PlaylistItem>,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
