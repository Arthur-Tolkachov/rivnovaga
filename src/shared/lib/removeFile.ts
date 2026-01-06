import fs from "fs";
import path from "path";

export const removeFile = (fileName: string, filePath: string) => {
  const filePathArr = filePath.split("/");

  const dirPath = path.join(process.cwd(), "uploads", ...filePathArr);

  const fullFilePath = path.join(dirPath, fileName);

  if (fs.existsSync(fullFilePath)) {
    fs.unlinkSync(fullFilePath);
  }

  if (fs.existsSync(dirPath) && fs.readdirSync(dirPath).length === 0) {
    fs.rmdirSync(dirPath);
  }
};
