import { Skeleton } from "@shared/ui/base/Skeleton";
import { RichTextField } from "@shared/ui/fields/RichTextField";
import { TextField } from "@shared/ui/fields/TextField";

interface AboutSectionFieldsProps {
  isFetching?: boolean;
  fields: Record<"id", string>[];
}

export const AboutSectionFields: React.FC<AboutSectionFieldsProps> = ({
  isFetching,
  fields,
}) => {
  if (isFetching) {
    return (
      <Skeleton
        className="w-full h-[543px]"
        containerClassName="flex flex-col gap-8"
        count={2}
      />
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {fields.map(({ id }, idx) => {
        const order = idx + 1;

        return (
          <div className="flex flex-col gap-5 bg-secondary-light p-5" key={id}>
            <h3 className="text-primary-dark">{`Секцiя ${order}`}</h3>

            <div className="flex flex-col gap-5">
              <TextField name={`about[${idx}].title`} label="Заголовок" />

              <RichTextField name={`about[${idx}].description`} label="Опис" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
