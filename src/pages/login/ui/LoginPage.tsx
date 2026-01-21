import { LoginForm } from "@features/auth";

export const LoginPage = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col gap-5 bg-secondary-light p-8 w-150 max-w-full">
      <h2 className="text-primary-dark">Логiн</h2>

      <div className="flex flex-col gap-2">
        <LoginForm />
      </div>
    </div>
  </div>
);
