"use client";

import { useState } from "react";
import TextOfMessage from "../TextOfMessage/TextOfMessage";
import TimeMessage from "../TimeMessage/TimeMessage";
import { Message } from "postcss";
import { typeOfTextMessage } from ".";
import Username from "../Username/Username";
import AdminName from "../AdminName/AdminName";

interface IType {
  type: string;
}
export default function TextMessage({ type }: IType) {
  const [countOfLike, setCountOfLike] = useState(0);
  let classIfLike: string = "";
  function handleDoubleClick() {
    setCountOfLike((n) => n + 1);
    if (countOfLike > 0) {
      classIfLike = "flex";
    }
    console.log(countOfLike);
  }

  return (
    <div className={typeOfTextMessage(type)} onDoubleClick={handleDoubleClick}>
      {type == "top" ? (
        <div className="flex justify-between ">
          <Username userName="qwerty" />
          <AdminName adminName="asdff" />
        </div>
      ) : null}
      <div className={classIfLike}>
        <TextOfMessage text="jjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" />
        <TimeMessage hours={13} minutes={14} />
      </div>
    </div>
  );
}
