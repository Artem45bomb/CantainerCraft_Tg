import { Profile } from "@/entities/user/Profile";
import { create } from "zustand";
import { profileEmpty } from "../empty/object.empty";

interface State {
  profile: Profile;
}

interface Action {
  init: (profile: Profile) => void;
}

export const initState: State = {
  profile: profileEmpty,
};

export const profileState = create<State & Action>((set) => ({
  ...initState,
  init: (profile) => set(() => ({ profile })),
}));
