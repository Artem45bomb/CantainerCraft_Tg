"use client";

import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { ObjectFields } from "@/features/api/util";
import Image from "next/image";
import { userStore } from "@/features/store/user";
import { UserStream } from "@/widgets/Chat/VoiceChat/UserStream";
import { Panel } from "@/widgets/Chat/VoiceChat/Panel";
import { User } from "@/entities";
import { HideButton } from "@/shared/ButtonStream";

export type Settings = {
  Voice: boolean;
  Screen: boolean;
  Micro: boolean;
  Telephone: boolean;
};

interface IVoiceChat {
  activeVoiceChat: boolean;
  setActiveVoiceChat: Dispatch<SetStateAction<boolean>>;
}

function VoiceChat({ setActiveVoiceChat, activeVoiceChat }: IVoiceChat) {
  const [time, setTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState<{
    user: User;
    settings: Settings;
  } | null>(null);
  const videoUserRef = useRef<HTMLVideoElement>(null);
  const { user } = userStore();
  const [active, setActive] = useState<boolean>(true);
  const [settings, setSettings] = useState<Settings>({
    Voice: false,
    Screen: false,
    Micro: true,
    Telephone: false,
  });

  const usersInVoiceChat: {
    user: User;
    settings: Settings;
  }[] = [];

  const handleButtonPress = (buttonName: ObjectFields<Settings>) => {
    setSettings((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };
  const streamStart = (
    settings: Settings,
    ref: RefObject<HTMLVideoElement>,
  ) => {
    console.log("setting:" + settings);
    navigator.mediaDevices
      .getUserMedia({ video: settings.Micro, audio: settings.Voice })
      .then((stream) => {
        if (ref.current) {
          ref.current.srcObject = stream;
          ref.current.play();
        }
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
  };

  const streamStop = (ref: RefObject<HTMLVideoElement>) => {
    if (ref.current) {
      ref.current.pause();
      ref.current.srcObject = null;
    }
  };

  const activeStream = (stream: { user: User; settings: Settings }) => {
    setIsFullScreen(stream);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = new Date(time * 1000).toISOString().substr(14, 5);
  const streamOff = () => {
    setSettings({
      Voice: false,
      Screen: false,
      Micro: false,
      Telephone: false,
    });
    setIsFullScreen(null);
    setActiveVoiceChat((prev) => !prev);
  };

  return (
    <div className="flex h-full w-full">
      <Panel
        stopStream={streamOff}
        settingsChat={settings}
        usersInChat={[{ user, settings }, ...usersInVoiceChat]}
        user={user}
      />
      {activeVoiceChat ? (
        <div className="flex flex-col h-full w-full bg-1D4846 relative">
          <div className="absolute top-6 left-6 flex justify-center items-center gap-1.5">
            <button className="w-6 bg-365C5E aspect-square flex items-center justify-center rounded-full">
              <div className="relative w-5 aspect-square">
                <Image src="/assets/icon/Left-icon.svg" alt="" fill />
              </div>
            </button>
            <p className="text-5BC4BB">{user.name}</p>
          </div>
          <div className="h-auto mt-4 flex">
            <div className="flex w-full justify-end space-x-4 mr-6">
              <button className="relative w-6 h-6 mx-2">
                <Image
                  src="/assets/icon/Chat-icon.svg"
                  alt="off/on voice"
                  fill
                />
              </button>
              <button className="relative w-6 h-6 mx-2">
                <Image
                  src="/assets/icon/Voice-icon.svg"
                  alt="off/on voice"
                  fill
                />
              </button>
              <button className="relative w-6 h-6 mx-2">
                <Image
                  src="/assets/icon/Add-user-icon.svg"
                  alt="off/on voice"
                  fill
                />
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col pt-10 items-center justify-center">
            {isFullScreen !== null && isFullScreen.settings.Micro && (
              <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="w-full aspect-video mb-3">
                  <UserStream
                    streamStart={streamStart}
                    streamStop={streamStop}
                    user={isFullScreen.user}
                    settings={isFullScreen.settings}
                  />
                </div>
              </div>
            )}
            <div className={"flex flex-col gap-2 items-center"}>
              <div className={"w-full h-36 flex items-center justify-center"}>
                <div
                  className={`flex gap-5 items-center ${!active && "hidden"}`}
                >
                  {activeVoiceChat && (
                    <button
                      className="w-56 aspect-video"
                      onClick={() => activeStream({ user, settings })}
                    >
                      <UserStream
                        streamStart={streamStart}
                        streamStop={streamStop}
                        user={user}
                        settings={settings}
                        userRef={videoUserRef}
                      />
                    </button>
                  )}
                  {usersInVoiceChat.map((e) => {
                    return (
                      <button
                        key={e.user.id}
                        className="w-56 aspect-video"
                        onClick={() => activeStream({ user, settings })}
                      >
                        <UserStream
                          streamStart={streamStart}
                          streamStop={streamStop}
                          user={e.user}
                          settings={e.settings}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
              <HideButton
                active={active}
                setActive={() => setActive((prev) => !prev)}
              />
            </div>
            <div className="text-center text-gray-500 text-lg mt-3">
              {formattedTime}
            </div>
          </div>
          <div className="w-full h-18 my-6 flex items-center justify-center space-x-8">
            <button
              className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Micro ? "bg-desaturated-cyan" : "bg-police-blue"} `}
              onClick={() => {
                if (isFullScreen?.user.name === user.name) {
                  setIsFullScreen(null);
                }
                handleButtonPress("Micro");
              }}
            >
              <div className="relative w-8 h-8 mx-auto">
                <Image
                  fill
                  src="/assets/icon/Voice-call-icon.svg"
                  alt="no video call"
                />
              </div>
            </button>
            <button
              className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Screen ? "bg-police-blue" : "bg-desaturated-cyan"} `}
              onClick={() => handleButtonPress("Screen")}
            >
              <div className="relative w-8 h-8 mx-auto">
                <Image src="/assets/icon/Screen-icon.svg" alt="screen" fill />
              </div>
            </button>
            <button
              className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Voice ? "bg-desaturated-cyan" : "bg-police-blue"} `}
              onClick={() => {
                handleButtonPress("Voice");
              }}
            >
              <div className="relative w-6 h-6 mx-auto">
                <Image
                  src="/assets/icon/Micro-icon.svg"
                  alt="Off/on micro"
                  fill
                />
              </div>
            </button>
            <button
              className={`relative transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Telephone ? "bg-police-blue" : "bg-red-500"} `}
              onClick={streamOff}
            >
              <div className="relative w-10 h-10">
                <Image
                  fill
                  src="/assets/icon/Telephone-icon.svg"
                  alt="end the call"
                />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full w-full bg-1D4846 relative"></div>
      )}
    </div>
  );
}

export default VoiceChat;
