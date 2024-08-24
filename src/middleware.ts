import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";
import { notFound } from "next/navigation";

export async function middleware(request: NextRequest) {
  console.log("url:", request.url);
  if (request.url.endsWith("/panel/admin")) {
    //logic
    if (true) return;

    return new NextResponse("Page not Found", { status: 404 });
  }

  if (request.url.endsWith("/"))
    return NextResponse.redirect(new URL("/app", request.url));

  const accessToken = cookies().get("accessToken");
  if (
    !request.url.endsWith("/login") &&
    !request.url.endsWith("/registration")
  ) {
    console.log("url:", request.url);
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
}

export const config = {
  matcher: ["/app/:path*", "/", "/panel/admin"],
};
