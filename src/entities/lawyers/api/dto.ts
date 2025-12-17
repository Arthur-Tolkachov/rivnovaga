export interface UpdateLawyersDTO {
  about_lawyers: {
    title: string;
    subtitle: string;
  };
  lawyers: {
    id: string;
    name: string;
    surname: string;
    patronymic: string;

    certificate: {
      number: string;
      date: string;
    };

    phone: string | null;
    description: string;
    photo: { url: string; fileName: string };
  }[];
}
