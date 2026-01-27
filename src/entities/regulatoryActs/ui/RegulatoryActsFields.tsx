import { useFieldArray, useFormContext } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import TrashIcon from "@public/assets/icons/trash.svg";
import { Button } from "@shared/ui/base/Button";
import { TextField } from "@shared/ui/fields/TextField";

export const RegulatoryActsFields = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "regulatoryActs",
  });

  const addLink = () => {
    append({
      title: "",
      link: "",
      id: uuidv4(),
    });
  };

  const removeLink = (index: number) => {
    remove(index);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        {fields.map(({ id }, idx) => (
          <div
            key={id}
            className="grid lg:grid-cols-[1fr_1fr_auto] items-center gap-5"
          >
            <TextField
              name={`regulatoryActs[${idx}].title`}
              label="Назва посилання"
            />
            <TextField name={`regulatoryActs[${idx}].link`} label="Посилання" />

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
