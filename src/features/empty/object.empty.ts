import { User } from "@/entities";
import { Profile } from "@/entities/user/Profile";

export const userEmpty: User = {
  id: 0,
  email: "",
  name: "",
  password: "",
  srcImageProfile: "",
  roles: [],
  subscriptions: [],
};

export const profileEmpty: Profile = {
  uuid: "",
  telephone: "",
  sunsetTime: "",
  aboutUser: "",
  user: userEmpty,
  profileImages: [],
};
