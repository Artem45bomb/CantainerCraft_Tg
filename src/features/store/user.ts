import { User } from "@/entities";
import { create } from "zustand";

interface State {
  user: User;
}

interface Action {
  init: (user: User) => void;
}

const defaultState: State = {
  user: {
    id: 0,
    email: "",
    name: "",
    password: "",
    roles: [],
  },
};

export const userStore = create<State & Action>((set) => ({
  ...defaultState,
  init: (user) => set((set) => ({ user })),
}));
