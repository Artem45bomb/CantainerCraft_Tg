"use client";

import { useState } from "react";
import TextMessage from "./TextMessage";
import TimeMessage from "./TimeMessage";

export default function MessageBottom() {
  const [isLike, setIsLike] = useState(false);

  const [timeclass, setTimeClass] = useState("mt-1 flex items-end");
  function handleDoubleClick() {
    setIsLike(!isLike);
    isLike ? setTimeClass("mt-1") : setTimeClass("mt-1 flex items-end");
  }
  return (
    <div
      className="inline-block bg-fff010 rounded-1.5xl rounded-tl ml-2 p-2"
      onDoubleClick={handleDoubleClick}
    >
      <div className={timeclass}>
        <TextMessage />
        <TimeMessage />
      </div>
    </div>
  );
}
