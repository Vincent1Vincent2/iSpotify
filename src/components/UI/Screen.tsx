import { FC, ReactNode, memo } from "react";
import Header from "./Header";
import MenuNav from "./Menu";

interface ScreenProps {
  children?: ReactNode;
}

const Screen: FC<ScreenProps> = () => {
  return (
    <main className="bg-slate-300 w-60 h-44 rounded-xl">
      <Header />
      <MenuNav />
    </main>
  );
};

export default memo(Screen);
