import { UserInChat } from "@/features/types/voiceChat";

export type Room = {
  id: string;
  roomId: string;
  users: UserInChat[];
};
