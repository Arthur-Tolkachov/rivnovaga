import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { UsefulLinkBlockModel } from "@entity/usefulLinks";
import { UpdateUsefulLinksDTO } from "@entity/usefulLinks/api/dto";
import { prisma } from "@shared/lib/prisma-client";

export const GET = async () => {
  try {
    const usefulLinksJSON = await prisma.setting.findUnique({
      where: {
        key: "useful_links",
      },
    });

    if (!usefulLinksJSON) {
      return NextResponse.json({ error: "About not found" }, { status: 404 });
    }

    const data: UsefulLinkBlockModel = {
      useful_links: JSON.parse(usefulLinksJSON.value),
    };

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
    const data = (await req.json()) as UpdateUsefulLinksDTO;

    await prisma.setting.update({
      where: { key: "useful_links" },
      data: { value: JSON.stringify(data.useful_links) },
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
