import { transformStringToNumberString } from "@shared/lib/transforms";
import { CheckboxField } from "@shared/ui/fields/CheckboxField";
import { DatePickerField } from "@shared/ui/fields/DatePickerField";
import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
import { PhoneField } from "@shared/ui/fields/PhoneField";
import { RichTextField } from "@shared/ui/fields/RichTextField";
import { TextField } from "@shared/ui/fields/TextField";

export const LawyerFields = () => (
  <div className="flex flex-col gap-5">
    <div className="bg-secondary-light p-5 grid grid-cols-[2fr_1fr] gap-8">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between gap-5">
          <TextField
            name="surname"
            containerClassName="max-w-1/3"
            label="Прізвище"
          />
          <TextField name="name" containerClassName="max-w-1/3" label="Iм'я" />
          <TextField
            name="patronymic"
            containerClassName="max-w-1/3"
            label="По-батькові"
          />
        </div>

        <div className="flex justify-between gap-5">
          <PhoneField
            name="phone"
            label="Телефон"
            containerClassName="max-w-1/3"
          />

          <TextField
            name="certificate.number"
            label="Свідоцтво №"
            transform={transformStringToNumberString}
            containerClassName="max-w-1/3"
          />

          <DatePickerField
            name="certificate.date"
            label="Дата видачi"
            containerClassName="max-w-1/3"
          />
        </div>

        <RichTextField name="description" label="Опис" />
      </div>

      <FileUploaderField name="photo" label="Свiтлина" alt="Свiтлина" />
    </div>

    <div className="bg-secondary-light p-5">
      <CheckboxField name="isActive" label="Вiдображати адвоката" />
    </div>
  </div>
);
