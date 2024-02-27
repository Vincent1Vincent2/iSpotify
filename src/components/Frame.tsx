import Screen from "./Screen";
import ScrollWheel from "./ScrollWheel";

function Frame() {
  return (
    <div className="h-full w-80 flex flex-col justify-between items-center bg-slate-100 gap-3 py-10 px-5 rounded-xl">
      <Screen />
      <ScrollWheel />
    </div>
  );
}

export default Frame;
