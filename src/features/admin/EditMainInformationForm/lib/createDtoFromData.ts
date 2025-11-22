import {
  OrganizationFullModel,
  UpdateMainInformationDTO,
} from "@entity/organization";

export const createDtoFromData = ({
  address,
  map,
  workingDaysSchedule,
  workingTimeSchedule,
  logo,
  ...rest
}: OrganizationFullModel): UpdateMainInformationDTO => {
  const addressDTO = {
    city: address ? address.city : "",
    index: address ? address.index : "",
    street: address ? address.street : "",
    building: address ? address.building : "",
    office: address ? address.office : "",
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
    ...rest,
  };
};
