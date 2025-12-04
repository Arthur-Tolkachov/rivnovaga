import { Skeleton } from "@shared/ui/base/Skeleton";
import { RichTextField } from "@shared/ui/fields/RichTextField";
import { TextField } from "@shared/ui/fields/TextField";

interface CtaSectionFieldsProps {
  isFetching?: boolean;
}

export const CtaSectionFields: React.FC<CtaSectionFieldsProps> = ({
  isFetching,
}) => {
  if (isFetching) {
    return <Skeleton className="w-full h-[507px]" count={1} />;
  }

  return (
    <div className="flex flex-col gap-8 bg-secondary-light p-5">
      <div>
        <TextField name="cta.title" label="Заголовок" />
      </div>

      <RichTextField name="cta.description" label="Опис" />
    </div>
  );
};
