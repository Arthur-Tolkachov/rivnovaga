import fs from "fs";
import path from "path";

export const removeFile = (fileName: string, folderName: string) => {
  const filePath = path.join(process.cwd(), `uploads`, folderName, fileName);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};
