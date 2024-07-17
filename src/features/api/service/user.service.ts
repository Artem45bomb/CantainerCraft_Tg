"use server";
import axios from "axios";
import { User } from "@/entities/index";
import { JwtAuthDTO } from "../dto";

const usersServiceApi = process.env.USERS_SERVICE_API;

type AuthUser = { name: string; password: string; email: string };

export const registration = async (user: AuthUser): Promise<User> => {
  const { data } = await axios.post(usersServiceApi + "/create", user);
  return data;
};

export const login = async (user: Omit<AuthUser, "name">): Promise<User> => {
  const { data } = await axios.post(usersServiceApi + "/email", user.email);
  if (user.password !== data.password) {
    throw new Error("user is not registration");
  }
  return data;
};

export const checkExistUser = async (username: string) => {
  try {
    const { status, data } = await axios.get<JwtAuthDTO>(
      "https://6538cc17a543859d1bb1ef16.mockapi.io/api/posts/users",
    );
    console.log(username);
    if (status >= 200 && status < 300) {
      return data;
    }

    return data;
  } catch (e) {
    console.log(e);
  }
};
