import { Link, Outlet } from "react-router-dom";

const MenuNav = () => {
  return (
    <div>
      <Link to="playlist">
        <button>Playlist</button>
        <Outlet />
      </Link>
    </div>
  );
};

export default MenuNav;
