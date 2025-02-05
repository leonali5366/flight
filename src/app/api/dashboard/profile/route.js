/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Fetch user profile
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    // Validate userId
    if (!userId) {
      return NextResponse.json(
        {
          status: "Fail",
          message: "User ID is required.",
        },
        { status: 400 }
      );
    }

    // Fetch user profile
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        mobile: true,
        photo: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          status: "Fail",
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return NextResponse.json(
      {
        status: "Fail",
        message: error.message || "Failed to fetch user profile.",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT: Update user profile
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    // Validate userId
    if (!userId) {
      return NextResponse.json(
        {
          status: "Fail",
          message: "User ID is required.",
        },
        { status: 400 }
      );
    }

    // Parse the request body
    const formData = await req.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const mobile = formData.get("mobile");
    const photo = formData.get("photo");

    // Prepare the update data
    const updateData = {};
    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (mobile) updateData.mobile = mobile;
    if (photo) {
      // Handle file upload (e.g., save to a file storage service and get the URL)
      const photoUrl = await uploadPhoto(photo); // Implement this function
      updateData.photo = photoUrl;
    }

    // Update user profile
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        mobile: true,
        photo: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      status: "Success",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return NextResponse.json(
      {
        status: "Fail",
        message: error.message || "Failed to update user profile.",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}


async function uploadPhoto(photo) {
  return "https://example.com/profile-photo.jpg";
}