import { transformStringToNumberString } from "@shared/lib/transforms";
import { Button } from "@shared/ui/base/Button";
import { DatePickerField } from "@shared/ui/fields/DatePickerField";
import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
import { PhoneField } from "@shared/ui/fields/PhoneField";
import { RichTextField } from "@shared/ui/fields/RichTextField";
import { TextField } from "@shared/ui/fields/TextField";

export interface LawyerFieldProps {
  index: number;
  onRemoveLawyer?: ((index: number) => void) | null;
}

export const LawyerField: React.FC<LawyerFieldProps> = ({
  index,
  onRemoveLawyer,
}) => (
  <div className="flex flex-col gap-5 bg-secondary-light p-5">
    <h3 className="text-primary-dark">Адвокат:</h3>

    <div className="grid grid-cols-[2fr_1fr] gap-8">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between gap-5">
          <TextField
            name={`lawyers[${index}].surname`}
            containerClassName="max-w-1/3"
            label="Прізвище"
          />
          <TextField
            name={`lawyers[${index}].name`}
            containerClassName="max-w-1/3"
            label="Iм'я"
          />
          <TextField
            name={`lawyers[${index}].patronymic`}
            containerClassName="max-w-1/3"
            label="По-батькові"
          />
        </div>

        <div className="flex justify-between gap-5">
          <PhoneField
            name={`lawyers[${index}].phone`}
            label="Телефон"
            containerClassName="max-w-1/3"
          />

          <TextField
            name={`lawyers[${index}].certificate.number`}
            label="Свідоцтво №"
            transform={transformStringToNumberString}
            containerClassName="max-w-1/3"
          />

          <DatePickerField
            name={`lawyers[${index}].certificate.date`}
            label="Дата видачi"
            containerClassName="max-w-1/3"
          />
        </div>

        <RichTextField name={`lawyers[${index}].description`} label="Опис" />
      </div>

      <FileUploaderField
        name={`lawyers[${index}].photo`}
        label="Свiтлина"
        alt="Свiтлина"
      />
    </div>

    {onRemoveLawyer && (
      <Button size="sm" color="secondary" onClick={() => onRemoveLawyer(index)}>
        Видалити адвоката
      </Button>
    )}
  </div>
);
