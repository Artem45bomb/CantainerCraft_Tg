import { text } from "stream/consumers";

interface ITextMessage {
  text: string;
}

export default function TextMessage({ text }: ITextMessage) {
  return <p className="text-sm text-C8D1DA pr-2 ">{text}</p>;
}
