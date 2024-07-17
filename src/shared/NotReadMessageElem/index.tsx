import { FC } from "react";

interface Props {
  countNotReadMessage: number;
}

export const NotReadMessageElem: FC<Props> = ({ countNotReadMessage }) => {
  return (
    <div
      className={
        "flex justify-center items-center px-2.5 py-1 bg-45B8B1 rounded-2.5xl min-w-8"
      }
    >
      <p className={`text-sm text-30595F `}>{countNotReadMessage}</p>
    </div>
  );
};
