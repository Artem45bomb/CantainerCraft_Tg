"use server";
import axios from "axios";

import { User } from "@/features/api/model/index";

const usersServiceApi = process.env.USERS_SERVICE_API;

export const registration = async (
  user: Omit<User, "id" | "roles">,
): Promise<User> => {
  const { data, status } = await axios.post(usersServiceApi + "/create", user);
  return data;
};

export const login = async (
  user: Omit<User, "id" | "roles" | "name">,
): Promise<User> => {
  const { data, status } = await axios.post(
    usersServiceApi + "/email",
    user.email,
  );
  if (user.password !== data.password) {
    throw new Error("user is not registration");
  }
  return data;
};
