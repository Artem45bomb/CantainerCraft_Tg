"use client";

import { useState } from "react";
import TextMessage from "./TextMessage";
import TimeMessage from "./TimeMessage";
import { Message } from "postcss";

export default function MessageBottom({ message }: { message: Message }) {
  // const [isLike, setIsLike] = useState(false);

  const [timeClass, setTimeClass] = useState("mt-1 flex items-end");

  function handleDoubleClick() {
    // setIsLike(!isLike);
    // isLike ? setTimeClass("mt-1") : setTimeClass("mt-1 flex items-end");
  }

  return (
    <div
      className="inline-block bg-fff010 rounded-1.5xl rounded-tl ml-2 p-2"
      onDoubleClick={handleDoubleClick}
    >
      <div className={timeClass}>
        <TextMessage text="jjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" />
        <TimeMessage />
      </div>
    </div>
  );
}
