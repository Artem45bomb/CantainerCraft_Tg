"use client";
import ContentMessages from "./ContentMessages/ContentMessages";
import Header from "./Header/Header";
import Input from "./Input/Input";
import { ChatInfoTest, msgTest } from "@/test/default.data";
import VoiceChat from "./VoiceChat";
import { useEffect, useState } from "react";
import { chatStore } from "@/features/store/chat";

export function Chat() {
  const [isVoiceChat, setActiveVoiceChat] = useState(false);
  const { chatIn } = chatStore();

  useEffect(() => {});

  return (
    <div className="flex flex-col bg-[#1D4846] w-full h-full border rounded-lg border-white">
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
          <p className="rounded-full my-2 mx-2 px-3 py-2 bg-fff018 text-black text-sm inline-flex translate-x--1/2">
            {"7 May"}
          </p>
        </div>
        <div className="w-full absolute max-w-full max-h-full h-full scroller-chat overflow-y-scroll">
          <ContentMessages
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
