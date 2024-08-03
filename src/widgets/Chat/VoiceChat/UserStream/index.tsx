"use client";
import { FC, RefObject, useEffect, useRef } from "react";
import UserLogo from "@/widgets/Chat/Userlogo/UserLogo";
import { TrackInfo, User } from "@/entities";
import { Settings } from "@/features/types/voiceChat";
import VideoComponent from "./VideoComponent";
import AudioComponent from "./AudioComponent";

interface Props {
  tracks: TrackInfo[];
  user: User;
  settings: Settings;
  isFullscreen?: boolean;
  userRef?: RefObject<HTMLVideoElement>;
}

export const UserStream: FC<Props> = ({
  tracks,
  settings,
  user,
  isFullscreen = false,
}) => {
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
        <>
          {tracks.map((remoteTrack) =>
            remoteTrack.trackPublication.kind === "video" ? (
              <VideoComponent
                key={remoteTrack.trackPublication.trackSid}
                track={remoteTrack.trackPublication.videoTrack!}
                participantIdentity={remoteTrack.participantIdentity}
              />
            ) : (
              <AudioComponent
                key={remoteTrack.trackPublication.trackSid}
                track={remoteTrack.trackPublication.audioTrack!}
              />
            ),
          )}
        </>
      )}
    </div>
  );
};
