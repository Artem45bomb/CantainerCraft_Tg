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
  userRef?: RefObject<HTMLVideoElement>;
}

export const UserStream: FC<Props> = ({
  settings,
  user,
  userRef,
  streamStartCb,
  streamStopCb,
  fullStreamRef,
  isFullscreen = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const streamStart = (
    settings: Settings,
    ref: RefObject<HTMLVideoElement>,
  ) => {
    navigator.mediaDevices
      .getUserMedia({ video: settings.Micro, audio: settings.Voice })
      .then((stream) => {
        if (ref.current && ref.current.paused) {
          ref.current.srcObject = stream;
          ref.current.play();
          streamStartCb && streamStartCb();
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
      streamStopCb && streamStopCb();
    }
  };

  useEffect(() => {
    if (settings.Voice || settings.Micro) {
      streamStart(settings, userRef || videoRef);
    } else if (!settings.Voice && !settings.Micro) {
      streamStop(videoRef);
    }
  }, [settings]);

  useEffect(() => {
    if (isFullscreen && fullStreamRef.current && videoRef.current) {
      fullStreamRef.current.srcObject = videoRef.current.srcObject;
    }
    if (isFullscreen && fullStreamRef.current && userRef) {
      fullStreamRef.current.srcObject = userRef.current!.srcObject;
    }
  }, [isFullscreen]);

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
