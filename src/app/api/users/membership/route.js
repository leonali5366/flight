import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

// REQUEST FOR MEMBERSHIP
export async function POST(req) {

  try {
    const { title, firstName, lastName, email, phone, message, flyFrequency,flyingSolution,heardAbout } = await req.json();

    // Validation for required fields
    if (!title || !firstName || !lastName || !email || !phone || !message || !flyFrequency || !flyingSolution || !heardAbout) {
      return NextResponse.json({
        status: "Fail",
        message: "All fields except!",
      });
    }


    const newBooking = await prisma.flightmembership.create({
      data: {
        title,
        firstName,
        lastName,
        email,
        phone,
        message,
        flyFrequency,
        flyingSolution,
        heardAbout
      },
    });

    return NextResponse.json({
      status: "Success",
      data: newBooking,
    });
  } catch (error) {
    console.error("Error creating flight booking:", error);
    return NextResponse.json({
      status: "Fail",
      message: error.message || "Failed to create flight booking",
    });
  } finally {
    await prisma.$disconnect();
  }
}

// GET ALL MEMBERSHIP LIST
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); 

    if (id) {
      const booking = await prisma.flightmembership.findUnique({
        where: { id: id }, 
      });

      if (!booking) {
        return NextResponse.json({
          status: "Fail",
          message: "Booking not found",
        }, { status: 404 });
      }

      return NextResponse.json({
        status: "Success",
        data: booking,
      });
    } else {
      const bookings = await prisma.flightmembership.findMany();
      return NextResponse.json({
        status: "Success",
        data: bookings,
      });
    }
  } catch (error) {
    console.error("Error fetching booking(s):", error);
    return NextResponse.json({
      status: "Fail",
      message: error.message || "Failed to fetch booking(s)",
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
