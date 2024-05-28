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

  return (
    <div className="w-full py-2.5 flex items-center justify-between px-1">
      <div className="flex items-center gap-3 w-full pr-3">
        <div className="relative w-20 aspect-square rounded-full">
          <Image src={chat.srcImage} fill alt="" className="rounded-full" />
        </div>

        <div
          style={{ borderColor: "#ffffff15", borderBottomWidth: "1.5px" }}
          className="py-1  flex flex-col gap-1   w-full"
        >
          <div className="flex items-center gap-1 h-full">
            <div className={`relative ${chat.type !== "private" && "w-4"} aspect-square`}>
                  {chat.type === "group" ? (
                <Image fill src="/assets/icon/Group-chat-icon.svg" alt="" />
                ) : chat.type === "channel" ? (
                <Image fill src="/assets/icon/Megaphone.svg" alt="fjfjfj" />
            ) : (
              <></>
            )}
              </div>

            <p className="text-7289D9 text-left">{chat.name}</p>
          </div>

          {messageEnd?.type === "text" ? (
            <p className="text-c88 text-left min-h-4">{messageEnd.text}</p>
          ) : messageEnd?.type === "photo" ? (
            <div className="flex gap-1 items-center">
              <div className="w-5 h-5 relative rounded-sm">
                <Image
                  src={
                    messageEnd.srcContent[messageEnd.srcContent.length - 1]
                      .srcContent
                  }
                  className="rounded-sm"
                  fill
                  alt=""
                />
              </div>
              <p className="text-0078D4">Photo</p>
            </div>
          ) : messageEnd?.type === "document" ? (
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
      <div className="flex flex-col justify-start">
        <p className="text-c88 mb-1">8:32PM</p>
        <div>
          {secured && (
            <div>
              <SecuredIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
