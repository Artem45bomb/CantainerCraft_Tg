"use client";
import { MouseEvent, useEffect, useRef } from "react";
import { FC, useState } from "react";
import { MenuPoint } from "../MenuPoint";
import { securedChatsTEST } from "@/test/default.data";
import { chatStore } from "@/features/store/chat";
import ContextMenu from "@/widgets/ContextMenu";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface Props {
  filterName: string;
}

export const MenuContainer: FC<Props> = ({ filterName }) => {
  const { init, chats } = chatStore();
  const [chatActiveId, setChatActive] = useState<string>("");
  const [menuActive, setMenuActive] = useState(false);
  const [selectChat, setSelectChat] = useState<string>("");
  const x = useRef(0);
  const y = useRef(0);
  const securedChats = securedChatsTEST;

  useEffect(() => {
    document.onclick = () => {
      if (menuActive) setMenuActive(false);
    };
  });

  const menuOpen = (e: MouseEvent<HTMLButtonElement>, chatId: string) => {
    x.current = 30;
    y.current = e.currentTarget.offsetTop + e.currentTarget.offsetHeight * 0.75;
    setMenuActive(true);
    setSelectChat(chatId);
  };

  return (
    <div className="overflow-y-scroll scroller max-h-full mr-1 p-5">
      <AnimatePresence>
        {menuActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ top: y.current, left: x.current }}
            className="absolute z-30"
          >
            <ContextMenu chatId={selectChat} />
          </motion.div>
        )}
      </AnimatePresence>
      {chats
        .filter((e) => e.chat.name.includes(filterName))
        .map((chatItem) => (
          <button
            onContextMenu={(event) => menuOpen(event, chatItem.chat.uuid)}
            key={chatItem.chat.uuid + "i0"}
            className={`relative transition-all duration-100 w-full
            ${chatItem.chat.uuid === chatActiveId ? "bg-white-transparent rounded-lg" : ""} `}
            onClick={() => {
              setChatActive(chatItem.chat.uuid);
              init(chatItem.chat);
            }}
          >
            {chatItem.chat.uuid === chatActiveId && (
              <div
                style={{ left: "-11px", transform: "translateY(-50%)" }}
                className=" top-1/2 rounded-full absolute w-1 h-9 bg-0078D4"
              ></div>
            )}
            <MenuPoint
              key={chatItem.chat.uuid}
              chatItem={chatItem}
              secured={securedChats.has(chatItem.chat.uuid)}
            />
          </button>
        ))}
    </div>
  );
};
