import { NavBar } from "@/widgets/NavBar";
import Chat from "@/widgets/Chat/index";
import { Loader } from "@/widgets/NavBar/Loader";

export default function Functest() {
  return (
    <div className="w-full h-full bg-black">
      {/* <Loader /> */}
      <Chat />
    </div>
  );
}
