import { useFieldArray, useFormContext } from "react-hook-form";

import { LawyerModel } from "@entity/lawyers/model";
import { Skeleton } from "@shared/ui/base/Skeleton";
import { TextField } from "@shared/ui/fields/TextField";

import { AddLawyerButton } from "./AddLawyerButton";
import { LawyerField } from "./LawyerField";

interface LawyersFieldsProps {
  isFetching?: boolean;
}

export const LawyersFields: React.FC<LawyersFieldsProps> = ({ isFetching }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lawyers",
  });

  if (isFetching) {
    return (
      <div className="flex flex-col gap-8">
        <Skeleton className="w-full h-[366px]" count={1} />
        <Skeleton className="w-full h-[620px]" count={1} />
      </div>
    );
  }

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
