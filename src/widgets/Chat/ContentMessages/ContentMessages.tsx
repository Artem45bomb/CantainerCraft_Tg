import MessageComponent from "../MessageComponent";
import { chatStore } from "@/features/store/chat";
import { RefObject } from "react";

export interface IMessage {
  setMessagesDate: (arg: Date) => void;
  contextMessage: RefObject<HTMLDivElement>;
  scroll: boolean;
}

export default function ContentMessages({
  setMessagesDate,
  contextMessage,
  scroll,
}: IMessage) {
  const { chatIn } = chatStore();

  return (
    <div className="h-full w-full px-11 relative">
      <div style={{ width: "100%", height: "100vh" }} className="relative">
        {chatIn.messages.map((message, i) => (
          <MessageComponent
            contextMessage={contextMessage}
            setMessagesDate={setMessagesDate}
            key={i}
            message={message}
            prevMessage={i > 0 ? chatIn.messages[i - 1] : undefined}
            nextMessage={
              i + 1 < chatIn.messages.length
                ? chatIn.messages[i + 1]
                : undefined
            }
            scroll={scroll}
            user={chatIn.users.filter((e) => e.id === message.userId)[0]}
          />
        ))}
      </div>
    </div>
  );
}
