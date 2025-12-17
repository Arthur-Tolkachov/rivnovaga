import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { AboutModel, UpdateAboutSectionDTO } from "@entity/about";
import { prisma } from "@shared/lib/prisma-client";

export const GET = async () => {
  try {
    const aboutJSON = await prisma.setting.findUnique({
      where: {
        key: "about",
      },
    });

    if (!aboutJSON) {
      return NextResponse.json({ error: "About not found" }, { status: 404 });
    }

    const data: AboutModel = { about: JSON.parse(aboutJSON.value) };

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
    const data = (await req.json()) as UpdateAboutSectionDTO;

    await prisma.setting.update({
      where: { key: "about" },
      data: { value: JSON.stringify(data.about) },
    });

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
