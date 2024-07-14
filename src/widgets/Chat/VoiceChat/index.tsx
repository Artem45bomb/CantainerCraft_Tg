"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { userStore } from "@/features/store/user";
import { Panel } from "@/widgets/Chat/VoiceChat/Panel";
import { Settings, UserInChat } from "@/features/types/voiceChat";
import { BroadcastContainer } from "@/widgets/Chat/VoiceChat/BroadcastContainer";

interface IVoiceChat {
  activeVoiceChat: boolean;
  setActiveVoiceChat: Dispatch<SetStateAction<boolean>>;
}

function VoiceChat({ setActiveVoiceChat, activeVoiceChat }: IVoiceChat) {
  const { userAuth } = userStore();
  const [settings, setSettings] = useState<Settings>({
    Voice: false,
    Screen: false,
    Micro: true,
    Telephone: false,
  });

  const usersInVoiceChat: UserInChat[] = [
    { user: userAuth, settings: settings },
    {
      user: {
        ...userAuth,
        id: 8,
      },
      settings: {
        Voice: false,
        Screen: false,
        Micro: true,
        Telephone: false,
      },
    },
  ];

  const streamOff = () => {
    setSettings({
      Voice: false,
      Screen: false,
      Micro: false,
      Telephone: false,
    });
    setActiveVoiceChat((prev) => !prev);
  };

  return (
    <div className="flex h-full w-full">
      <Panel stopStream={streamOff} usersInChat={usersInVoiceChat} />
      {activeVoiceChat ? (
        <BroadcastContainer
          streamOff={streamOff}
          settings={settings}
          setSettings={setSettings}
          usersInVoiceChat={usersInVoiceChat}
        />
      ) : (
        <div className="flex flex-col h-full w-full bg-1D4846 relative"></div>
      )}
    </div>
  );
}

export default VoiceChat;
