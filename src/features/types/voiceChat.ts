import { User } from "@/entities";

export type Settings = {
  Voice: boolean;
  Screen: boolean;
  Micro: boolean;
  Telephone: boolean;
};

export type UserInChat = {
  user: User;
  settings: Settings;
};
