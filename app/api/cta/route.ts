import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { CtaModel, UpdateCtaSectionDTO } from "@entity/cta";
import { prisma } from "@shared/lib/prisma-client";

export const GET = async () => {
  try {
    const ctaJSON = await prisma.setting.findUnique({
      where: {
        key: "cta",
      },
    });

    if (!ctaJSON) {
      return NextResponse.json({ error: "Cta not found" }, { status: 404 });
    }

    const data: CtaModel = { cta: JSON.parse(ctaJSON.value) };

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
    const data = (await req.json()) as UpdateCtaSectionDTO;

    await prisma.setting.update({
      where: { key: "cta" },
      data: { value: JSON.stringify(data.cta) },
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
