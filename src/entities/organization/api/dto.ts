export interface UpdateMainInformationDTO {
  name: string;
  phone: string | null;
  email: string | null;
  telegram: string | null;
  viber: string | null;
  whatsapp: string | null;
  logoUrl: string | File;
  address: {
    index: string | null;
    city: string;
    street: string;
    building: string;
    office: string | null;
  };
  map: {
    lat: string;
    lng: string;
  };
  working_days_schedule: {
    start: string;
    end: string;
  };
  working_time_schedule: {
    start: string;
    end: string;
  };
}
