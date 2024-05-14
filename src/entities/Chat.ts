import { Message, User } from "./index";

export type Chat = {
  uuid: string;
  name: string;
  srcImage: string;
  users: Omit<User, "password" | "email">[] | { userId: number };
  messages: Message[];
};
