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

    // Assert the error type before accessing its message
    const errorMessage =
      error instanceof Error ? error.message : "Error creating booking";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// GET: Retrieve all bookings
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  const where = status && status !== "all" ? { status } : {};

  const bookings = await prisma.booking.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(bookings);
}
