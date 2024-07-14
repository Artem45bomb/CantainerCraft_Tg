import { FC, RefObject, useState } from "react";
import { UserInChat } from "@/features/types/voiceChat";
import { UserStream } from "@/widgets/Chat/VoiceChat/UserStream";
import { userStore } from "@/features/store/user";
import { HideButton } from "@/shared/ButtonStream";

interface Props {
  usersInChat: UserInChat[];
  isFullStream: UserInChat | null;
  activeStream: (arg: UserInChat) => void;
  myRef: RefObject<HTMLVideoElement>;
}

export const UserContainer: FC<Props> = ({
  isFullStream,
  myRef,
  usersInChat,
  activeStream,
}) => {
  const { userAuth } = userStore();
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className={"flex flex-col gap-2 items-center"}>
      <div className={"w-full h-36 flex items-center justify-center"}>
        <div className={`flex gap-5 items-center ${!active && "hidden"}`}>
          {usersInChat.map((e) => {
            return (
              <div key={e.user.id} className={"relative"}>
                <button
                  className="w-56 aspect-video"
                  onClick={() =>
                    activeStream({ user: e.user, settings: e.settings })
                  }
                >
                  <UserStream
                    user={e.user}
                    settings={e.settings}
                    userRef={e.user.id == userAuth.id ? myRef : undefined}
                  />
                </button>
                {isFullStream?.user.id === e.user.id && (
                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,0.64)",
                      backdropFilter: "blur(10px)",
                    }}
                    className={
                      "border-white border-2 rounded-3xl flex justify-center items-center absolute top-0 left-0 w-56 aspect-video bg-black"
                    }
                  >
                    <p className={"text-xl text-white font-bold"}>
                      Эфир на зкране
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <HideButton
        active={active}
        setActive={() => setActive((prev) => !prev)}
      />
    </div>
  );
};
