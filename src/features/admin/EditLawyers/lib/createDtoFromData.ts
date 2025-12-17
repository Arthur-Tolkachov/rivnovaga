import { LawyersModel } from "@entity/lawyers";
import { UpdateLawyersDTO } from "@entity/lawyers";

export const createDtoFromData = ({
  about_lawyers,
  lawyers,
}: LawyersModel): UpdateLawyersDTO => ({
  lawyers,
  about_lawyers,
});
