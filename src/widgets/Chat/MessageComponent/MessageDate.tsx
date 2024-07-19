import { FC } from "react";

interface Props {
  date: Date;
}

export const MessageDate: FC<Props> = ({ date }) => {
  return (
    <p className=" text-xs font-light text-end select-none">
      {date.getHours().toString().padStart(2, "0")}:
      {date.getMinutes().toString().padStart(2, "0")}
    </p>
  );
};
