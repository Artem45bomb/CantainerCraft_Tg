import { userStore } from "@/features/store/user";
import { FC } from "react";
import { Chat } from "@/entities/Chat";
import { SecuredChat } from "@/entities";
import { MenuPoint } from "../MenuPoint";

interface Props {
  filterName: string;
}

const chatsTEST: Chat[] = [
  {
    uuid: "43589jj-ll",
    name: "74tp",
    srcImage: "/assets/png/images1.jpg",
    users: [],
    messages: [{ uuid: "", text: "Hi", date: "1234", reactions: [] }],
  },
  {
    uuid: "4358op9jj-ll",
    name: "73tp",
    srcImage: "/assets/png/images2.png",
    users: [],
    messages: [{ uuid: "", text: "Hi", date: "1234", reactions: [] }],
  },
];

const securedChatsTest = new Set();

securedChatsTest.add("43589jj-ll");

export const MenuContainer: FC<Props> = ({ filterName }) => {
  const { user } = userStore();
  const chats = chatsTEST;
  const securedChats = securedChatsTest;

  return (
    <div>
      {chats.map((chat) => (
        <MenuPoint
          key={chat.uuid}
          chat={chat}
          secured={securedChats.has(chat.uuid)}
        />
      ))}
    </div>
  );
};
