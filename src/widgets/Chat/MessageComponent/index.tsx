"use client";
import { Message } from "@/entities/chat/message/Message";
import { UserChat } from "@/features/store/chat";
import { userStore } from "@/features/store/user";
import { RefObject, useEffect, useRef, useState } from "react";
import { MessageDate } from "@/widgets/Chat/MessageComponent/MessageDate";
import { MessageUserLogo } from "@/widgets/Chat/MessageComponent/MessageUserLogo";

interface Props {
  scroll: boolean;
  description: { message: Message; user: UserChat };
  prevMessage?: Message;
  nextMessage?: Message;
  setMessagesDate: (arg: Date) => void;
  contextMessage: RefObject<HTMLDivElement>;
}

export default function MessageComponent({
  scroll,
  description: { message, user },
  prevMessage,
  nextMessage,
  contextMessage,
  setMessagesDate,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { userAuth } = userStore();
  const [isShow, setIsShow] = useState<boolean>(true);
  const date: Date = new Date(message.date);
  const height = useRef<number>(0);
  const isNameView =
    (message.userId !== prevMessage?.userId &&
      message.userId !== nextMessage?.userId) ||
    (message.userId !== prevMessage?.userId &&
      message.userId === nextMessage?.userId);
  const widthMessage =
    message.text.length > 40 ? 300 : message.text.length > 10 ? 250 : 200;

  let timeBetweenMessages = prevMessage
    ? (new Date(message.date).getSeconds() -
        new Date(prevMessage.date).getSeconds()) /
      60
    : 3;

  useEffect(() => {
    if (ref.current) height.current = ref.current.offsetHeight;
  }, []);

  useEffect(() => {
    //experimental function
    if (ref.current && contextMessage.current) {
      if (
        contextMessage.current.scrollTop >= ref.current.offsetTop &&
        contextMessage.current.scrollTop <=
          ref.current.offsetTop + ref.current.offsetHeight
      ) {
        setMessagesDate(new Date(message.date));
      }

      //
      console.log(
        (contextMessage.current.scrollTop - 50 > ref.current.offsetTop &&
          contextMessage.current.scrollTop - 50 >
            ref.current.offsetHeight + ref.current.offsetTop) ||
          (contextMessage.current.scrollTop +
            contextMessage.current.offsetHeight +
            50 <
            ref.current.offsetTop &&
            contextMessage.current.scrollTop +
              contextMessage.current.offsetHeight +
              50 <
              ref.current.offsetHeight + ref.current.offsetTop),
      );
      if (
        (contextMessage.current.scrollTop - 50 > ref.current.offsetTop &&
          contextMessage.current.scrollTop - 50 >
            ref.current.offsetHeight + ref.current.offsetTop) ||
        (contextMessage.current.scrollTop +
          contextMessage.current.offsetHeight +
          50 <
          ref.current.offsetTop &&
          contextMessage.current.scrollTop +
            contextMessage.current.offsetHeight +
            50 <
            ref.current.offsetHeight + ref.current.offsetTop)
      ) {
        if (isShow) setIsShow(false);
      }

      if (
        (contextMessage.current.scrollTop - 50 < ref.current.offsetTop &&
          contextMessage.current.scrollTop - 50 <
            ref.current.offsetHeight + ref.current.offsetTop) ||
        (contextMessage.current.scrollTop +
          contextMessage.current.offsetHeight +
          50 >
          ref.current.offsetTop &&
          contextMessage.current.scrollTop +
            contextMessage.current.offsetHeight +
            50 >
            ref.current.offsetHeight + ref.current.offsetTop)
      ) {
        if (!isShow) setIsShow(true);
      }
    }
  }, [scroll]);

  return (
    <div ref={ref}>
      {isShow && (
        <div
          className={`flex w-full gap-2 relative
          ${nextMessage?.userId !== message.userId && "items-end"}
          ${message.userId === userAuth.id && "justify-end"}
          `}
        >
          <MessageUserLogo
            isShow={
              message.userId !== userAuth.id &&
              nextMessage?.userId !== message.userId
            }
            srcImageProfile={user.srcImageProfile}
          />

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
              <p className="text-sm text-C8D1DA pr-2 break-words">
                {message.text}
              </p>
              <MessageDate date={date} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
