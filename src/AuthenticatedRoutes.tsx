// AuthenticatedRoutes.js
import { Route, Routes } from "react-router-dom";
import IpodBody from "./components/IpodBody";
import MenuNav from "./components/UI/MenuNav";
import PlaylistItem from "./components/UI/Playlist";

const AuthenticatedRoutes = () => {
  return (
    <>
      <MenuNav />
      <IpodBody />
      <Routes>
        <Route path="/" element={<h1>Welcome to Authenticated Section</h1>} />
        <Route path="playlist" element={<PlaylistItem />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
};

export default AuthenticatedRoutes;
