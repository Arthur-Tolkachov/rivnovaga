import { RichTextField } from "@shared/ui/fields/RichTextField";
import { TextField } from "@shared/ui/fields/TextField";

export const CtaSectionFields = () => (
  <div className="flex flex-col gap-8 bg-secondary-light p-5">
    <div>
      <TextField name="title" label="Заголовок" />
    </div>

    <RichTextField name="description" label="Опис" />
  </div>
);
