import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { ProfileModel, UpdateProfileDTO } from "@entity/profile";
import { formDataToObject } from "@shared/lib/formDataToObject";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";
import { uploadFile } from "@shared/lib/uploadFile";

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

    const form = await req.formData();
    const dataObj = formDataToObject<UpdateProfileDTO>(form);
    const oldLogo = JSON.parse(logoJSON.value);

    let newLogo: { url: string; fileName: string };

    if (dataObj.logo instanceof File) {
      const uploadedLogo = await uploadFile(dataObj.logo);

      newLogo = uploadedLogo;
    } else {
      newLogo = dataObj.logo;
    }

    await prisma.$transaction(
      Object.entries({ ...dataObj, logo: newLogo }).map(([key, value]) =>
        prisma.setting.update({
          where: { key },
          data: { value: JSON.stringify(value) },
        })
      )
    );

    if (dataObj.logo instanceof File && oldLogo) {
      removeFile(oldLogo.fileName);
    }

    return NextResponse.json({ success: true });
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
