import api from "@shared/lib/axios";

export const uploadFile = async (file: File, filePath: string) => {
  const formData = new FormData();
  const fileName = file.name;

  formData.append("file", file);
  formData.append("filePath", filePath);

  const data = await api.post<FormData, { url: string; fileName: string }>(
    `/uploads/${filePath}/${fileName}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};
