import { Message } from "@/entities";
import MessageComponent from "../MessageComponent";
import { UserChat } from "@/features/store/chat";

export interface IMessage {
  messages: Message[];
  users: UserChat[];
}

export default function ContentMessages({ messages, users }: IMessage) {
  return (
    <div className="h-full w-full px-11 relative">
      <div style={{ width: "100%", height: "100vh" }} className="flex flex-col">
        {messages.map((message, i) => (
          <MessageComponent
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
