import { Subscription } from "./Subscription";
import { Role } from "./Role";
import { User_Online } from "./User_Online";

export type User = {
  id: number;
  name: string;
  password: string;
  email: string;
  roles: Role[];
  subscriptions: Subscription[]
  userOnline:User_Online[]
};
