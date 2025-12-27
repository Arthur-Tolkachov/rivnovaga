import { useFormContext } from "react-hook-form";

import { Button } from "@shared/ui/base/Button";

export interface FormActionButtonsProps {
  isLoading?: boolean;
  cancelButtonTitle?: string;
  disableCancelButtonIfNotDirty?: boolean;
  onDelete?: VoidFunction;
  onCancel: VoidFunction;
}

export const FormActionButtons: React.FC<FormActionButtonsProps> = ({
  isLoading,
  cancelButtonTitle = "Назад",
  disableCancelButtonIfNotDirty,
  onDelete,
  onCancel,
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
        size="sm"
      >
        Зберiгти
      </Button>

      {onDelete && (
        <Button
          variant="outlined-dark"
          color="secondary"
          size="sm"
          onClick={onDelete}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Видалити
        </Button>
      )}

      <Button
        variant="outlined-dark"
        color="secondary"
        onClick={onCancel}
        disabled={disableCancelButtonIfNotDirty ? isDisabled : isLoading}
        size="sm"
      >
        {cancelButtonTitle}
      </Button>
    </div>
  );
};
