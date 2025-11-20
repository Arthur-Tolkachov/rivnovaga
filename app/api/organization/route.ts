import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { UpdateMainInformationDTO } from "@entity/organization";
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

export const PUT = async (req: NextRequest) => {
  try {
    const organization = await prisma.organization.findFirst();

    const {
      address,
      working_days_schedule,
      map,
      working_time_schedule,
      logoUrl,
      ...body
    }: UpdateMainInformationDTO = await req.json();

    if (!organization) {
      return NextResponse.json(
        { error: "Organization not found" },
        { status: 404 }
      );
    }

    const response = await prisma.organization.update({
      where: { id: organization.id },
      data: {
        ...body,
        address: {
          update: address,
        },
        map: {
          update: map,
        },
        working_days_schedule: {
          update: working_days_schedule,
        },
        working_time_schedule: {
          update: working_time_schedule,
        },
      },
    });

    return NextResponse.json(response);
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
