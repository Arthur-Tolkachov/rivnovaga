import { v4 as uuidv4 } from "uuid";

import { LawyerModel } from "@entity/lawyers/model";
import { Button } from "@shared/ui/base/Button";

interface AddLawyerButtonProps {
  onAddField: (value: LawyerModel) => void;
}

export const AddLawyerButton: React.FC<AddLawyerButtonProps> = ({
  onAddField,
}) => {
  const initialValues = {
    id: uuidv4(),
    name: "",
    surname: "",
    patronymic: "",
    certificate: {
      number: "",
      date: "",
    },
    phone: "",
    description: "",
    photo: {
      url: "",
      fileName: "",
    },
  };

  return (
    <Button
      color="secondary"
      size="sm"
      onClick={() => onAddField(initialValues)}
    >
      Додати адвоката
    </Button>
  );
};
