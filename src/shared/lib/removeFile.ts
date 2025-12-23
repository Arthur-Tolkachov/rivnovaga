import fs from "fs";
import path from "path";

export const removeFile = (fileName: string, filePath: string) => {
  const filePathArr = filePath.split("/");
  const fullFilePath = path.join(
    process.cwd(),
    `uploads`,
    ...filePathArr,
    fileName
  );

  if (fs.existsSync(fullFilePath)) {
    fs.unlinkSync(fullFilePath);
  }
};
