"use client";

import { Message } from "@/entities/Message";

interface Props {
  isNameView: boolean;
  message: Message;
}

export default function MessageComponent({ message, isNameView }: Props) {
  // function typeOfTextMessage(type: string) {
  //   let partOfClass: string =
  //     "inline-block bg-fff010 rounded-1.5xl ml-2 p-2 select-auto";
  //   if (type == "top") return partOfClass + " rounded-bl";
  //   else if (type == "middle") return partOfClass + " rounded-l";
  //   else if (type == "bottom") return partOfClass + " rounded-tl";
  // }
  let date: Date = new Date(message.date);

  return (
    <div
      className={"inline-block bg-fff010 rounded-1.5xl ml-2 p-2 select-auto"}
    >
      {isNameView ? (
        <div className="flex justify-between ">
          <p className=" text-7289D9 font-semibold text-xs select-none">
            {message.userName}
          </p>
        </div>
      ) : null}
      <div
        className={
          message.reactions.length > 0 ? "mt-1" : "mt-1 flex items-end"
        }
      >
        <p className="text-sm text-C8D1DA pr-2 ">{message.text}</p>
        <p className=" text-xs font-light text-end select-none">
          {date.getHours().toString().padStart(2, "0")}:
          {date.getMinutes().toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
