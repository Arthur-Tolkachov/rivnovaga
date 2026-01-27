import { useFormContext } from "react-hook-form";

import SaveIcon from "@public/assets/icons/save.svg";
import TrashIcon from "@public/assets/icons/trash.svg";
import { useMobile } from "@shared/lib/useMobile";
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
  const isMobile = useMobile();

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
        {isMobile ? (
          <SaveIcon className="w-5 h-5 fill-secondary-light" />
        ) : (
          "Зберiгти"
        )}
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
          {isMobile ? (
            <TrashIcon className="w-5 h-5 fill-secondary-main" />
          ) : (
            "Видалити"
          )}
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
