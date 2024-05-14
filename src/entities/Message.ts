import { Reaction } from "./Reaction";

export type Message = {
  uuid: string;
  text: string;
  date: string;
  userId: string;
  srcImages: string[];
  adminName: string;
  userName: string;
  minutes: number;
  hours: number;
  type: "text" | "photo" | "document";
  reactions: Reaction[];
};
