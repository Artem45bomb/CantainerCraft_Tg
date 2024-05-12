import { Reaction } from "./Reaction";

export type Message = {
  text: string;
  date: string;
  reactions: Reaction[];
};
