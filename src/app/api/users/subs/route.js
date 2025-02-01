import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

// REQUEST FOR A SUBSCRIPTION

export async function POST(req) {
  try {
    const { title, forename, name, email, phone, message, likeFly, descFly } = await req.json();

    // Validation for required fields
    if (!title || !forename || !name || !email || !phone || !likeFly || !descFly) {
      return NextResponse.json({
        status: "Fail",
        message: "All fields are required!",
      }, { status: 400 });
    }


    // Create a new flight subscription
    const newBooking = await prisma.flightSubscription.create({
      data: {
        title,
        forename,
        name,
        email,
        phone,
        message,
        likeFly,
        descFly,
      },
    });

    return NextResponse.json({
      status: "Success",
      data: newBooking,
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating flight subscription:", error);
    return NextResponse.json({
      status: "Fail",
      message: error.message || "Failed to create flight subscription",
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// // GET ALL SUBSCRIPTION LIST
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const booking = await prisma.flightSubscription.findUnique({
        where: { id: id },
      });

      if (!booking) {
        return NextResponse.json(
          {
            status: "Fail",
            message: "Booking not found",
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        status: "Success",
        data: booking,
      });
    } else {
      const bookings = await prisma.flightSubscription.findMany();
      return NextResponse.json({
        status: "Success",
        data: bookings,
      });
    }
  } catch (error) {
    console.error("Error fetching booking(s):", error);
    return NextResponse.json(
      {
        status: "Fail",
        message: error.message || "Failed to fetch booking(s)",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
