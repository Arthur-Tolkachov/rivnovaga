export interface UpdateProfileDTO {
  logo: { url: string; fileName: string };
  general: {
    name: string;
    phone: string | null;
    email: string | null;
    telegram: string | null;
    viber: string | null;
    whatsapp: string | null;
  };
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
  workingDaysSchedule: {
    start: string;
    end: string;
  };
  workingTimeSchedule: {
    start: string;
    end: string;
  };
}
