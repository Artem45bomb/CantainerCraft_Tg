"use client";

import { Chat } from "@/widgets/Chat";
import SettingsPanel from "@/widgets/SettingsPanel";

export default function TestPage() {
  //const [active, setActive] = useState<boolean>(false);

  return (
    <div className="w-full h-full bg-black">
      <SettingsPanel />
    </div>
  );
}
