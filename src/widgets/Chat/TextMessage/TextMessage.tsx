"use client";

import { useState } from "react";
import TextOfMessage from "../TextOfMessage/TextOfMessage";
import TimeMessage from "../TimeMessage/TimeMessage";
import { Message } from "postcss";
import { typeOfTextMessage } from ".";

export default function TextMessage(type: string) {
  const [countOfLike, setCountOfLike] = useState(0);
  let classIfLike: string = "";
  function handleDoubleClick() {
    setCountOfLike((n) => 1);
    if (countOfLike > 0) {
      classIfLike = "flex";
    }
  }

  return (
    <div className={typeOfTextMessage(type)} onDoubleClick={handleDoubleClick}>
      <div className={classIfLike}>
        <TextOfMessage text="jjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" />
        <TimeMessage hours={13} minutes={14} />
      </div>
    </div>
  );
}
