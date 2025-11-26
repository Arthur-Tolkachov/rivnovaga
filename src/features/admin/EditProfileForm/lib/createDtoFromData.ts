import { ProfileModel, UpdateProfileDTO } from "@entity/profile";

export const createDtoFromData = ({
  address,
  map,
  workingDaysSchedule,
  workingTimeSchedule,
  logo,
  general,
}: ProfileModel): UpdateProfileDTO => {
  const addressDTO = {
    city: address ? address.city : "",
    index: address ? address.index : "",
    street: address ? address.street : "",
    building: address ? address.building : "",
    office: address ? address.office : "",
  };

  const generalDTO = {
    name: general ? general.name : "",
    phone: general ? general.phone : "",
    email: general ? general.email || "" : "",
    telegram: general ? general.telegram || "" : "",
    viber: general ? general.viber || "" : "",
    whatsapp: general ? general.whatsapp || "" : "",
  };

  const workingDaysScheduleDTO = {
    start: workingDaysSchedule ? workingDaysSchedule.start : "",
    end: workingDaysSchedule ? workingDaysSchedule.end : "",
  };

  const workingTimeScheduleDTO = {
    start: workingTimeSchedule ? workingTimeSchedule.start : "",
    end: workingTimeSchedule ? workingTimeSchedule.end : "",
  };

  const mapDTO = {
    lat: map ? map.lat : "",
    lng: map ? map.lng : "",
  };

  const logoDTO = {
    fileName: logo ? logo.fileName : "",
    url: logo ? logo.url : "",
  };

  return {
    address: addressDTO,
    workingDaysSchedule: workingDaysScheduleDTO,
    workingTimeSchedule: workingTimeScheduleDTO,
    map: mapDTO,
    logo: logoDTO,
    general: generalDTO,
  };
};
