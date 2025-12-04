import { EditAboutSectionForm } from "@features/admin/EditAboutSection";

export const AboutPage = () => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">
      Налаштування секції &quot;Про нас&quot;
    </h2>

    <div className="flex flex-col gap-2">
      <EditAboutSectionForm />
    </div>
  </div>
);
