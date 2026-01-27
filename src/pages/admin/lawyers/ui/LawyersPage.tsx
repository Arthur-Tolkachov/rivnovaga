import { LawyerModel } from "@entity/lawyer";
import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";
import { Card } from "@shared/ui/composite/Card";
import { CardButton } from "@shared/ui/composite/CardButton";

interface LawyersPageProps {
  lawyers: LawyerModel[];
}

export const LawyersPage: React.FC<LawyersPageProps> = ({ lawyers }) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs home={{ title: "Адвокати", href: "/admin/lawyers" }} />

    <h2 className="text-primary-dark">Адвокати</h2>

    <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <CardButton
        className="h-[250px] md:h-[350px]"
        href="/admin/lawyers/new"
      />

      {lawyers.map(({ id, name, surname, patronymic, photo, certificate }) => {
        const backgroundImageUrl = photo?.url || EmptyPlaceholderImg.src;
        const fullName = `${surname} ${name} ${patronymic}`;

        return (
          <Card
            key={id}
            href={`/admin/lawyers/${id}`}
            backgroundImageUrl={backgroundImageUrl}
            className="h-[250px] md:h-[350px]"
          >
            <div>{fullName}</div>

            <ul className="flex flex-col gap-1 mt-5">
              <li className="text-sm">Свідоцтво № {certificate.number}</li>
              <li className="text-sm">Видане {certificate.date}</li>
            </ul>
          </Card>
        );
      })}
    </div>
  </div>
);
