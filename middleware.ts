import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Define the middleware function
export async function middleware(req: NextRequest) {
  // Get the token from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Define the URL for redirection
  const url = req.nextUrl.clone();

  // Check if the user is authenticated
  const isLoggedIn = !!token;
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  if (isOnDashboard && !isLoggedIn) {
    // Redirect unauthenticated users to login page
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Define the middleware config to apply to specific routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
