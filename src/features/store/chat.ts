import { Chat } from "@/entities";
import { create } from "zustand";

interface State {
  chatIn: Chat | null;
  chats: Chat[];
}

interface Action {
  init: (chat: Chat) => void;
}

const initState: State = {
  chatIn: null,
  chats: [],
};

export const chatStore = create<State & Action>((set) => ({
  ...initState,
  init: (chatIn) => set(() => ({ chatIn })),
}));
