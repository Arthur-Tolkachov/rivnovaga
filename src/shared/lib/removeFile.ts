import fs from "fs";
import path from "path";

export const removeFile = (fileName: string) => {
  const filePath = path.join(process.cwd(), "uploads", fileName);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};
