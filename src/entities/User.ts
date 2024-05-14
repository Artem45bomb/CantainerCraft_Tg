import { Role } from "./Role";

export type User = {
  id: number;
  name: string;
  password: string;
  email: string;
  roles: Role[];
};
