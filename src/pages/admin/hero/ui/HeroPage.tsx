import { HeroModel } from "@entity/hero";
import { UpdateHeroSectionForm } from "@features/UpdateHeroSection";

interface HeroPageProps {
  hero: HeroModel;
}

export const HeroPage: React.FC<HeroPageProps> = ({ hero }) => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Налаштування головного екрану</h2>

    <div className="flex flex-col gap-2">
      <UpdateHeroSectionForm initialValues={hero} />
    </div>
  </div>
);
