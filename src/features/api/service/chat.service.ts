import axios from "axios";
import { Chat, SecuredChat } from "@/entities";

export const getChats = async (userId: number) => {
  const { data } = await axios.get<Chat[]>(
    "https://6538cc17a543859d1bb1ef16.mockapi.io/api/posts/users",
  );

  return data;
};

export const getSecuredChats = async (userId: number) => {
  const { data } = await axios.get<SecuredChat[]>(
    "https://6538cc17a543859d1bb1ef16.mockapi.io/api/posts/users",
  );
  let securedChats = new Set<string>();

  data.forEach((e) => {
    securedChats.add(e.chatId);
  });

  return securedChats;
};
