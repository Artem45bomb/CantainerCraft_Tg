import { User } from "next-auth";
import { Message } from "./index";

export type Chat = {
  uuid: string;
  name: string;
  srcImage: string;
  users: User[];
  messages: Message[];
};
