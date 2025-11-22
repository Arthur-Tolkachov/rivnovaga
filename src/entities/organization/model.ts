import { Organization, Prisma } from "@prisma/client";

export type OrganizationModel = Organization;

export type OrganizationFullModel = Prisma.OrganizationGetPayload<{
  include: {
    address: true;
    map: true;
    workingDaysSchedule: true;
    workingTimeSchedule: true;
    logo: true;
  };
  omit: {
    id: true;
    createdAt: true;
    updatedAt: true;
  };
}>;
