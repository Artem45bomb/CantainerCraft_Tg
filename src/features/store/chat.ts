import { Chat, User } from "@/entities";
import { create } from "zustand";
import { chatEmpty } from "@/features/empty/object.empty";
import { chatsTEST } from "@/test/default.data";

export type UserChat = Omit<User, "password" | "email">;
export type ChatItem = {
  countNotReadMessage: number;
  chat: Chat;
};

interface State {
  chatIn: Chat;
  chats: ChatItem[];
}

interface Action {
  init: (chat: Chat) => void;
  initChats: (chats: ChatItem[]) => void;
  updateChat: (chat: ChatItem) => void;
  deleteChat: (chat: ChatItem) => void;
}

const initState: State = {
  chatIn: chatEmpty,
  chats: [
    ...chatsTEST.map<ChatItem>((e) => ({ countNotReadMessage: 3, chat: e })),
  ],
};

export const chatStore = create<State & Action>((set) => ({
  ...initState,
  init: (chatIn) => set(() => ({ chatIn })),
  initChats: (chats) => set(() => ({ chats })),
  updateChat: ({ chat, countNotReadMessage }) =>
    set((state) => ({
      chats: state.chats.map((e) => {
        if (e.chat.uuid === chat.uuid) return { chat, countNotReadMessage };
        return e;
      }),
    })),
  deleteChat: (chatItem) =>
    set((state) => ({
      chats: state.chats.filter((e) => e.chat.uuid === chatItem.chat.uuid),
    })),
}));
