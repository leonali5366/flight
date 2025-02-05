/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JWTTokenHelper";

export async function middleware(req) {
  // Protect dashboard routes
  if (req.nextUrl.pathname.startsWith("/api/dashboard")) {
    try {
      const token = req.cookies.get("token")?.value;

      if (!token) {
        return NextResponse.json(
          { status: "fail", message: "Unauthorized. No token provided." },
          { status: 401 }
        );
      }

      // Verify the token
      const payload = await VerifyToken(token);

      // Attach user details to the request headers
      const requestHeaders = new Headers(req.headers);
      requestHeaders.set("email", payload.email);
      requestHeaders.set("id", payload.id);

      return NextResponse.next({
        request: { headers: requestHeaders },
      });
    } catch (error) {
      return NextResponse.json(
        { status: "fail", message: "Unauthorized. Invalid token." },
        { status: 401 }
      );
    }
  }

  // Allow access to public routes
  if (req.nextUrl.pathname.startsWith("/api/users")) {
    return NextResponse.next();
  }
}