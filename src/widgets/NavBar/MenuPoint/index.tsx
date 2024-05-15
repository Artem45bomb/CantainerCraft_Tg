import { Chat } from "@/entities";
import { FC } from "react";
import Image from "next/image";
import SecuredIcon from "@assets/icon/Secured-icon.svg";

interface IMenuPoint {
  chat: Chat;
  secured: boolean;
}

export const MenuPoint: FC<IMenuPoint> = ({ chat, secured }) => {
  const { messages } = chat;
  const messageEnd = messages[messages.length - 1];
  const chatType = chat.type;

  return (
    <div className="w-full py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-3 w-full pr-3">
        <div className="relative w-20 aspect-square rounded-full">
          <Image src={chat.srcImage} fill alt="" className="rounded-full" />
        </div>

        <div
          style={{ borderColor: "#ffffff15", borderBottomWidth: "1.5px" }}
          className="py-1  flex flex-col gap-1   w-full"
        >
          <div className="flex items-center gap-1">
            {chatType === "group" ? (
              <div className="relative w-4 aspect-square">
                <Image fill src="/assets/icon/Group-chat-icon.svg" alt="" />
              </div>
            ) : chatType === "channel" ? (
              <div className="relative w-4 aspect-square">
                <Image fill src="/assets/icon/Megaphone.svg" alt="/" />
              </div>
            ) : (
              <></>
            )}
            <p className="text-7289D9">{chat.name}</p>
          </div>

          {messageEnd.type === "text" ? (
            <p className="text-c88">{messageEnd.text}</p>
          ) : messageEnd.type === "photo" ? (
            <div className="flex gap-1 items-center">
              <div className="w-5 h-5 relative rounded-sm">
                <Image
                  src={messageEnd.srcContent[0]}
                  className="rounded-sm"
                  fill
                  alt=""
                />
              </div>
              <p className="text-0078D4">Photo</p>
            </div>
          ) : messageEnd.type === "document" ? (
            <div className="flex items-center">
              <div className="relative w-6 h-6">
                <Image fill src="/assets/icon/Document-icon.svg" alt="" />
              </div>
              <p className="text-0078D4">Document</p>
            </div>
          ) : (
            <></>
          )}
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
