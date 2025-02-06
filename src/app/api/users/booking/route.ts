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

/// Define the BookingStatus type
type BookingStatus = "pending" | "complete";

// Define the type for the status filter, including "all"
type StatusFilter = BookingStatus | null;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") as StatusFilter; // Get the 'status' search param

    // Build the `where` clause
    let where = {};
    if (status === "pending" || status === "complete") {
      where = { status }; // Filter by status if it's "pending" or "complete"
    }

    // Fetch bookings with the appropriate `where` clause
    const bookings = await prisma.booking.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);

    return NextResponse.json(
      { message: "Failed to fetch bookings", error: String(error) },
      { status: 500 }
    );
  }
}
