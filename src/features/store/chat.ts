import { Chat } from "@/entities";
import { create } from "zustand";

interface State {
  chat: Chat | null;
}

interface Action {
  init: (chat: Chat) => void;
}

const initState: State = {
  chat: null,
};

export const chatStore = create<State & Action>((set) => ({
  ...initState,
  init: (chat) => set(() => ({ chat })),
}));
