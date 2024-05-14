import { Reaction } from "./Reaction";

export type MessageVideo = {
  uuid: string;
  type: "video";
  date: string;
  srcContent: string;
  userId: number;
  reactions: Reaction[];
};
