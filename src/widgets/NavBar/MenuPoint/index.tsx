import { Chat } from "@/entities";
import { FC } from "react";
import Image from "next/image";
import ShareIcon from "@assets/icon/Shape.svg";
import SecuredIcon from "@assets/icon/Secured-icon.svg";

interface IMenuPoint {
  chat: Chat;
  secured: boolean;
}

export const MenuPoint: FC<IMenuPoint> = ({ chat, secured }) => {
  const { messages } = chat;
  const messageEnd = messages[messages.length - 1];

  return (
    <div className="w-full py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full">
          <Image src={chat.srcImage} fill alt="" className="rounded-full" />
        </div>
        <div className="py-0.5 flex flex-col gap-1">
          <p className="text-7289D9">{chat.name}</p>
          <p className="text-c88">{messageEnd.text}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-c88">8:32PM</p>
        {secured && (
          <div>
            <SecuredIcon />
          </div>
        )}
      </div>
    </div>
  );
};
