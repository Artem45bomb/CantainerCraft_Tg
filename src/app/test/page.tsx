"use client";


import { Panel } from "@/widgets/Chat/VoiceChat/Panel";
import {userTest} from "@/test/default.data";
import VoiceChat from "@/widgets/Chat/VoiceChat";
import {useState} from "react";



export default function TestPage() {
  const [value,setValue] =  useState<boolean>(false)

  return (
      <div className="w-full h-full bg-black">
        <div className="flex h-full justify-center items-center">
          <Panel settingsChat={{
            Voice: false,
            Screen: false,
            Micro: false,
            Telephone: false,
          }}
                 user={userTest}
                 usersInChat={[]}
          />
          <VoiceChat setActiveVoiceChat={setValue} userIncomingName={""}/>
        </div>
      </div>
  );
}
