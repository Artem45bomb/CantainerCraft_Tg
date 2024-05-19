import { Content } from "./Content";
import { Reaction } from "./Reaction";

export type Message = {
  uuid: string;
  text: string;
  date: string;
  userId: number;
  srcContent: Omit<Content, "messageId">[];
  userName: string;
  type: "text" | "photo";
  reactions: Reaction[];
};
