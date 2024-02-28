import Display from "./UI/Display";
import ScrollWheel from "./UI/ScrollWheel";

const IpodBody: React.FC = () => {
  return (
    <div className="h-2/3 w-7/12 flex flex-col justify-between items-center bg-slate-200 gap-3 py-10 px-5 rounded-xl">
      <Display />
      <ScrollWheel />
    </div>
  );
};
export default IpodBody;
