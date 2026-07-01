import { auth } from "@/lib/auth/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const isAuthRoute =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register");

  if (!isLoggedIn && !isAuthRoute) {
    return Response.redirect(
      new URL("/login", req.nextUrl)
    );
  }

  if (isLoggedIn && isAuthRoute) {
    return Response.redirect(
      new URL("/feed", req.nextUrl)
    );
  }
});

export const config = {
  matcher: [
    "/feed/:path*",
    "/profile/:path*",
    "/messages/:path*",
    "/settings/:path*",
    "/dashboard/:path*",
    "/login",
    "/register",
  ],
};