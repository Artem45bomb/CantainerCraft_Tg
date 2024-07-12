import { FC } from "react";

interface Props {
  date: Date;
}

const MessageDate: FC<Props> = ({ date }) => {
  return (
    <p className="rounded-full my-2 mx-2 px-3 py-2 bg-fff018 text-black text-sm inline-flex translate-x--1/2">
      {date.getMinutes()}
    </p>
  );
};

export default MessageDate;
