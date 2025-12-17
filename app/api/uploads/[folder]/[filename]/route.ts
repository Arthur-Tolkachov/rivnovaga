import fs from "fs";
import path from "path";

import { Prisma } from "@prisma/client";
import mime from "mime-types";
import { NextRequest, NextResponse } from "next/server";

import { saveFile } from "@shared/lib/saveFile";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ folder: string; filename: string }> }
) {
  const { filename, folder } = await context.params;

  const filePath = path.join(process.cwd(), "uploads", folder, filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const contentType = mime.lookup(filePath) || "application/octet-stream";
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: { "Content-Type": contentType },
  });
}

export async function POST(req: NextRequest) {
  const form = await req.formData();

  const file = form.get("file") as File;
  const folder = form.get("folder") as string;

  try {
    const response = await saveFile(file, folder);

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
}
