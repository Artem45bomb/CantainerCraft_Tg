import { Message } from "../index";
import { UserChat } from "@/features/store/chat";

//User пользователей надо получать будет отдельно
export type Chat = {
  uuid: string;
  name: string;
  type: "private" | "group" | "channel";
  srcImage: string;
  users: UserChat[];
  messages: Message[];
};
