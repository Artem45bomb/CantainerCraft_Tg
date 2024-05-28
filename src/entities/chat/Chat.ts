import { Message, User } from "../index";


//User пользователей надо получать будет отдельно
export type Chat = {
  uuid: string;
  name: string;
  type: "private" | "group" | "channel";
  srcImage: string;
  users: Omit<User, "password" | "email">[] | { userId: number };
  messages: Message[];
};
