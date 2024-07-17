"use client";
import { FC, RefObject, useEffect, useRef } from "react";
import UserLogo from "@/widgets/Chat/Userlogo/UserLogo";
import { User } from "@/entities";
import { Settings } from "@/features/types/voiceChat";

interface Props {
  user: User;
  settings: Settings;
  isFullscreen?: boolean;
  streamStartCb?: () => void;
  streamStopCb?: () => void;
  fullStreamRef: RefObject<HTMLVideoElement>;
}

export const FullUserStream: FC<Props> = ({
  settings,
  user,
  fullStreamRef,
  streamStopCb,
  isFullscreen = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const streamStart = (ref: RefObject<HTMLVideoElement>) => {
    if (ref.current) {
      ref.current.play();
    }
  };

  const streamStop = (ref: RefObject<HTMLVideoElement>) => {
    if (ref.current) {
      ref.current.pause();
      ref.current.srcObject = null;
      streamStopCb && streamStopCb();
    }
  };

  useEffect(() => {
    if (settings.Voice || settings.Micro) {
      streamStart(fullStreamRef);
    } else if (!settings.Voice && !settings.Micro) {
      streamStop(videoRef);
    }
  }, [settings]);

  return (
    <div
      className={`${!isFullscreen ? "border-2 border-dark-50" : ""} w-full h-full flex items-center justify-center ${settings.Micro || settings.Voice ? "bg-black" : "bg-verdigris"}   rounded-3xl`}
    >
      {!settings.Micro ? (
        <div
          className={`border  rounded-full m-6 border-green-300 inline-block w-24 aspect-square`}
        >
          <UserLogo srcImage={user.srcImageProfile} />
        </div>
      ) : (
        <video
          className="h-full transition-all duration-0 rounded-3xl"
          ref={fullStreamRef}
        ></video>
      )}
    </div>
  );
};
