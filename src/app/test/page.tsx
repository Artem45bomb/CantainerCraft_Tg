"use client";
import { Chat } from "@/widgets/Chat";
import ContextMenu from "@/widgets/ContextMenu";

export default function TestPage() {
  //const [active, setActive] = useState<boolean>(false);

  return (
    <div className="w-full h-full bg-black">
      <Chat />
    </div>
  );
}
