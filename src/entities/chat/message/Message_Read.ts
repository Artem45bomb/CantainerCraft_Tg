import { Chat } from "../..";
import { Message } from "./Message";
import { User } from "../../user/User";

export type Message_Read = {
  uuid: string;
  message: Message;
  user: User;
  is_read: boolean;
  chat: Chat;
};
