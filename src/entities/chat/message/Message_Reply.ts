import { Message } from "postcss";

export type Message_Reply = {
  uuid: string;
  message: Message;
  messageReplyId: Message;
};
