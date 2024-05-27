import { Message } from "@/entities";
import MessageComponent from "../MessageComponent";
import { MessageTest } from "@/test/default.data";

export interface IMessage {
  messages: Message[];
}

export default function ContentMessages({ messages }: IMessage) {
  return (
    <div className="h-full w-full px-11   relative">
      <div style={{ width: "100%", height: "100vh" }} className="">
        <MessageComponent message={messages[0]} isNameView={true} />
        <MessageComponent message={messages[1]} isNameView={true} />
      </div>
    </div>
  );
}
