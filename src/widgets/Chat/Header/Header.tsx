import Search from "../../../shared/ButtonChat/Search";
import Shape from "../../../shared/ButtonChat/Shape";
import More from "../../../shared/ButtonChat/More";
import ChatInfo from "../ChatInfo/ChatInfo";
import { Dispatch, SetStateAction } from "react";

export interface Props {
  description: {
    logoSrc: string;
    chatName: string;
    countOfMembers: number;
    countOfOnlineMembers: number;
  };
  setActiveVoiceChat: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ description, setActiveVoiceChat }: Props) {
  return (
    <header className=" border-b border-fff005">
      <div className="flex justify-between items-center px-11 h-21">
        <ChatInfo
          logoSrc={description.logoSrc}
          chatName={description.chatName}
          countOfMembers={description.countOfMembers}
          countOfOnlineMembers={description.countOfOnlineMembers}
        />
        <div className="flex gap-2.5">
          <Search />
          <Shape
            callback={() => {
              setActiveVoiceChat((prev) => !prev);
            }}
          />
          <More />
        </div>
      </div>
    </header>
  );
}
