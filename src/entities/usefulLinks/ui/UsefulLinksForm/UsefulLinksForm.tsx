"use client";

import { useFieldArray, useFormContext } from "react-hook-form";

import { Button } from "@shared/ui/base/Button";
import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { UsefulLinksFields } from "./UsefulLinksFields";

export interface UsefulLinksFormProps {
  isLoading?: boolean;
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

const EMPTY_BLOCK = {
  title: "",
  key: "",
  data: [
    {
      key: "",
      label: "",
      link: "",
    },
  ],
};

export const UsefulLinksForm: React.FC<UsefulLinksFormProps> = ({
  isLoading,
  onReset,
  onSubmit,
}) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "usefulLinks",
  });

  const onAddBlock = () => {
    append(EMPTY_BLOCK);
  };

  const onRemoveBlock = (index: number) => {
    remove(index);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <UsefulLinksFields fields={fields} onRemoveBlock={onRemoveBlock} />

      <Button color="secondary" size="sm" onClick={onAddBlock}>
        Додати блок
      </Button>

      <FormActionButtons isLoading={isLoading} onReset={onReset} />
    </form>
  );
};
