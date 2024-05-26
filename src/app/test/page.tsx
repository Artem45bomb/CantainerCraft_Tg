import { NavBar } from "@/widgets/NavBar";
import {Chat} from "@/widgets/Chat";
import { Loader } from "@/widgets/NavBar/Loader";
import VoiceChat from "@/widgets/Chat/VoiceChat";
import ContextMenu from "@/widgets/ContextMenu";

export default function Functest() {
  return (
    <div className="w-full h-full bg-black">
      {/* <Loader /> */}
      <VoiceChat/>
    </div>
  );
}
