"use client";

import { Panel } from "@/widgets/Chat/VoiceChat/Panel";
import { userTest } from "@/test/default.data";
import VoiceChat from "@/widgets/Chat/VoiceChat";
import { useState } from "react";
import SettingsPanel from "@/widgets/SettingsPanel";

export default function TestPage() {
  return (
    // <div className="w-full h-full bg-black">
    //   <div className="flex h-full justify-center items-center">
    //     <Panel settingsChat={{
    //       Voice: false,
    //       Screen: false,
    //       Micro: false,
    //       Telephone: false,
    //     }}
    //            user={userTest}
    //            usersInChat={[]}
    //     />
    //     <VoiceChat setActiveVoiceChat={setValue} userIncomingName={""}/>
    //   </div>
    // </div>
    <SettingsPanel />
  );
}
