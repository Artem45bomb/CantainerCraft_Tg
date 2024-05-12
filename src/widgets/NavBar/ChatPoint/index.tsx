import { Chat } from "@/entities";
import exp from "constants";
import Image from "next/image";
import { FC } from "react";

interface IChatPoint {
  chat: Chat;
  active: boolean;
  setActive: (arg: number) => void;
}

export const ChatPoint: FC<IChatPoint> = ({ chat }) => {
  return (
    <div className="flex">
      <div className="relative h-full aspect-square rounded-full">
        <Image src={chat.srcImage} fill alt="" />
      </div>
      <div>
        <p>{chat.name}</p>
        <p>{chat.messages[chat.messages.length - 1].text}</p>
      </div>
      <div>
        <p>{chat.messages[chat.messages.length - 1].date}</p>
        <p></p>
      </div>
    </div>
  );
};
