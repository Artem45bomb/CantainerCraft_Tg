"use server";
import { cookies } from "next/headers";

type AccessTokenDTO = {
  token: string;
};

export const updateTokens = (access?: string, refresh?: string) => {
  access && cookies().set("accessToken", access);
  refresh && cookies().set("refreshToken", refresh);
};

export const accessTokenUpdate = (refrechToken?: string) =>
  new Promise(async (resolve, reject) => {
    console.log("aaaa");
    const refreshToken =
      refrechToken || cookies().get("refreshToken")?.value || "";

    const resp = await fetchNewAccessToken(refreshToken);
    if (resp.ok) {
      const accessToken = ((await resp.json()) as AccessTokenDTO).token;

      updateTokens(accessToken);
      resolve(accessToken);
    } else {
      reject({
        status: resp.status,
        body: await resp.json(),
      });
    }
  });

function fetchNewAccessToken(refreshToken: string) {
  return fetch(process.env.URL_TOKEN_UPDATE || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      tokenRefresh: refreshToken,
    }),
    credentials: "include",
  });
}

type AnswerWrapper = {
  status: number;
  body: any;
};

export const fetchWrapper = (
  url: string,
  init: RequestInit,
): Promise<AnswerWrapper> =>
  new Promise(async (resolve, reject) => {
    let accessToken = cookies().get("accessToken")?.value || "";
    const refreshToken = cookies().get("refreshToken")?.value || "";
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        Cookie: `${accessToken ? "accessToken=" + accessToken : ""}`,
      },
      credentials: "include",
    });

    switch (true) {
      case response.status === 403 && refreshToken.length !== 0: {
        await accessTokenUpdate(refreshToken)
          .then(async (result) => {
            console.log("accessToken:", result);
            if (typeof result == "string") {
              const response = await fetch(url, {
                ...init,
                headers: {
                  ...init.headers,
                  Cookie: `${result ? "accessToken=" + result : ""}`,
                },
                credentials: "include",
              });
              resolve({
                status: response.status,
                body: await response.json(),
              });
            }
          })
          .catch((error) => {
            if (typeof error.status === "number") resolve(error);
            else reject(error);
          });
        break;
      }
      default: {
        resolve({
          status: response.status,
          body: await response.json(),
        });
      }
    }
  });
