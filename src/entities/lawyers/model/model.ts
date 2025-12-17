export interface LawyerModel {
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
  photo: {
    url: string;
    fileName: string;
  };
}

export interface LawyersModel {
  about_lawyers: {
    title: string;
    subtitle: string;
  };
  lawyers: LawyerModel[];
}
