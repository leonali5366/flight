import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Protect routes like "/dashboard", "/profile", and "/settings"
const isProtectedRoute = createRouteMatcher(["/admin"]);

export default clerkMiddleware(async (auth, req) => {
  // If the requested route is protected, check if the user is authenticated
  if (isProtectedRoute(req)) await auth.protect();

  // If the request is an API request, you can add further logic
  if (req.nextUrl.pathname.startsWith("/api")) {
    // Here you can add more logic like authentication, logging, etc.
    return NextResponse.next();
  }

  // For all other requests, continue without changes
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Always run for API routes, except for static assets and Next.js internals
    "/api/:path*", // Match all API routes
    "/((?!_next|[^?]*\\.(?:html?|css|js|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", // Skip static files
  ],
};
