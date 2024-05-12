import { Chat } from "@/entities";
import { FC } from "react";

interface IMenuPoint {
  chat: Chat;
}

export const MenuPoint: FC<IMenuPoint> = ({ chat }) => {
  return <div></div>;
};
