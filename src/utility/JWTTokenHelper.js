/* eslint-disable @typescript-eslint/no-unused-vars */
import { jwtVerify, SignJWT } from "jose";

// Create JWT token
export async function CreateToken(email, id) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT({ email, id })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME || "1d")
    .sign(secret);
  return token;
}

// Verify JWT token
export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    const decoded = await jwtVerify(token, secret);
    return decoded.payload;
  } catch (error) {
    throw new Error("Invalid token.");
  }
}