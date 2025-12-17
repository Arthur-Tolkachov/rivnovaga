import api from "@shared/lib/axios";

export const uploadFile = async (file: File, folder: string) => {
  const formData = new FormData();
  const fileName = file.name;

  formData.append("file", file);
  formData.append("folder", folder);

  const data = await api.post<FormData, { url: string; fileName: string }>(
    `/uploads/${folder}/${fileName}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};
