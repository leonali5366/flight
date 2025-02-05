import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { CreateToken } from "@/utility/JWTTokenHelper";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { status: "fail", message: "Email and password are required." },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { status: "fail", message: "User not found." },
        { status: 404 }
      );
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { status: "fail", message: "Invalid password." },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = await CreateToken(user.email, user.id);

    // Set token in a cookie
    const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const cookieString = `token=${token}; expires=${expirationDate.toUTCString()}; path=/; HttpOnly; Secure; SameSite=Strict`;

    return NextResponse.json(
      { status: "success", data: { token } },
      { status: 200, headers: { "set-cookie": cookieString } }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { status: "fail", message: error.message || "Failed to login." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
