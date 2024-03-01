import Display from "./Display";
import ScrollWheel from "./ScrollWheel";

const IpodBody = () => {
  return (
    <div className="h-128 w-96 flex flex-col justify-between items-center bg-slate-200 gap-3 py-10 px-5 rounded-xl">
      <Display />
      <ScrollWheel />
    </div>
  );
};
export default IpodBody;
