import { SelectOption } from "@shared/ui/base/Select";
import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
import { RichTextField } from "@shared/ui/fields/RichTextField";
import { SelectField } from "@shared/ui/fields/SelectField";
import { TextField } from "@shared/ui/fields/TextField";

export interface PracticeCategoryFieldsProps {
  practicesDropdownOptions: SelectOption[];
}

export const PracticeCategoryFields: React.FC<PracticeCategoryFieldsProps> = ({
  practicesDropdownOptions,
}) => (
  <div className="flex flex-col gap-5 bg-secondary-light p-5">
    <div className="lg:max-w-[300px] ">
      <FileUploaderField name="cover" label="Обкладинка" />
    </div>

    <div className="flex flex-col gap-5">
      <TextField name="title" label="Заголовок" />
      <RichTextField name="description" label="Опис" />

      <div className="w-[240px] lg:w-100">
        <SelectField
          name="practices"
          options={practicesDropdownOptions}
          placeholder="Пов'язанi практики"
          isMulti
          isClearable
        />
      </div>
    </div>
  </div>
);
