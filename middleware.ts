import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const isLoggedIn = !!token;
      const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
  },
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.png).*)"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Temporarily disable CSP for debugging
  response.headers.set(
    "Content-Security-Policy",
    "default-src *; script-src *; connect-src *; frame-src *; img-src *; style-src *;"
  );

  return response;
}
