import { SelectOption } from "@shared/ui/base/Select";
import { CheckboxField } from "@shared/ui/fields/CheckboxField";
import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
import { SelectField } from "@shared/ui/fields/SelectField";
import { TextField } from "@shared/ui/fields/TextField";

export interface PracticeFieldsProps {
  servicesDropdownOptions: SelectOption[];
  categoriesDropdownOptions: SelectOption[];
}

export const PracticeFields: React.FC<PracticeFieldsProps> = ({
  servicesDropdownOptions,
  categoriesDropdownOptions,
}) => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-5 bg-secondary-light p-5">
      <TextField name="title" label="Заголовок" />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5">
          <TextField name="caseNumber" label="Номер справи" />
          <TextField name="proceedingNumber" label="Номер провадження" />
          <TextField name="city" label="Мiсто" />
        </div>

        <div className="flex flex-col gap-5">
          <TextField name="url" label="Посилання на реєстр" />
          <FileUploaderField
            name="file"
            label="PDF файл"
            accept="application/pdf"
            isDocument
          />
        </div>
      </div>
    </div>

    <div className="bg-secondary-light flex flex-col lg:flex-row lg:items-center gap-5 p-5">
      <SelectField
        name="categories"
        width="300px"
        options={categoriesDropdownOptions}
        placeholder="Роздiли"
        isMulti
        isClearable
      />

      <span className="text-primary-dark">
        - роздiли в яких присутня практика
      </span>
    </div>

    <div className="bg-secondary-light flex flex-col lg:flex-row lg:items-center gap-5 p-5">
      <SelectField
        name="services"
        width="300px"
        options={servicesDropdownOptions}
        placeholder="Пов'язанi послуги"
        isMulti
        isClearable
      />

      <span className="text-primary-dark">
        - користавач буде бачити цю практику переглядуючи обранi послуги
      </span>
    </div>

    <div className="bg-secondary-light p-5">
      <CheckboxField name="isActive" label="Вiдображати практику" />
    </div>
  </div>
);
