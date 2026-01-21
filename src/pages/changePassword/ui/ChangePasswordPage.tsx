import { ChangePasswordForm } from "@features/auth/";

export const ChangePasswordPage = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col gap-5 bg-secondary-light p-8 w-150 max-w-full">
      <h2 className="text-primary-dark">Змiна паролю</h2>

      <div className="flex flex-col gap-2">
        <ChangePasswordForm />
      </div>
    </div>
  </div>
);
