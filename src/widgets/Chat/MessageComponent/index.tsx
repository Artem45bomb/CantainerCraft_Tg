"use client";
import { Message } from "@/entities/chat/message/Message";
import { UserChat } from "@/features/store/chat";
import { userStore } from "@/features/store/user";
import UserLogo from "@/widgets/Chat/Userlogo/UserLogo";
import { RefObject, useEffect, useRef } from "react";

interface Props {
  scroll: boolean;
  message: Message;
  user: UserChat;
  prevMessage?: Message;
  nextMessage?: Message;
  setMessagesDate: (arg: Date) => void;
  contextMessage: RefObject<HTMLDivElement>;
}

export default function MessageComponent({
  message,
  scroll,
  user,
  prevMessage,
  nextMessage,
  contextMessage,
  setMessagesDate,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { userAuth } = userStore();
  const date: Date = new Date(message.date);
  const isNameView =
    (message.userId !== prevMessage?.userId &&
      message.userId !== nextMessage?.userId) ||
    (message.userId !== prevMessage?.userId &&
      message.userId === nextMessage?.userId);
  const widthMessage =
    message.text.length > 40 ? 300 : message.text.length > 10 ? 250 : 200;

  let timeBetweenMessages = 3;
  if (prevMessage) {
    timeBetweenMessages =
      (new Date(message.date).getSeconds() -
        new Date(prevMessage.date).getSeconds()) /
      60;
  }

  useEffect(() => {
    //experimental function
    if (ref.current && contextMessage.current) {
      if (
        contextMessage.current.scrollTop >= ref.current.offsetTop &&
        contextMessage.current.scrollTop <=
          ref.current.offsetTop + ref.current.offsetHeight
      ) {
        setMessagesDate(new Date(message.date));
        console.log(
          "message:",
          message.text,
          ",pos:",
          ref.current?.offsetTop,
          ",posScroll",
          contextMessage.current?.scrollTop,
        );
      }
    }
  }, [scroll]);

  return (
    <div
      ref={ref}
      className={`flex w-full gap-2 relative
       ${nextMessage?.userId !== message.userId && "items-end"}
       ${message.userId === userAuth.id && "justify-end"}
       `}
    >
      {message.userId !== userAuth.id &&
        nextMessage?.userId !== message.userId && (
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
      {message.userId != userAuth.id &&
        nextMessage?.userId === message.userId && (
          <div style={{ width: 45, height: 45 }}></div>
        )}
      <div
        style={{ width: widthMessage }}
        className={`${widthMessage}
        ${timeBetweenMessages <= 2 && prevMessage?.userId === message.userId && "mt-1"}
        ${(prevMessage?.userId !== message.userId || timeBetweenMessages > 2) && "mt-2.5"}
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
          className={`
            flex items-end justify-between mt-1 
          `}
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
