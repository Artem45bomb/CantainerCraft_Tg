"use client";
import { userStore } from "@/features/store/user";
import { FC, use, useState } from "react";
import { MenuPoint } from "../MenuPoint";
import { getChats, getSecuredChats } from "@/features/api/service/chat.service";
import { chatsTEST, securedChatsTEST } from "@/test/default.data";
import { chatStore } from "@/features/store/chat";

interface Props {
  filterName: string;
}

export const MenuContainer: FC<Props> = ({ filterName }) => {
  const { user } = userStore();
  const { init } = chatStore();
  const [chatActiveId, setChatActive] = useState<string>("");
  // const [chats, securedChats] = use(Promise.all([
  //   getChats(user.id),
  //   getSecuredChats(user.id)
  // ]));
  const chats = chatsTEST;
  const securedChats = securedChatsTEST;

  return (
    <div className="overflow-y-scroll scroller mr-1">
      {chats
        .filter((e) => e.name.includes(filterName))
        .map((chat) => (
          <div
            className={
              chatActiveId == chat.uuid
                ? "transaction-all duration-100 px-5"
                : "transaction-all duration-100 px-5"
            }
            onClick={() => {
              setChatActive(chat.uuid);
              init(chat);
            }}
          >
            <MenuPoint
              key={chat.uuid}
              chat={chat}
              secured={securedChats.has(chat.uuid)}
            />
          </div>
        ))}
    </div>
  );
};
