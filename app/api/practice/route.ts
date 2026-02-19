import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@shared/lib/prisma-client";

export async function POST(req: NextRequest) {
  try {
    const { ids } = await req.json();

    const practices = await prisma.practice.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return NextResponse.json(practices);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch practices" },
      { status: 500 },
    );
  }
}
