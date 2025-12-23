import { RichTextField } from "@shared/ui/fields/RichTextField";
import { TextField } from "@shared/ui/fields/TextField";

interface AboutSectionFieldsProps {
  fields: Record<"id", string>[];
}

export const AboutSectionFields: React.FC<AboutSectionFieldsProps> = ({
  fields,
}) => (
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
