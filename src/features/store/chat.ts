import { Chat, User } from "@/entities";
import { create } from "zustand";
import { chatEmpty } from "@/features/empty/object.empty";

export type UserChat = Omit<User, "password" | "email">;

interface State {
  chatIn: Chat;
  chats: Chat[];
}

interface Action {
  init: (chat: Chat) => void;
}

const initState: State = {
  chatIn: chatEmpty,
  chats: [],
};

export const chatStore = create<State & Action>((set) => ({
  ...initState,
  init: (chatIn) => set(() => ({ chatIn })),
}));
