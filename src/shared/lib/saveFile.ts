import fs from "fs";
import path from "path";

export async function saveFile(file: File, folderName: string) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;
  const dirPath = path.join(process.cwd(), "uploads", folderName);
  fs.mkdirSync(dirPath, { recursive: true });
  const filePath = path.join(dirPath, fileName);

  await fs.writeFileSync(filePath, buffer);

  return {
    url: `/api/uploads/${folderName}/${fileName}`,
    fileName,
  };
}
