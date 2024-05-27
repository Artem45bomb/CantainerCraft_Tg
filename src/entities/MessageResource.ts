import { Reaction } from "./Reaction";

export type MessageResource = {
  uuid: string;
  type: "video" | "document";
  text: string;
  date: string;
  srcContent: string;
  username: string;
  userId: number;
  reactions: Reaction[];
};
