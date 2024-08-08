import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function middleware(request: NextRequest) {
  if (!request.url.endsWith)
    return NextResponse.redirect(new URL("/app", request.url));
  const accessToken = cookies().get("accessToken");
  try {
    await axios.get("http://localhost:8081/micro-users/api/user/permission", {
      withCredentials: true,
      headers: {
        Cookie: `accessToken=${accessToken !== undefined ? accessToken?.value : ""}`,
      },
    });
  } catch (e) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/app/:path*", "/"],
};
