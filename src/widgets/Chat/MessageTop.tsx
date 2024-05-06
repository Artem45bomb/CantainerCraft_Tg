"use client";

import AdminName from "./AdminName";
import TextMessage from "./TextMessage";
import TimeMessage from "./TimeMessage";
import Username from "./Username";
import { useState } from "react";

export default function MessageTop() {
  const [isLike, setIsLike] = useState(false);

  const [timeclass, setTimeClass] = useState("mt-1 flex items-end");
  function handleDoubleClick() {
    setIsLike(!isLike);
    isLike ? setTimeClass("mt-1") : setTimeClass("mt-1 flex items-end");
  }
  return (
    <div
      className=" inline-block bg-fff010 rounded-1.5xl rounded-bl ml-2 p-2 select-auto"
      onDoubleClick={handleDoubleClick}
    >
      <div className="flex justify-between ">
        <Username />
        <AdminName />
      </div>
      <div className={timeclass}>
        <TextMessage />
        <TimeMessage />
      </div>
    </div>
  );
}
