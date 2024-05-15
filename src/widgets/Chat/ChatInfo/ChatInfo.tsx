import Image from "next/image";
import { InfoAboutChat } from "@/entities/InfoAboutChat";

export default function ChatInfo({
  logoSrc,
  chatName,
  countOfMembers,
  countOfOnlineMembers,
}: InfoAboutChat) {
  return (
    <a href="#" className="flex">
      <div className=" mr-2.5">
        <Image
          className="rounded-full"
          width="50"
          height="50"
          src={logoSrc}
          alt="logo of chat"
        />
      </div>
      <div className=" ">
        <div className="text-white font-semibold text-base pb-0.5">
          {chatName}
        </div>

        <div className=" text-xs font-normal text-c88">
          <span>{countOfMembers} members,</span>
          <span> {countOfOnlineMembers} online</span>
        </div>
      </div>
    </a>
  );
}
