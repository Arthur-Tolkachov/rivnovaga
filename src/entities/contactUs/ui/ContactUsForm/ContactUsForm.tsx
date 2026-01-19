"use client";

import { Button } from "@shared/ui/base/Button";
import { PhoneField } from "@shared/ui/fields/PhoneField";
import { TextField } from "@shared/ui/fields/TextField";

export interface ContactUsFormProps {
  isLoading?: boolean;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const ContactUsForm: React.FC<ContactUsFormProps> = ({
  isLoading,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <div className="flex flex-col w-[500px] gap-5">
      <TextField name="name" label="Як до вас звертатись" />

      <PhoneField name="phone" label="Телефон" />
    </div>

    <TextField name="message" label="Повiдомлення" multiline rows={8} />

    <Button
      type="submit"
      color="secondary"
      variant="outlined-dark"
      className="mt-5"
      isLoading={isLoading}
      disabled={isLoading}
    >
      Надiслати
    </Button>
  </form>
);
