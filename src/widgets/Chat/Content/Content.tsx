"use client";

import Header from "../Header/Header";
import MainChat from "../MainChat/MainChat";
import Input from "../Input/Input";
import TextMessage from "../TextMessage/TextMessage";
import Userlogo from "../Userlogo/Userlogo";
import CountOfUnreadMessage from "../CountOfUnreadMessage/CountOfUnreadMessage";
import ArrowToLastMessage from "../ArrowToLastMessage/ArrowToLastMessage";
import MessageVideo from "@/widgets/Chat/MessageVideo/MessageVideo";

export default function Content() {
  return (
    <div className=" max-w-full border rounded-br-mdlg bg-msu-green min-h-screen">
      <Header />
      <MainChat />
      <Input />
      <TextMessage type={"top"} />
      <Userlogo />
      <CountOfUnreadMessage countOfUnreadMessage={34} />
      <ArrowToLastMessage />
      <MessageVideo />
    </div>
  );
}
