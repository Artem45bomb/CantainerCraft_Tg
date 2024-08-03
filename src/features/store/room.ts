import { Room, User } from "@/entities";
import { create } from "zustand";
import { Settings } from "../types/voiceChat";

type Action = {
  init: (room: Room) => void;
  addUser: (user: User) => void;
  deleteUser: (user: User) => void;
};

type State = {
  room: Room | null;
};

const defaultSettings: Settings = {
  Voice: true,
  Screen: false,
  Micro: true,
  Telephone: false,
};

export const roomStore = create<Action & State>((set) => ({
  room: null,
  init: (room) => set(() => ({ room: room })),
  addUser: (user) =>
    set((state) => {
      const room = state.room;
      if (room && !room.users.some((e) => e.user.id === user.id)) {
        return {
          room: {
            ...state.room!,
            users: [...state.room!.users, { settings: defaultSettings, user }],
          },
        };
      }
      return state;
    }),
  deleteUser: (user) =>
    set((state) => {
      const room = state.room;
      if (room) {
        return {
          room: {
            ...state.room!,
            users: state.room!.users.filter((e) => e.user.id != user.id),
          },
        };
      }
      return state;
    }),
}));
