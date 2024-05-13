import { Reaction } from "./Reaction";

export type Message = {
  adminName: string;
  userName: string;
  minutes: number;
  hours: number;
  text: string;
  type: string;
  reactions: Reaction[];
};
