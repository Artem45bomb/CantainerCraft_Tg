import { text } from "stream/consumers";

interface ITextOfMessage {
  text: string;
}

export default function TextOfMessage({ text }: ITextOfMessage) {
  return <p className="text-sm text-C8D1DA pr-2 ">{text}</p>;
}
