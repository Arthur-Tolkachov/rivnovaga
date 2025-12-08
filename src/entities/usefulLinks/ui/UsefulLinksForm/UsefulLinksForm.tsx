import { useFieldArray, useFormContext } from "react-hook-form";

import { Button } from "@shared/ui/base/Button";
import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { UsefulLinksFields, UsefulLinksFieldsProps } from "./UsefulLinksFields";

export interface UsefulLinksFormProps
  extends Omit<UsefulLinksFieldsProps, "fields"> {
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
  isFetching,
  isLoading,
  onReset,
  onSubmit,
}) => {
  const { control } = useFormContext();
  const { fields, append } = useFieldArray({ control, name: "useful_links" });

  const onAddBlock = () => {
    append(EMPTY_BLOCK);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <UsefulLinksFields isFetching={isFetching} fields={fields} />

      {!isFetching && (
        <Button color="secondary" size="sm" onClick={onAddBlock}>
          Додати блок
        </Button>
      )}

      <FormActionButtons
        isFetching={isFetching}
        isLoading={isLoading}
        onReset={onReset}
      />
    </form>
  );
};
