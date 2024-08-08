import { User } from "@/entities";
import { create } from "zustand";
import { userEmpty } from "../empty/object.empty";
import axios from "axios";

export type JwtTokens = {
  accessToken: string;
  refreshToken: string;
};

interface State {
  userAuth: User;
  tokens: JwtTokens | null;
}

interface Action {
  init: (user: User) => void;
  initTokens: (tokens: JwtTokens) => void;
  accessToken: (accessToken: string) => void;
  refreshToken: (token: string) => void;
}

export const initState: State = {
  userAuth: userEmpty,
  tokens: null,
};

export const userStore = create<State & Action>((set) => ({
  ...initState,
  init: (user) => set(() => ({ userAuth: user })),

  //tokens jwt
  initTokens: (tokens) => set(() => ({ tokens })),
  accessToken: (accesToken) =>
    set((state) => ({
      tokens: state.tokens
        ? {
            ...state.tokens,
            accesToken,
          }
        : null,
    })),
  refreshToken: (refreshToken) =>
    set((state) => ({
      tokens: state.tokens
        ? {
            ...state.tokens,
            refreshToken,
          }
        : null,
    })),
}));
