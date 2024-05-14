import { Reaction } from "./Reaction";

export type Message = {
  uuid: string;
  text: string;
  date: string;
  reactions: Reaction[];
};
