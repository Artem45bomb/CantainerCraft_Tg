"use client";
//import { userStore } from "@/features/store/user";
import { MouseEvent, useRef } from "react";
import { FC, useState } from "react";
import { MenuPoint } from "../MenuPoint";
import { chatsTEST, securedChatsTEST } from "@/test/default.data";
import { chatStore } from "@/features/store/chat";
import ContextMenu from "@/widgets/ContextMenu";

interface Props {
  filterName: string;
}

export const MenuContainer: FC<Props> = ({ filterName }) => {
  const { init } = chatStore();
  const [chatActiveId, setChatActive] = useState<string>("");
  const [menuActive, setMenuActive] = useState(false);
  const [selectChat, setSelectChat] = useState<string>("");
  const x = useRef(0);
  const y = useRef(0);
  // const [chats, securedChats] = use(Promise.all([
  //   getChats(user.id),
  //   getSecuredChats(user.id)
  // ]));

  const chats = [...chatsTEST];
  const securedChats = securedChatsTEST;

  const menuOut = () => {
    if (menuActive) setMenuActive(false);
  };

  const menuOpen = (e: MouseEvent<HTMLButtonElement>, chatId: string) => {
    x.current = 30;
    y.current = e.clientY + 10;
    setMenuActive(true);
    setSelectChat(chatId);
  };

  return (
    <div className="overflow-y-scroll scroller max-h-full mr-1 p-5">
      {menuActive && (
        <div
          onMouseOut={menuOut}
          style={{ top: y.current, left: x.current }}
          className="absolute w-56 h-36 bg-black z-10"
        >
          {/*<ContextMenu chatId={selectChat}/>*/}
        </div>
      )}
      {chats
        .filter((e) => e.name.includes(filterName))
        .map((chat) => (
          <button
            onContextMenu={(event) => menuOpen(event, chat.uuid)}
            key={chat.uuid + "i0"}
            className={`relative transition-all duration-100 w-full
            ${chat.uuid === chatActiveId ? "bg-white-transparent rounded-lg" : ""} `}
            onClick={() => {
              setChatActive(chat.uuid);
              init(chat);
            }}
          >
            {chat.uuid === chatActiveId && (
              <div
                style={{ left: "-11px", transform: "translateY(-50%)" }}
                className=" top-1/2 rounded-full absolute w-1 h-9 bg-0078D4"
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
