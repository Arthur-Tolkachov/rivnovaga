import fs from "fs";
import path from "path";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import mime from "mime-types";
import { NextRequest, NextResponse } from "next/server";

import { saveFile } from "@shared/lib/saveFile";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ filePath: string[] }> },
) {
  const { filePath } = await context.params;

  const fullPath = path.join(process.cwd(), "uploads", ...filePath);

  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const contentType = mime.lookup(fullPath) || "application/octet-stream";
  const fileBuffer = fs.readFileSync(fullPath);

  return new NextResponse(fileBuffer, {
    headers: { "Content-Type": contentType },
  });
}

export async function POST(req: NextRequest) {
  const form = await req.formData();

  const file = form.get("file") as File;
  const filePath = form.get("filePath") as string;

  try {
    const response = await saveFile(file, filePath);

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
