import { useFormContext } from "react-hook-form";

import { Button } from "@shared/ui/base/Button";

export interface FormActionButtonsProps {
  isLoading?: boolean;
  onReset: VoidFunction;
}

export const FormActionButtons: React.FC<FormActionButtonsProps> = ({
  isLoading,
  onReset,
}) => {
  const {
    formState: { isDirty },
  } = useFormContext();

  const isDisabled = !isDirty || isLoading;

  return (
    <div className="flex gap-5 p-5 bg-secondary-light sticky bottom-5">
      <Button
        type="submit"
        variant="filled"
        color="secondary"
        isLoading={isLoading}
        disabled={isDisabled}
      >
        Зберiгти
      </Button>

      <Button
        variant="outlined-dark"
        color="secondary"
        onClick={onReset}
        disabled={isDisabled}
      >
        Скасувати
      </Button>
    </div>
  );
};
