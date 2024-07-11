import { Message } from "@/entities";
import MessageComponent from "../MessageComponent";

export interface IMessage {
  messages: Message[];
}

export default function ContentMessages({ messages }: IMessage) {
  return (
    <div className="h-full w-full px-11   relative">
      <div style={{ width: "100%", height: "100vh" }} className="">
        {messages.map((message, i) => (
          <MessageComponent key={i} message={message} isNameView={true} />
        ))}
      </div>
    </div>
  );
}
