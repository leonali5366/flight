import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

// REQUEST FOR A FLIGHT
export async function POST(req) {
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
      flights, 
    } = await req.json();

    // Validation for required fields
    if (
      !title ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !flyFrequency ||
      !flyingSolution ||
      !heardAbout ||
      !flights ||
      !Array.isArray(flights) ||
      flights.length === 0
    ) {
      return NextResponse.json({
        status: "Fail",
        message: "All fields are required, and at least one flight must be provided.",
      }, { status: 400 });
    }

    // Validate each flight
    for (const flight of flights) {
      if (
        !flight.from ||
        !flight.to ||
        !flight.departureDate ||
        !flight.passengers ||
        !flight.timeOfDay
      ) {
        return NextResponse.json({
          status: "Fail",
          message: "Each flight must include 'from', 'to', 'departureDate', 'passengers', and 'timeOfDay'.",
        }, { status: 400 });
      }
    }

    // Create a new booking with associated flights
    const newBooking = await prisma.booking.create({
      data: {
        title,
        firstName,
        lastName,
        email,
        phone,
        additionalRequests: additionalRequests || "",
        flyFrequency,
        flyingSolution,
        heardAbout,
        flights: {
          create: flights.map(flight => ({
            from: flight.from,
            to: flight.to,
            departureDate: new Date(flight.departureDate),
            returnDate: flight.returnDate ? new Date(flight.returnDate) : null,
            passengers: flight.passengers,
            timeOfDay: flight.timeOfDay,
          })),
        },
      },
      include: {
        flights: true, 
      },
    });

    return NextResponse.json({
      status: "Success",
      data: newBooking,
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({
      status: "Fail",
      message: error.message || "Failed to create booking",
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}




// GET ALL REQUESTED FLIGHT LIST
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Fetch a single booking by ID with its associated flights
      const booking = await prisma.booking.findUnique({
        where: { id },
        include: { flights: true }, // Include associated flights
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
      // Fetch all bookings with their associated flights
      const bookings = await prisma.booking.findMany({
        include: { flights: true }, // Include associated flights
      });

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
