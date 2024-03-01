import Header from "./Header";
import Playlist from "./Playlist";

const Display: React.FC = () => {
  return (
    <main className="bg-slate-300 w-80 h-2/4 rounded-xl">
      <Header />
      <Playlist></Playlist>
    </main>
  );
};

export default Display;
