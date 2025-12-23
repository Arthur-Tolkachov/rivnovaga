import fs from "fs";
import path from "path";

export async function saveFile(file: File, filePath: string) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;
  const filePathArr = filePath.split("/");

  const dirPath = path.join(process.cwd(), "uploads", ...filePathArr);

  fs.mkdirSync(dirPath, { recursive: true });
  const fullPath = path.join(dirPath, fileName);

  await fs.writeFileSync(fullPath, buffer);

  return {
    url: `/api/uploads/${[...filePathArr, fileName].join("/")}`,
    fileName,
  };
}
