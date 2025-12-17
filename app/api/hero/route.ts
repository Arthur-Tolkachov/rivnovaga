import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { HeroModel, UpdateHeroSectionDTO } from "@entity/hero";
import { prisma } from "@shared/lib/prisma-client";

export const GET = async () => {
  try {
    const heroJSON = await prisma.setting.findUnique({
      where: {
        key: "hero",
      },
    });

    if (!heroJSON) {
      return NextResponse.json({ error: "Hero not found" }, { status: 404 });
    }

    const data: HeroModel = { hero: JSON.parse(heroJSON.value) };

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
    const data = (await req.json()) as UpdateHeroSectionDTO;

    await prisma.setting.update({
      where: { key: "hero" },
      data: { value: JSON.stringify(data.hero) },
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
