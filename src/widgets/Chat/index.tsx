"use client";
import ContentMessages from "./ContentMessages/ContentMessages";
import Header from "./Header/Header";
import Input from "./Input/Input";
import { ChatInfoTest, msgTest } from "@/test/default.data";
import VoiceChat from "./VoiceChat";
import { useEffect, useRef, useState } from "react";
import { chatStore } from "@/features/store/chat";
import MessageDate from "@/widgets/Chat/MessageDate";

export function Chat() {
  const [isVoiceChat, setActiveVoiceChat] = useState(false);
  const [messagesDate, setMessagesDate] = useState<Date>(new Date());
  const [scroll, setScroll] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {});

  return (
    <div className="overflow-hidden flex flex-col bg-[#1D4846] w-full h-full border rounded-lg border-white">
      <Header
        logoSrc={ChatInfoTest.logoSrc}
        chatName={ChatInfoTest.chatName}
        countOfMembers={ChatInfoTest.countOfMembers}
        countOfOnlineMembers={ChatInfoTest.countOfOnlineMembers}
        setActiveVoiceChat={setActiveVoiceChat}
      />
      {isVoiceChat && (
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <VoiceChat
            activeVoiceChat={isVoiceChat}
            setActiveVoiceChat={setActiveVoiceChat}
          />
        </div>
      )}
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
            setMessagesDate={setMessagesDate}
          />
        </div>
      </div>
      <div className="w-full self-end">
        <Input />
      </div>
    </div>
  );
}
