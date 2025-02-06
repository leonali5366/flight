import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { status } = await request.json();

  const updatedBooking = await prisma.booking.update({
    where: { id: params.id },
    data: { status },
  });

  return NextResponse.json(updatedBooking);
}
