import { Message } from "@/entities";
import MessageComponent from "../MessageComponent";
import { UserChat } from "@/features/store/chat";
import { RefObject } from "react";

export interface IMessage {
  messages: Message[];
  users: UserChat[];
  setMessagesDate: (arg: Date) => void;
  contextMessage: RefObject<HTMLDivElement>;
}

export default function ContentMessages({
  messages,
  users,
  setMessagesDate,
  contextMessage,
}: IMessage) {
  return (
    <div className="h-full w-full px-11 relative">
      <div style={{ width: "100%", height: "100vh" }} className="relative">
        {messages.map((message, i) => (
          <MessageComponent
            contextMessage={contextMessage}
            setMessagesDate={setMessagesDate}
            key={i}
            message={message}
            prevMessage={messages[i > 0 ? i - 1 : i]}
            nextMessage={i + 1 < messages.length ? messages[i + 1] : undefined}
            isNameView={true}
            user={users.filter((e) => e.id === message.userId)[0]}
          />
        ))}
      </div>
    </div>
  );
}
