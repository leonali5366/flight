import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// POST: Create a new booking
export async function POST(req: NextRequest) {
  try {
    const {
      title,
      firstName,
      lastName,
      email,
      phone,
      additionalRequests,
      flyFrequency,
      flyingSolution,
      heardAbout,
      from,
      to,
      departureDate,
      returnDate,
      passenger,
      departureTime,
      returnDepartureTime,
    } = await req.json();

    const booking = await prisma.booking.create({
      data: {
        title,
        firstName,
        lastName,
        email,
        phone,
        additionalRequests,
        flyFrequency,
        flyingSolution,
        heardAbout,
        from,
        to,
        departureDate,
        returnDate,
        passenger,
        departureTime,
        returnDepartureTime,
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: error.message || "Error creating booking" },
      { status: 500 }
    );
  }
}

// GET: Retrieve all bookings
export async function GET() {
  try {
    const bookings = await prisma.booking.findMany();
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: error.message || "Error fetching bookings" },
      { status: 500 }
    );
  }
}
