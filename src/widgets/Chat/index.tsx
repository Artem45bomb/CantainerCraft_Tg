"use client";
import ContentMessages from "./ContentMessages/ContentMessages";
import Header from "./Header/Header";
import Input from "./Input/Input";
import { ChatInfoTest } from "@/test/default.data";
import VoiceChat from "./VoiceChat";
import { useEffect, useRef, useState } from "react";
import MessageDate from "@/widgets/Chat/MessageDate";

export function Chat() {
  const [isVoiceChat, setActiveVoiceChat] = useState(false);
  const [messagesDate, setMessagesDate] = useState<Date | undefined>(undefined);
  const [scroll, setScroll] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const changeDate = (date: Date) => setMessagesDate(date);

  return (
    <>
      {isVoiceChat && (
        <div className="absolute w-3/4 top-0 right-0 h-full z-20">
          <VoiceChat
            activeVoiceChat={isVoiceChat}
            setActiveVoiceChat={setActiveVoiceChat}
          />
        </div>
      )}
      <div className="overflow-hidden flex flex-col bg-[#1D4846] w-full h-full border rounded-lg border-white">
        <Header
          description={{
            logoSrc: ChatInfoTest.logoSrc,
            chatName: ChatInfoTest.chatName,
            countOfMembers: ChatInfoTest.countOfMembers,
            countOfOnlineMembers: ChatInfoTest.countOfOnlineMembers,
          }}
          setActiveVoiceChat={setActiveVoiceChat}
        />
        <div className="relative max-w-full max-x-full h-full max-h-full">
          <div className="absolute top-1 left-1/2">
            <MessageDate date={messagesDate} scroll={scroll} />
          </div>
          <div
            ref={ref}
            onScroll={() => setScroll((prev) => !prev)}
            className="w-full absolute max-w-full max-h-full h-full scroller-chat overflow-y-scroll"
          >
            <ContentMessages
              scroll={scroll}
              contextMessage={ref}
              setMessagesDate={changeDate}
            />
          </div>
        </div>
        <div className="w-full self-end">
          <Input />
        </div>
      </div>
    </>
  );
}
