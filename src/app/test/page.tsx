"use client";
import Header from "@/widgets/Chat/Header/Header";
import VoiceChat from "@/widgets/Chat/VoiceChat";
import { ChatInfoTest } from "@/test/default.data";
import Input from "@/widgets/Chat/Input/Input";
import MessageComponent from "@/widgets/Chat/MessageComponent";
import ContentMessages from "@/widgets/Chat/ContentMessages/ContentMessages";
import { Chat } from "@/widgets/Chat";

export default function TestPage() {
  return (
    // <div className="w-full h-full bg-black">
    //   <VoiceChat/>
    // </div>
    <Chat />
  );
}
