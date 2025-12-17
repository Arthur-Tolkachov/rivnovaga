import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { ProfileModel, UpdateProfileDTO } from "@entity/profile";
import { FileDto } from "@entity/upload";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

export const GET = async () => {
  try {
    const profileJSONArr = await prisma.setting.findMany({
      where: {
        key: {
          in: [
            "workingDaysSchedule",
            "workingTimeSchedule",
            "general",
            "map",
            "logo",
            "address",
          ],
        },
      },
    });

    if (!profileJSONArr.length) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const data = profileJSONArr.reduce((acc, { key, value }) => {
      return { ...acc, [key]: JSON.parse(value) };
    }, {} as ProfileModel);

    return NextResponse.json(data);
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
    const logoJSON = await prisma.setting.findUnique({
      where: { key: "logo" },
    });

    if (!logoJSON) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const oldLogo = JSON.parse(logoJSON.value) as FileDto;
    const dto = (await req.json()) as UpdateProfileDTO;

    await prisma.$transaction(
      Object.entries(dto).map(([key, value]) =>
        prisma.setting.update({
          where: { key },
          data: { value: JSON.stringify(value) },
        })
      )
    );

    if (oldLogo.fileName !== dto.logo.fileName) {
      removeFile(oldLogo.fileName, "logo");
    }

    return NextResponse.json(dto);
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
