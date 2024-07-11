"use client";

import { FC, RefObject, useEffect, useRef } from "react";
import UserLogo from "@/widgets/Chat/Userlogo/UserLogo";
import { Settings } from "@/widgets/Chat/VoiceChat";
import { User } from "@/entities";

interface Props {
  user: User;
  settings: Settings;
  isFullscreen?: boolean;
  streamStart: (settings: Settings, ref: RefObject<HTMLVideoElement>) => void;
  streamStop: (ref: RefObject<HTMLVideoElement>) => void;
  userRef?: RefObject<HTMLVideoElement>;
}

export const UserStream: FC<Props> = ({
  settings,
  user,
  userRef,
  streamStart,
  streamStop,
  isFullscreen = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (settings.Voice || settings.Micro) {
      streamStart(settings, userRef || videoRef);
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
          className="h-full transition-all duration-0"
          ref={userRef !== undefined ? userRef : videoRef}
        ></video>
      )}
    </div>
  );
};
