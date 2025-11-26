import { Button } from "@shared/ui/base/Button";
import { Skeleton } from "@shared/ui/base/Skeleton";

export interface FormActionButtonsProps {
  isFetching?: boolean;
  isLoading?: boolean;
  onReset: VoidFunction;
}

export const FormActionButtons: React.FC<FormActionButtonsProps> = ({
  isFetching,
  isLoading,
  onReset,
}) => {
  if (isFetching) {
    return (
      <Skeleton
        className="w-full h-[64px]"
        containerClassName="grid grid-cols-[151px_164px] gap-5"
        count={2}
      />
    );
  }

  return (
    <div className="flex gap-5">
      <Button
        type="submit"
        variant="filled"
        color="secondary"
        isLoading={isLoading}
        disabled={isLoading}
      >
        Зберiгти
      </Button>

      <Button
        variant="outlined-dark"
        color="secondary"
        onClick={onReset}
        disabled={isLoading}
      >
        Скасувати
      </Button>
    </div>
  );
};
