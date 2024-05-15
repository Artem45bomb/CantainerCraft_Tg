"use client";

import Header from "./Header/Header";
import MainChat from "./ContentMessages/ContentMessages";
import Input from "./Input/Input";
import Userlogo from "./Userlogo/Userlogo";
import CountOfUnreadMessage from "./CountOfUnreadMessage/CountOfUnreadMessage";
import ArrowToLastMessage from "@/shared/ButtonChat/ArrowToLastMessage";
import MessageVideo from "@/widgets/Chat/MessageVideo/MessageVideo";
import { MessageTest } from "@/test/default.data";
import MessageComponent from "./MessageComponent";

export default function Content() {
  return (
    <div className=" max-w-full border rounded-br-mdlg bg-msu-green min-h-screen">
      <Header />
      <MainChat />
      <Input />
      <MessageComponent message={MessageTest} isTop={true} />

      <Userlogo />
      <CountOfUnreadMessage countOfUnreadMessage={34} />
      <ArrowToLastMessage />
      <MessageVideo />
    </div>
  );
}
