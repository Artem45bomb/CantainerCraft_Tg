import { Message, User, MessageVideo } from "./index";

export type Chat = {
  uuid: string;
  name: string;
  type: "private" | "group" | "channel";
  srcImage: string;
  users: Omit<User, "password" | "email">[] | { userId: number };
  messages: (Message | MessageVideo)[];
};
