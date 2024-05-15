import { Reaction } from "./Reaction";

export type Message = {
  uuid: string;
  text: string;
  date: string;
  userId: number;
  srcContent: string[];
  userName: string;
  type: "text" | "photo";
  reactions: Reaction[];
};
