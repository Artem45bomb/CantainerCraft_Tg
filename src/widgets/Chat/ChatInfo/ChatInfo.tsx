import Image from "next/image";
import ChatName from "../ChatName/ChatName";
import Members from "../Members/Members";
import OnlineMembers from "../OnlineMembers/OnlineMembers";

export default function ChatInfo() {
  return (
    <a href="#" className="flex">
      <div className=" mr-2.5">
        <Image
          className="rounded-full"
          width="50"
          height="50"
          src="/assets/testIcons/logo.jpg"
          alt="logo of chat"
        />
      </div>
      <div className=" ">
        <ChatName chatName="73 TP" />
        <div className=" text-xs font-normal text-c88">
          <Members countOfMembers={5} />
          <OnlineMembers countOfOnlineMembers={3} />
        </div>
      </div>
    </a>
  );
}
