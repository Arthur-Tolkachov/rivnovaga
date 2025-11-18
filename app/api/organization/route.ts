import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@shared/lib/prisma-client";

export const GET = async () => {
  try {
    const organization = await prisma.organization.findFirst({
      include: {
        address: true,
        map: true,
        working_days_schedule: true,
        working_time_schedule: true,
      },
    });

    if (!organization) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(organization);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
