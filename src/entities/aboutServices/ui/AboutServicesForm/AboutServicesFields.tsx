import { TextField } from "@shared/ui/fields/TextField";

export const AboutServicesFields = () => (
  <div className="bg-secondary-light p-5 flex flex-col gap-5">
    <div className="max-w-[300px]">
      <TextField name="title" label="Заголовок" />
    </div>

    <TextField name="subtitle" label="Підзаголовок" multiline rows={8} />
  </div>
);
