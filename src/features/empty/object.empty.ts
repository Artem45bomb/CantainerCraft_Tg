import { Chat, User } from "@/entities";
import { Profile } from "@/entities/user/Profile";
import { msgTest, userChatTest } from "@/test/default.data";

export const userEmpty: User = {
  id: 0,
  email: "",
  name: "",
  password: "",
  srcImageProfile: "/assets/testIcons/logo.jpg",
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

export const chatEmpty: Chat = {
  uuid: "",
  name: "",
  type: "group",
  srcImage: "",
  users: [...userChatTest],
  messages: [
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
    ...msgTest,
  ],
};
