import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { LawyerModel, LawyersModel, UpdateLawyersDTO } from "@entity/lawyers";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

export const GET = async () => {
  try {
    const lawyersJSON = await prisma.setting.findMany({
      where: {
        key: {
          in: ["lawyers", "about_lawyers"],
        },
      },
    });

    if (!lawyersJSON) {
      return NextResponse.json({ error: "Lawyers not found" }, { status: 404 });
    }

    const data = lawyersJSON.reduce((acc, { key, value }) => {
      return { ...acc, [key]: JSON.parse(value) };
    }, {} as LawyersModel);

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
    const lawyersJSON = await prisma.setting.findUnique({
      where: { key: "lawyers" },
    });

    if (!lawyersJSON) {
      return NextResponse.json({ error: "Lawyers not found" }, { status: 404 });
    }

    const dto = (await req.json()) as UpdateLawyersDTO;

    await prisma.$transaction(
      Object.entries(dto).map(([key, value]) => {
        return prisma.setting.update({
          where: { key },
          data: { value: JSON.stringify(value) },
        });
      })
    );

    dto.lawyers.forEach(({ photo, id }) => {
      const oldLawyers = JSON.parse(lawyersJSON.value) as LawyerModel[];
      const oldLawyer = oldLawyers.find((lawyer) => lawyer.id === id);

      if (oldLawyer && oldLawyer?.photo.fileName !== photo.fileName) {
        removeFile(oldLawyer?.photo.fileName, "lawyers");
      }
    });

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
