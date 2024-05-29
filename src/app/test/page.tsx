"use client";
import { Chat } from "@/widgets/Chat";
import {
  ChatInfoTest,
  countUnreadMessagesTest,
  msgTest,
} from "@/test/default.data";

export default function TestPage() {
  return (
    <div className="w-full h-full bg-black">
      {/*<VoiceChat userIncomingName="Artem"/>*/}
      <Chat
        HeaderInfo={ChatInfoTest}
        countUnreadMessages={countUnreadMessagesTest}
        messages={msgTest}
      />
    </div>
  );
}
