import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json();

    const updatedBooking = await prisma.booking.update({
      where: { id: params.id },
      data: { status },
    });

    return NextResponse.json(updatedBooking);
  } catch (error) {
    let errorMessage = "Failed to update booking";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
