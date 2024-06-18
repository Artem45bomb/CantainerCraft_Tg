import { Chat } from "./Chat";
import { User_Privilege } from "./User_Priviliage";

export type Privilege = {
  uuid: string;
  chat: Chat;
  nameRole: string;
  usersPrivilege: User_Privilege[];
};
