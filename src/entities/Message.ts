import { Reaction } from "./Reaction";

export type Message = {
  uuid: string;
  text: string;
  date: string;
  userId: string;
  srcImages: string[];
  adminName: string;
  userName: string;
  type: "text" | "photo" | "document";
  reactions: Reaction[];
};
