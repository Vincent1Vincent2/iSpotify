function ScrollWheel() {
  return (
    //Grid?
    <div className="grid grid-cols-3 grid-rows-3 h-60">
      <button className="col-start-2">Menu</button>
      <button className="row-start-2">Back</button>
      <button className="row-start-2">MiddleButton</button>
      <button className="row-start-2">Forward</button>
      <button className="col-start-2 row-start-3">Play/Pause</button>
    </div>
  );
}

export default ScrollWheel;
