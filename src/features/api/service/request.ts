"use server";
import { cookies } from "next/headers";

type AccessTokenDTO = {
  token: string;
};

export const updateTokens = (access?: string, refresh?: string) => {
  access && cookies().set("accessToken", access);
  refresh && cookies().set("refreshToken", refresh);
};

export const fetchWrapper = <T = any>(
  url: string,
  init: RequestInit,
): Promise<T> =>
  new Promise(async (resolve, reject) => {
    let accessToken = cookies().get("accessToken")?.value || "";
    const refreshToken = cookies().get("refreshToken")?.value || "";
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        Cookie: `accessToken=${accessToken}`,
      },
      credentials: "include",
    });

    switch (true) {
      case response.status === 403 && refreshToken.length !== 0: {
        const resp = await fetchNewAccessToken(refreshToken);
        if (resp.ok) {
          accessToken = ((await resp.json()) as AccessTokenDTO).token;
          const response = await fetch(url, {
            ...init,
            headers: {
              ...init.headers,
              Cookie: `accessToken=${accessToken}`,
            },
            credentials: "include",
          });
          updateTokens(accessToken);
          if (response.ok) resolve(await response.json());
          else reject(new Error(response.status + ""));
        } else reject(new Error("403"));
        break;
      }
      case response.status >= 200 && response.status < 300:
        resolve(await response.json());
      case response.status >= 400 && response.status <= 600:
        reject(new Error(response.status + ""));
      default:
        reject(new Error(response.status + ""));
    }
  });

const fetchNewAccessToken = (refreshToken: string) =>
  fetch(process.env.URL_TOKEN_UPDATE || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      tokenRefresh: refreshToken,
    }),
    credentials: "include",
  });
