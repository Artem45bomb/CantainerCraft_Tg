import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { notFound } from "next/navigation";
import { decodedJwt } from "./features/api/service/jwt/jwt.service";

export async function middleware(request: NextRequest) {
  if (request.url.endsWith("/"))
    return NextResponse.redirect(new URL("/app", request.url));

  const accessToken = cookies().get("accessToken");
  if (
    !request.url.endsWith("/login") &&
    !request.url.endsWith("/registration")
  ) {
    try {
      if (accessToken == undefined) {
        throw new Error("Token is not exist");
      }

      const decoded = decodedJwt(accessToken.value);
      if (
        decoded.exp == undefined ||
        Math.floor(Date.now() / 1000) > decoded.exp
      ) {
        console.log("Token expired.User name:", decoded.sub);
        throw new Error("Token expired");
      }

      await axios.get("http://localhost:8081/micro-users/api/user/permission", {
        withCredentials: true,
        headers: {
          Cookie: `accessToken=${accessToken.value}`,
        },
      });
    } catch (e) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/app/:path*", "/", "/panel/admin"],
};
