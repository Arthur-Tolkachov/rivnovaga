import { HeroModel } from "@entity/hero";
import { UpdateHeroSectionForm } from "@features/hero";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface HeroPageProps {
  hero: HeroModel;
}

export const HeroPage: React.FC<HeroPageProps> = ({ hero }) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs home={{ title: "Головний екран", href: "/admin/hero" }} />

    <h2 className="text-primary-dark">Налаштування головного екрану</h2>

    <div className="flex flex-col gap-2">
      <UpdateHeroSectionForm initialValues={hero} />
    </div>
  </div>
);
