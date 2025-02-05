import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { firstName, lastName, email, mobile, password } = await req.json();

    console.log("Request Body:", { firstName, lastName, email, mobile, password });

    // Validate required fields
    if (!firstName || !lastName || !email || !mobile || !password) {
      console.error("Validation failed: Missing required fields");
      return NextResponse.json(
        {
          status: "Fail",
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.error("User already exists:", email);
      return NextResponse.json(
        {
          status: "Fail",
          message: "User already exists.",
        },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed successfully");

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        mobile,
        password: hashedPassword,
        otp: "0",
      },
    });

    console.log("User created successfully:", newUser);

    return NextResponse.json(
      {
        status: "Success",
        data: {
          id: newUser.id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          mobile: newUser.mobile,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      {
        status: "Fail",
        message: error.message || "Failed to register user.",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}