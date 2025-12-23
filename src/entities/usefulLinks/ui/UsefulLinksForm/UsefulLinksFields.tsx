import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import slugify from "slugify";

import { TextField } from "@shared/ui/fields/TextField";

import {
  UsefulLinksBlockFields,
  UsefulLinksBlockFieldsProps,
} from "./UsefulLinksBlockFields";

interface UsefulLinksFieldsProps
  extends Omit<UsefulLinksBlockFieldsProps, "fieldIndex"> {
  fields: Record<"id", string>[];
}

export const UsefulLinksFields: React.FC<UsefulLinksFieldsProps> = ({
  fields,
  onRemoveBlock,
}) => {
  const { setValue } = useFormContext();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => {
    const { value } = event.target;
    const slug = slugify(value);

    setValue(`usefulLinks[${idx}].key`, slug);
  };

  return (
    <div className="flex flex-col gap-8">
      {fields.map(({ id }, idx) => (
        <div className="flex flex-col gap-5 bg-secondary-light p-5" key={id}>
          <TextField
            name={`usefulLinks[${idx}].title`}
            label="Заголовок роздiлу"
            onChange={(event) => handleChange(event, idx)}
          />

          <UsefulLinksBlockFields
            fieldIndex={idx}
            onRemoveBlock={onRemoveBlock}
          />
        </div>
      ))}
    </div>
  );
};
