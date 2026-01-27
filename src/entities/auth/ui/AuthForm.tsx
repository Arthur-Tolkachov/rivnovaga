import { Button } from "@shared/ui/base/Button";
import { TextField } from "@shared/ui/fields/TextField";

export interface AuthFormProps {
  isLoading?: boolean;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isLoading }) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-10">
    <div className="flex flex-col gap-5">
      <TextField name="email" label="Електронна пошта" type="email" />
      <TextField name="password" label="Пароль" type="password" />
    </div>

    <div className="flex flex-col md:flex-row gap-5">
      <Button
        color="secondary"
        type="submit"
        className="w-full! md:w-fit!"
        isLoading={isLoading}
        disabled={isLoading}
      >
        Вхiд
      </Button>

      <Button
        href="/"
        className="w-full! md:w-fit!"
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
