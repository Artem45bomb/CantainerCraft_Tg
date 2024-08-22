import axios from "axios";
import { Chat } from "@/entities";

export const getChats = async (userId: number) => {
  const { data } = await axios.get<Chat[]>(
    "https://6538cc17a543859d1bb1ef16.mockapi.io/api/posts/users" + userId,
  );

  return data;
};
