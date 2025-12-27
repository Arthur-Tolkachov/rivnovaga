import { CheckboxField } from "@shared/ui/fields/CheckboxField";
import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
import { RichTextField } from "@shared/ui/fields/RichTextField";
import { TextField } from "@shared/ui/fields/TextField";

export const ServiceFields = () => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-5 bg-secondary-light p-5">
      <div className="max-w-[300px] ">
        <FileUploaderField name="cover" label="Обкладинка" />
      </div>

      <div className="flex flex-col gap-5">
        <TextField name="title" label="Заголовок" />
        <RichTextField name="description" label="Опис" />
      </div>
    </div>

    <div className="bg-secondary-light p-5">
      <CheckboxField name="isActive" label="Вiдображати послугу" />
    </div>
  </div>
);
