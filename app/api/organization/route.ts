import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { UpdateMainInformationDTO } from "@entity/organization";
import { prisma } from "@shared/lib/prisma-client";
import { uploadFile } from "@shared/lib/uploadFile";

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

    if (!organization) {
      return NextResponse.json(
        { error: "Organization not found" },
        { status: 404 }
      );
    }

    const formStringFieldsArr = [
      ["name", "string"],
      ["phone", "string"],
      ["email", "string"],
      ["telegram", "string"],
      ["viber", "string"],
      ["whatsapp", "string"],
      ["address", "object"],
      ["map", "object"],
      ["working_days_schedule", "object"],
      ["working_time_schedule", "object"],
      ["logo", "file"],
    ] as const;

    const form = await req.formData();

    const {
      logo,
      address,
      map,
      working_days_schedule,
      working_time_schedule,
      ...formValues
    } = formStringFieldsArr.reduce((acc, [key, value]) => {
      if (value === "file") {
        return { ...acc, [key]: form.get(key) as File | string };
      }

      if (value === "object") {
        return {
          ...acc,
          [key]: JSON.parse(form.get(key) as string),
        };
      }

      return {
        ...acc,
        [key]: form.get(key) as string,
      };
    }, {} as UpdateMainInformationDTO);

    let logoUrl: string;

    if (logo instanceof File) {
      const url = await uploadFile(logo);

      logoUrl = url;
    } else {
      logoUrl = logo;
    }

    const response = await prisma.organization.update({
      where: { id: organization.id },
      data: {
        ...formValues,
        logo: logoUrl,
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
