import {
  UsefulLinkBlockModel,
  UpdateUsefulLinksDTO,
} from "@entity/usefulLinks";

export const createDtoFromData = ({
  useful_links,
}: UsefulLinkBlockModel): UpdateUsefulLinksDTO => ({
  useful_links,
});
