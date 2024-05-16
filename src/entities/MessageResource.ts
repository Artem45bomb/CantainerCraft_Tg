import { Reaction } from "./Reaction";

export type MessageResource = {
  uuid: string;
  type: "video" | "document";
  date: string;
  srcContent: string;
  username: string;
  userId: number;
  reactions: Reaction[];
};
