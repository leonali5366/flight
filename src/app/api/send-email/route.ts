import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the expected request body structure
interface ContactFormRequest {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { fullName, email, phone, interest, message }: ContactFormRequest =
      await request.json();

    // Validate required fields
    if (!fullName || !email || !phone || !interest) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST,
      port: Number(process.env.HOSTINGER_SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.HOSTINGER_SMTP_USER,
        pass: process.env.HOSTINGER_SMTP_PASSWORD,
      },
    });

    // Construct the email content
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Send the email
    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.HOSTINGER_SMTP_USER}>`, // Sender address
      to: process.env.HOSTINGER_SMTP_USER, // Receiver address (your email)
      subject: `New Contact Form Submission from ${fullName}`, // Email subject
      html: emailContent, // HTML body
    });

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully", messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
