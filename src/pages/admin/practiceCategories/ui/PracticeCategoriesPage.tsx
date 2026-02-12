import { PracticeCategoryModel } from "@entity/practiceCategory";
import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";
import { Card } from "@shared/ui/composite/Card";
import { CardButton } from "@shared/ui/composite/CardButton";

interface PracticeCategoriesProps {
  practiceCategories: PracticeCategoryModel[];
}

export const PracticeCategoriesPage: React.FC<PracticeCategoriesProps> = ({
  practiceCategories,
}) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs
      home={{ title: "Роздiли практики", href: "/admin/practice-categories" }}
    />

    <h2 className="text-primary-dark">Роздiли практики</h2>

    <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <CardButton
        className="h-[250px] md:h-[350px]"
        href="/admin/practice-categories/new"
      />

      {practiceCategories.map(({ id, title, cover, slug }) => {
        const backgroundImageUrl = cover?.url || EmptyPlaceholderImg.src;

        return (
          <Card
            key={id}
            href={`/admin/practice-categories/${slug}`}
            backgroundImageUrl={backgroundImageUrl}
            className="h-[250px] md:h-[350px]"
          >
            {title}
          </Card>
        );
      })}
    </div>
  </div>
);
