import { maxLength } from "@shared/lib/transforms";
import { TextField } from "@shared/ui/fields/TextField";

export const HeroSectionFields = () => (
  <div className="grid lg:grid-cols-[1fr_2fr] gap-5">
    <div className="bg-secondary-light p-5">
      <TextField
        name="subtitle"
        label="Підзаголовок"
        transform={(value) => maxLength(value, 50)}
        multiline
      />
    </div>

    <div className="bg-secondary-light p-5">
      <TextField
        name="title"
        label="Заголовок"
        rows={5}
        transform={(value) => maxLength(value, 200)}
        multiline
      />
    </div>
  </div>
);
