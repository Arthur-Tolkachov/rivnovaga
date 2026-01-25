"use client";

import { useMobile } from "@shared/lib/useMobile";
import { Button } from "@shared/ui/base/Button";
import { PhoneField } from "@shared/ui/fields/PhoneField";
import { TextField } from "@shared/ui/fields/TextField";

export interface ContactUsFormProps {
  isLoading?: boolean;
  onCancel?: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const ContactUsForm: React.FC<ContactUsFormProps> = ({
  isLoading,
  onCancel,
  onSubmit,
}) => {
  const isMobile = useMobile();

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 overflow-hidden">
      <div className="flex flex-col w-full max-w-[500px] gap-5">
        <TextField name="name" label="Як до вас звертатись" />

        <PhoneField name="phone" label="Телефон" />
      </div>

      <TextField
        name="message"
        label="Повiдомлення"
        multiline
        rows={isMobile ? 5 : 8}
      />

      <div className="flex gap-5 md:mt-5">
        <Button
          type="submit"
          color="secondary"
          variant="outlined-dark"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Надiслати
        </Button>

        {onCancel && (
          <Button
            color="secondary"
            onClick={onCancel}
            variant="outlined-dark"
            isLoading={isLoading}
            disabled={isLoading}
          >
            Назад
          </Button>
        )}
      </div>
    </form>
  );
};
