import { Link } from "react-router-dom";

function ScrollWheel() {
  return (
    //Grid?
    <div className="grid grid-cols-3 grid-rows-3 h-80 py-5 items-center justify-items-center">
      <div className="col-start-2">
        <Link to="">
          <button>Menu</button>
        </Link>
      </div>
      <div className="row-start-2">
        <button>Back</button>
      </div>
      <button className="row-start-2">MiddleButton</button>
      <button className="row-start-2">Forward</button>
      <button className="col-start-2 row-start-3">Play/Pause</button>
    </div>
  );
}

export default ScrollWheel;
