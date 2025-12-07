import { ChangeEvent } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import slugify from "slugify";

import TrashIcon from "@public/assets/icons/trash.svg";
import { Button } from "@shared/ui/base/Button";
import { TextField } from "@shared/ui/fields/TextField";

interface UsefulLinksBlockFieldsProps {
  fieldIndex: number;
}

export const UsefulLinksBlockFields: React.FC<UsefulLinksBlockFieldsProps> = ({
  fieldIndex,
}) => {
  const { control, setValue } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `useful_links[${fieldIndex}].data`,
  });

  const addLink = () => {
    append({
      label: "",
      link: "",
    });
  };

  const removeLink = (index: number) => {
    remove(index);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldIdx: number,
    sectionIdx: number
  ) => {
    const { value } = event.target;
    const slug = slugify(value);

    setValue(`useful_links[${fieldIdx}].data[${sectionIdx}].key`, slug);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        {fields.map(({ id }, idx) => (
          <div
            key={id}
            className="grid grid-cols-[auto_1fr_1fr_auto] items-center gap-5"
          >
            <span>{idx + 1}.</span>

            <TextField
              name={`useful_links[${fieldIndex}].data[${idx}].label`}
              label="Назва посилання"
              onChange={(event) => handleChange(event, fieldIndex, idx)}
            />
            <TextField
              name={`useful_links[${fieldIndex}].data[${idx}].link`}
              label="Посилання"
            />

            <Button
              variant="rounded"
              color="secondary"
              size="sm"
              onClick={() => removeLink(idx)}
            >
              <TrashIcon className="w-3 h-3 fill-secondary-light" />
            </Button>
          </div>
        ))}
      </div>

      <Button variant="filled" color="secondary" size="sm" onClick={addLink}>
        Додати посилання
      </Button>
    </div>
  );
};
