"use client";

import { Message } from "@/entities/chat/message/Message";
import { UserChat } from "@/features/store/chat";
import { userStore } from "@/features/store/user";
import UserLogo from "@/widgets/Chat/Userlogo/UserLogo";

interface Props {
  isNameView: boolean;
  message: Message;
  user: UserChat;
  prevMessage?: Message;
  nextMessage?: Message;
}

export default function MessageComponent({
  message,
  isNameView,
  user,
  prevMessage,
  nextMessage,
}: Props) {
  const { userAuth } = userStore();

  const date: Date = new Date(message.date);
  const widthMessage =
    message.text.length > 40 ? 300 : message.text.length > 10 ? 250 : 200;

  return (
    <div
      className={`flex w-full gap-2 ${nextMessage?.userId !== message.userId && "items-end"}`}
    >
      {nextMessage?.userId !== message.userId && (
        <div
          style={{
            width: 45,
            height: 45,
          }}
          className={"rounded-full"}
        >
          <UserLogo
            srcImage={user.srcImageProfile || "/assets/testIcons/logo.jpg"}
          />
        </div>
      )}
      {nextMessage?.userId === message.userId && (
        <div style={{ width: 45, height: 45 }}></div>
      )}
      <div
        style={{ width: widthMessage }}
        className={`${widthMessage}
        ${prevMessage?.userId === message.userId && "mt-1"}
        ${prevMessage?.userId !== message.userId && "mt-2.5"}
       bg-fff010 rounded-1.5xl p-2 select-auto
       `}
      >
        {isNameView ? (
          <div className="flex justify-between ">
            <p className=" text-7289D9 font-semibold text-xs select-none">
              {user.name}
            </p>
          </div>
        ) : null}
        <div
          className={
            message.emotions.length > 0 ? "mt-1" : "mt-1 flex items-end"
          }
        >
          <p className="text-sm text-C8D1DA pr-2 break-words">{message.text}</p>
          <p className=" text-xs font-light text-end select-none">
            {date.getHours().toString().padStart(2, "0")}:
            {date.getMinutes().toString().padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
}
