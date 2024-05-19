"use client";

import ChatInfo from "./ChatInfo/ChatInfo";
import ContentMessages from "./ContentMessages/ContentMessages";
import CountOfUnreadMessage from "./CountOfUnreadMessage/CountOfUnreadMessage";
import Header from "./Header/Header";
import Input from "./Input/Input";
import MessageComponent from "./MessageComponent";
import Userlogo from "./Userlogo/Userlogo";

export function Chat() {
  return (
    <div className="flex flex-col h-screen bg-msu-green">
      <Header></Header>
      <div className="flex-1 flex items-center justify-center">
        <ContentMessages></ContentMessages>
      </div>
      <div className="w-full self-end">
        <Input></Input>
      </div>
    </div>
  );
}
