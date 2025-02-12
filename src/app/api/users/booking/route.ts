import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.HOSTINGER_SMTP_HOST,
  port: Number(process.env.HOSTINGER_SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.HOSTINGER_SMTP_USER,
    pass: process.env.HOSTINGER_SMTP_PASSWORD,
  },
});

// POST: Create a new booking
export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.json();
    console.log("Received Booking Data:", requestBody); // Debugging log

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
    } = requestBody;

    if (!email) {
      throw new Error(
        "User email is missing. Cannot send booking confirmation."
      );
    }

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

    // Send email notification to the user and forward to the internal team
    try {
      await transporter.sendMail({
        from: process.env.HOSTINGER_SMTP_USER,
        to: [email, "justin@oppongjet.com"],
        subject: "Your Jet Booking Confirmation",
        text: `Dear ${firstName} ${lastName},\n\n
      Thank you for booking with us! Here are your booking details:\n\n
      Name: ${firstName} ${lastName}\n
      Email: ${email}\n
      Phone: ${phone}\n
      From: ${from}\n
      To: ${to}\n
      Departure Date: ${departureDate}\n
      Return Date: ${returnDate || "N/A"}\n
      Passengers: ${passenger}\n
      Additional Requests: ${additionalRequests || "None"}\n\n
      Our team will get in touch with you soon.\n\n
      Best regards,\n
      Oppong Jet Team
    `,
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
    }

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ error: "error" }, { status: 500 });
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
