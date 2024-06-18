import { User } from "@/entities";
import { create } from "zustand";
import { userEmpty } from "../empty/object.empty";

interface State {
  user: User;
}

interface Action {
  init: (user: User) => void;
}

export const initState: State = {
  user: userEmpty,
};

export const userStore = create<State & Action>((set) => ({
  ...initState,
  init: (user) => set(() => ({ user })),
}));
