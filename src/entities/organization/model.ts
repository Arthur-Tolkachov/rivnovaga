import { Organization, Prisma } from "@prisma/client";

export type OrganizationModel = Organization;

export type OrganizationFullModel = Prisma.OrganizationGetPayload<{
  include: {
    address: true;
    map: true;
    working_days_schedule: true;
    working_time_schedule: true;
  };
  omit: {
    id: true;
    createdAt: true;
    updatedAt: true;
  };
}>;
