"use server";
import axios, { AxiosError } from "axios";
import { User } from "@/entities/index";
import { JwtAuthDTO } from "../dto";

const usersServiceApi =
  process.env.USERS_SERVICE_API || "http://localhost:8081/micro-users";
type AuthUser = { username: string; password: string; email: string };
export type MessageDataError = { data: MessageError };
export type MessageError = { message: string };
export const isMessageDataError = (obj: any): obj is MessageDataError =>
  obj.data !== undefined && obj.data!.message !== undefined;
export const isMessageError = (obj: any): obj is MessageError =>
  typeof obj.message !== "undefined";

export type JwtAuthResponse = {
  accessToken?: string;
  token?: string; //refresh token
};

export const registration = async (
  user: AuthUser,
): Promise<
  JwtAuthResponse & {
    message?: string;
  }
> => {
  try {
    const { status, data } = await axios.post<JwtAuthResponse | MessageError>(
      "http://localhost:8081/micro-users/auth/signup",
      user,
    );

    if (!(status >= 200 && status < 300)) {
      return data as MessageError;
    }
    return data;
  } catch (e) {
    const { response } = e as AxiosError;

    if (isMessageDataError(response)) {
      return { message: response.data.message } as MessageError;
    }

    return { message: "server problems" } as MessageError;
  }
};

export const login = async (
  user: Omit<AuthUser, "email">,
): Promise<
  JwtAuthResponse & {
    message?: string;
  }
> => {
  try {
    const { data, status } = await axios.post(
      usersServiceApi + "/auth/login",
      user,
    );

    if (!(status >= 200 && status < 300)) {
      return data as MessageError;
    }
    return data;
  } catch (e) {
    const { response } = e as AxiosError;

    if (isMessageDataError(response)) {
      return { message: response.data.message } as MessageError;
    }

    return { message: "server problems" } as MessageError;
  }
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
