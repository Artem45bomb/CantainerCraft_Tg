"use client";
import ContentMessages from "./ContentMessages/ContentMessages";
import CountOfUnreadMessage, {
  ICountOfUnreadMessage,
} from "./CountOfUnreadMessage/CountOfUnreadMessage";
import Header, { PropsHeader } from "./Header/Header";
import Input from "./Input/Input";
import {
  ChatInfoTest,
  countUnreadMessagesTest,
  msgTest,
} from "@/test/default.data";
import VoiceChat from "./VoiceChat";
import { useState } from "react";

export interface IChat {
  HeaderInfo: PropsHeader;
  countUnreadMessages: ICountOfUnreadMessage;
}

export function Chat() {
  const [isVoiceChat, setActiveVoiceChat] = useState(false);

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
          <VoiceChat setActiveVoiceChat={setActiveVoiceChat} />
        </div>
      )}
      <div className="relative max-w-full max-x-full h-full max-h-full">
        <div className="absolute top-1 left-1/2">
          <p className="rounded-full my-2 mx-2 px-3 py-2 bg-fff018 text-black text-sm inline-flex translate-x--1/2">
            {"7 May"}
          </p>
        </div>
        <div className="w-full absolute max-w-full max-h-full h-full scroller-chat overflow-y-scroll">
          <CountOfUnreadMessage
            countOfUnreadMessage={countUnreadMessagesTest.countOfUnreadMessage}
          />
          <ContentMessages messages={msgTest} />
        </div>
      </div>
      <div className="w-full self-end">
        <Input></Input>
      </div>
    </div>
  );
}
