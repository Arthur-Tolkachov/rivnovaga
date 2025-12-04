import { EditHeroSectionForm } from "@features/admin/EditHeroSection";

export const HeroPage = () => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Налаштування головного екрану</h2>

    <div className="flex flex-col gap-2">
      <EditHeroSectionForm />
    </div>
  </div>
);
