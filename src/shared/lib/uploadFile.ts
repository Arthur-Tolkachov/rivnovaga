import fs from "fs";
import path from "path";

export async function uploadFile(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), "uploads", fileName);

  fs.writeFileSync(filePath, buffer);

  return {
    url: `/api/uploads/${fileName}`,
    fileName,
  };
}
