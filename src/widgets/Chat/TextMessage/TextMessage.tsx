"use client";

import { Message } from "@/entities/Message";
import { typeOfTextMessage } from ".";

export default function TextMessage({
  type,
  hours,
  text,
  minutes,
  userName,
  adminName,
  reactions,
}: Message) {
  return (
    <div className={typeOfTextMessage(type)}>
      {type == "top" ? (
        <div className="flex justify-between ">
          <p className=" text-7289D9 font-semibold text-xs select-none">
            {userName}
          </p>
          <p className=" text-xs font-normal text-A1AAB3 select-none">
            {adminName}
          </p>
        </div>
      ) : null}
      <div className={reactions.length > 0 ? "mt-1" : "mt-1 flex items-end"}>
        <p className="text-sm text-C8D1DA pr-2 ">{text}</p>
        <p className=" text-xs font-light text-end select-none">
          {hours}:{minutes}
        </p>
      </div>
    </div>
  );
}
