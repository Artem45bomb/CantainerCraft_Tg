"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { userStore } from "@/features/store/user";
import { Panel } from "@/widgets/Chat/VoiceChat/Panel";
import { Settings, UserInChat } from "@/features/types/voiceChat";
import { BroadcastContainer } from "@/widgets/Chat/VoiceChat/BroadcastContainer";
import { motion } from "framer-motion";

interface IVoiceChat {
  activeVoiceChat: boolean;
  setActiveVoiceChat: Dispatch<SetStateAction<boolean>>;
}

const variants: Record<string, unknown> = {
  hidden: {
    left: 0,
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 60,
      damping: 10,
    },
  },
  show: {
    left: "-25vw",
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 60,
      damping: 10,
    },
  },
};

function VoiceChat({ setActiveVoiceChat, activeVoiceChat }: IVoiceChat) {
  const { userAuth } = userStore();
  const [isShow, setIsShow] = useState(true);
  const [settings, setSettings] = useState<Settings>({
    Voice: false,
    Screen: false,
    Micro: true,
    Telephone: false,
  });

  const usersInVoiceChat: UserInChat[] = [
    { user: userAuth, settings: settings },
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
    <motion.div
      initial={"show"}
      animate={isShow ? "show" : "hidden"}
      className="flex h-full  relative w-full"
    >
      <motion.div
        variants={variants}
        className={"transition-all w-1/4-vw h-full absolute top-0"}
      >
        <Panel stopStream={streamOff} usersInChat={usersInVoiceChat} />
      </motion.div>
      {activeVoiceChat ? (
        <BroadcastContainer
          isShow={isShow}
          setIsShow={setIsShow}
          streamOff={streamOff}
          settings={settings}
          setSettings={setSettings}
          usersInVoiceChat={usersInVoiceChat}
        />
      ) : (
        <div className="flex flex-col h-full w-full bg-1D4846 relative"></div>
      )}
    </motion.div>
  );
}

export default VoiceChat;
