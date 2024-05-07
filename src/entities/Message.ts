import { Reaction } from "./Reaction";

export type Message = {
  text: string;
  reactions: Reaction[];
};
