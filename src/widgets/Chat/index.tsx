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
  const ref = useRef<HTMLDivElement>(null);
  const { chatIn } = chatStore();

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
          <MessageDate date={messagesDate} />
        </div>
        <div
          ref={ref}
          className="w-full absolute max-w-full max-h-full h-full scroller-chat overflow-y-scroll"
        >
          <ContentMessages
            contextMessage={ref}
            setMessagesDate={setMessagesDate}
            users={chatIn.users}
            messages={chatIn?.messages || msgTest}
          />
        </div>
      </div>
      <div className="w-full self-end">
        <Input></Input>
      </div>
    </div>
  );
}
