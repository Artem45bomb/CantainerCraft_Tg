import { Content } from "../Content";
import { Emotion } from "../Emotion";

export type Message = {
  uuid: string;
  text: string;
  date: string;
  userId: number;
  srcContent: Omit<Content, "messageId">[];
  userName: string;
  type: "text" | "photo" | "document" | "file" | "voice";
  emotions: Emotion[];
};
