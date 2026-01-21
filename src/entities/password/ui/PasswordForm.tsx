"use client";

import { Button } from "@shared/ui/base/Button";
import { TextField } from "@shared/ui/fields/TextField";

export interface PasswordFormProps {
  isLoading?: boolean;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const PasswordForm: React.FC<PasswordFormProps> = ({
  onSubmit,
  isLoading,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-10">
    <div className="flex flex-col gap-5">
      <TextField name="password" label="Пароль" type="password" />
      <TextField
        name="confirmPassword"
        label="Повторити пароль"
        type="password"
      />
    </div>

    <div className="flex gap-5">
      <Button
        color="secondary"
        type="submit"
        isLoading={isLoading}
        disabled={isLoading}
      >
        Зберiгти
      </Button>

      <Button
        href="/"
        color="secondary"
        variant="outlined-dark"
        isLoading={isLoading}
        disabled={isLoading}
      >
        На головну
      </Button>
    </div>
  </form>
);
