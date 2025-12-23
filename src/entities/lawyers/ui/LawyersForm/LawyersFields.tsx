import { useFieldArray, useFormContext } from "react-hook-form";

import { LawyerModel } from "@entity/lawyers";
import { TextField } from "@shared/ui/fields/TextField";

import { AddLawyerButton } from "./AddLawyerButton";
import { LawyerField } from "./LawyerField";

export const LawyersFields = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lawyers",
  });

  const onAddLawyer = (value: LawyerModel) => {
    append(value);
  };

  const onRemoveLawyer = (index: number) => {
    remove(index);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-secondary-light p-5 flex flex-col gap-5">
        <div className="max-w-[300px]">
          <TextField name="about_lawyers.title" label="Заголовок" />
        </div>

        <TextField
          name="about_lawyers.subtitle"
          label="Підзаголовок"
          multiline
          rows={8}
        />
      </div>

      <div className="flex flex-col gap-8">
        {fields.map(({ id }, idx) => (
          <LawyerField
            key={id}
            index={idx}
            onRemoveLawyer={fields.length > 1 ? onRemoveLawyer : null}
          />
        ))}
      </div>

      <AddLawyerButton onAddField={onAddLawyer} />
    </div>
  );
};
