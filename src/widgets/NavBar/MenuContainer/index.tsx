"use client";
//import { userStore } from "@/features/store/user";
import { FC, useState } from "react";
import { MenuPoint } from "../MenuPoint";
import { chatsTEST, securedChatsTEST } from "@/test/default.data";
import { chatStore } from "@/features/store/chat";

interface Props {
  filterName: string;
}

export const MenuContainer: FC<Props> = ({ filterName }) => {
  //const { user } = userStore();
  const { init } = chatStore();
  const [chatActiveId, setChatActive] = useState<string>("");
  // const [chats, securedChats] = use(Promise.all([
  //   getChats(user.id),
  //   getSecuredChats(user.id)
  // ]));
  const chats = chatsTEST;
  const securedChats = securedChatsTEST;

  return (
    <div className="overflow-y-scroll scroller mr-1 p-5">
      {chats
        .filter((e) => e.name.includes(filterName))
        .map((chat) => (
          <button
            key={chat.uuid+"i0"}
            className={`relative transition-all duration-100 
            ${chat.uuid === chatActiveId ? "bg-white-transparent rounded-lg" : ""} `}
            onClick={() => {
              setChatActive(chat.uuid);
              init(chat);
            }}
          >
            {chat.uuid === chatActiveId && (
              <div
                style={{ left: "-11px", transform: "translateY(-50%)" }}
                className=" top-1/2 rounded-full absolute w-1 h-7 bg-0078D4"
              ></div>
            )}
            <MenuPoint
              key={chat.uuid}
              chat={chat}
              secured={securedChats.has(chat.uuid)}
            />
          </button>
        ))}
    </div>
  );
};
