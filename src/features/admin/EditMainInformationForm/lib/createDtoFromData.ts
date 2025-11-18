import { OrganizationFullModel } from "@entity/organization";

import { UpdateMainInformationDTO } from "../api/dto";

export const createDtoFromData = ({
  address,
  map,
  working_days_schedule,
  working_time_schedule,
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
    start: working_days_schedule ? working_days_schedule.start : "",
    end: working_days_schedule ? working_days_schedule.end : "",
  };

  const workingTimeScheduleDTO = {
    start: working_time_schedule ? working_time_schedule.start : "",
    end: working_time_schedule ? working_time_schedule.end : "",
  };

  const mapDTO = {
    lat: map ? map.lat : "",
    lng: map ? map.lng : "",
  };

  return {
    address: addressDTO,
    working_days_schedule: workingDaysScheduleDTO,
    working_time_schedule: workingTimeScheduleDTO,
    map: mapDTO,
    ...rest,
  };
};
