export { LawyerForm } from "./ui/LawyerForm";
export { LawyerFormSchema } from "./model/lawyer.validation";

export {
  createLawyer,
  updateLawyer,
  deleteLawyer,
} from "./actions/lawyer.actions";
export { getLawyers, getLawyer } from "./repository/lawyers.repository";

export type { LawyerModel } from "./model/lawyer.model";
export type { LawyerDTO } from "./model/lawyer.dto";
export type { LawyerFormValues } from "./model/lawyer.validation";
export type { LawyerFormProps } from "./ui/LawyerForm";
