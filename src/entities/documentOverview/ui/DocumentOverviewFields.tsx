import { CheckboxField } from "@shared/ui/fields/CheckboxField";
import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
import { TextField } from "@shared/ui/fields/TextField";

export const DocumentOverviewFields = () => (
  <div className="flex flex-col gap-5">
    <div className="bg-secondary-light p-5 flex flex-col gap-5">
      <TextField name="title" label="Заголовок" />

      <div className="max-w-100">
        <FileUploaderField
          name="file"
          label="Зразок документа"
          alt="Зразок документа"
          accept=".doc,.docx,.odt,.pdf,.rtf"
          isDocument
        />
      </div>
    </div>

    <div className="bg-secondary-light p-5">
      <CheckboxField name="isActive" label="Вiдображати зразок документа" />
    </div>
  </div>
);
