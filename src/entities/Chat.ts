import { Message, User, MessageResource } from "./index";

export type Chat = {
  uuid: string;
  name: string;
  type: "private" | "group" | "channel";
  srcImage: string;
  messageResource: MessageResource[];
  users: Omit<User, "password" | "email">[] | { userId: number };
  messages: Message[];
};
