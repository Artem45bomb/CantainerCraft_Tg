import { Profile_Image } from "./Profile_Image";
import { User } from "./User";

export type Profile = {
  uuid: string;
  telephone: string;
  sunsetTime: string;
  aboutUser: string;
  user: User;
  profileImages: Profile_Image[];
};
