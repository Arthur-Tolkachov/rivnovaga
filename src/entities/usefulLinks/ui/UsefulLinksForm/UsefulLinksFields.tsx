import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import slugify from "slugify";

import { Skeleton } from "@shared/ui/base/Skeleton";
import { TextField } from "@shared/ui/fields/TextField";

import { UsefulLinksBlockFields } from "./UsefulLinksBlockFields";

interface UsefulLinksFieldsProps {
  isFetching?: boolean;
  fields: Record<"id", string>[];
}

export const UsefulLinksFields: React.FC<UsefulLinksFieldsProps> = ({
  isFetching,
  fields,
}) => {
  const { setValue } = useFormContext();

  if (isFetching) {
    return (
      <Skeleton
        className="w-full h-[543px]"
        containerClassName="flex flex-col gap-8"
        count={1}
      />
    );
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => {
    const { value } = event.target;
    const slug = slugify(value);

    setValue(`useful_links[${idx}].key`, slug);
  };

  return (
    <div className="flex flex-col gap-8">
      {fields.map(({ id }, idx) => (
        <div className="flex flex-col gap-5 bg-secondary-light p-5" key={id}>
          <TextField
            name={`useful_links[${idx}].title`}
            label="Заголовок роздiлу"
            onChange={(event) => handleChange(event, idx)}
          />

          <UsefulLinksBlockFields fieldIndex={idx} />
        </div>
      ))}
    </div>
  );
};
