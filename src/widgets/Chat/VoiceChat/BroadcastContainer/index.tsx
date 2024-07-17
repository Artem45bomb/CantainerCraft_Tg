import { Header } from "@/widgets/Chat/VoiceChat/Header";
import { ButtonAction } from "@/widgets/Chat/VoiceChat/ButtonAction";
import { userStore } from "@/features/store/user";
import { Dispatch, SetStateAction, useRef, useState, FC } from "react";
import { Settings, UserInChat } from "@/features/types/voiceChat";
import { UserContainer } from "@/widgets/Chat/VoiceChat/BroadcastContainer/UserContainer";
import { ObjectFields } from "@/features/api/util";
import { User } from "@/entities";
import { FullUserStream } from "@/widgets/Chat/VoiceChat/FullUserStream";

interface Props {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  setSettings: Dispatch<SetStateAction<Settings>>;
  settings: Settings;
  streamOff: () => void;
  usersInVoiceChat: UserInChat[];
}

export const BroadcastContainer: FC<Props> = ({
  streamOff,
  settings,
  setSettings,
  usersInVoiceChat,
  setIsShow,
}) => {
  const [isFullScreen, setIsFullScreen] = useState<UserInChat | null>(null);
  const { userAuth } = userStore();
  const videoUserRef = useRef<HTMLVideoElement>(null);
  const fullStreamRef = useRef<HTMLVideoElement>(null);

  const handleButtonPress = (buttonName: ObjectFields<Settings>) => {
    setSettings((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const activeStream = (stream: { user: User; settings: Settings }) => {
    setIsFullScreen(stream);
  };

  const setShowPanelCb = () => setIsShow((prevState) => !prevState);

  return (
    <div className="flex flex-col h-full w-full bg-1D4846 relative">
      <Header clickShowCb={setShowPanelCb} userName={userAuth.name} />
      <div className="flex-1 flex flex-col pt-10 items-center justify-center">
        {isFullScreen !== null && isFullScreen.settings.Micro && (
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="w-full aspect-video mb-3 rounded-2xl">
              <FullUserStream
                fullStreamRef={fullStreamRef}
                user={isFullScreen.user}
                settings={isFullScreen.settings}
              />
            </div>
          </div>
        )}

        <UserContainer
          fullStreamRef={fullStreamRef}
          isFullStream={isFullScreen}
          myRef={videoUserRef}
          usersInChat={usersInVoiceChat}
          activeStream={activeStream}
        />
      </div>
      <div className="w-full h-18 my-6 flex items-center justify-center space-x-8">
        <ButtonAction
          clickCb={() => {
            if (isFullScreen?.user.id === userAuth.id) setIsFullScreen(null);
            handleButtonPress("Micro");
          }}
          srcImage={"/assets/icon/Voice-call-icon.svg"}
          className={settings.Micro ? "bg-desaturated-cyan" : "bg-police-blue"}
          alt={"no video call"}
        />
        <ButtonAction
          clickCb={() => handleButtonPress("Screen")}
          srcImage={"/assets/icon/Screen-icon.svg"}
          alt={"screen"}
          className={settings.Screen ? "bg-police-blue" : "bg-desaturated-cyan"}
        />
        <ButtonAction
          clickCb={() => handleButtonPress("Voice")}
          srcImage={"/assets/icon/Micro-icon.svg"}
          alt={"Off/on micro"}
          className={settings.Voice ? "bg-desaturated-cyan" : "bg-police-blue"}
        />
        <ButtonAction
          clickCb={() => {
            if (isFullScreen?.user.id === userAuth.id) setIsFullScreen(null);
            streamOff();
          }}
          srcImage={"/assets/icon/Telephone-icon.svg"}
          className={settings.Telephone ? "bg-police-blue" : "bg-red-500"}
        />
      </div>
    </div>
  );
};
