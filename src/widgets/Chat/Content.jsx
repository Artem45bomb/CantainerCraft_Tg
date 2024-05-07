"use client";

import Header from "./Header";
import MainChat from "./MainChat";
import Input from "./Input";
import MessageTop from "./MessageTop";
import MessageMiddle from "./MessageMiddle";
import MessageBottom from "./MessageBottom";
import Userlogo from "./Userlogo";
import CountOfUnreadMessage from "./CountOfUnreadMessage";
import ArrowToLastMessage from "./ArrowToLastMessage";
import MessageVideo from "@/widgets/Chat/MessageVideo";

export default function Content() {
  return (
    <div className=" max-w-full border rounded-br-mdlg bg-msu-green min-h-screen">
      <Header />
      <MainChat />
      <Input />
      <MessageTop />
      <MessageMiddle />
      <MessageBottom />
      <Userlogo />
      <CountOfUnreadMessage />
      <ArrowToLastMessage />
      <MessageVideo />
    </div>
  );
}
