import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { UpdateMainInformationDTO } from "@entity/organization";
import {
  formDataToObject,
  FormDataToObjectSchemeDataType,
} from "@shared/lib/formDataToObject";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";
import { uploadFile } from "@shared/lib/uploadFile";

export const GET = async () => {
  try {
    const organization = await prisma.organization.findFirst({
      include: {
        logo: true,
        address: true,
        map: true,
        workingDaysSchedule: true,
        workingTimeSchedule: true,
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
    const organization = await prisma.organization.findFirst({
      include: {
        logo: true,
      },
    });

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
      ["workingDaysSchedule", "object"],
      ["workingTimeSchedule", "object"],
      ["logo", "file"],
    ] as const satisfies [string, FormDataToObjectSchemeDataType][];

    const form = await req.formData();

    const {
      logo,
      address,
      map,
      workingDaysSchedule,
      workingTimeSchedule,
      ...formValues
    } = formDataToObject<UpdateMainInformationDTO>({
      formData: form,
      schema: formStringFieldsArr,
    });

    const oldLogo = organization.logo;
    let newLogo: { url: string; fileName: string };

    if (logo instanceof File) {
      const uploadedLogo = await uploadFile(logo);

      newLogo = uploadedLogo;
    } else {
      newLogo = logo;
    }

    const response = await prisma.organization.update({
      where: { id: organization.id },
      data: {
        ...formValues,
        logo: {
          update: newLogo,
        },
        address: {
          update: address,
        },
        map: {
          update: map,
        },
        workingDaysSchedule: {
          update: workingDaysSchedule,
        },
        workingTimeSchedule: {
          update: workingTimeSchedule,
        },
      },
    });

    if (oldLogo) {
      removeFile(oldLogo.fileName);
    }

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
