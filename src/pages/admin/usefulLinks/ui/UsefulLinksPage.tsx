import { UsefulLinkModel } from "@entity/usefulLink";
import { CardButton } from "@shared/ui/composite/CardButton";

interface UsefulLinksPageProps {
  usefulLinks: UsefulLinkModel[];
}

export const UsefulLinksPage: React.FC<UsefulLinksPageProps> = ({
  usefulLinks,
}) => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Кориснi посилання</h2>

    <div className="grid grid-cols-4 gap-5">
      <CardButton className="h-[350px]" href="/admin/useful_links/new" />

      {usefulLinks.map(({ id, title, data }) => (
        <a
          key={id}
          href={`/admin/useful_links/${id}`}
          className="h-[350px] overflow-hidden bg-secondary-main opacity-85 hover:opacity-100 duration-200 relative"
        >
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-secondary-main to-transparent" />

          <div className="text-secondary-light p-5 text-xl border-b-1 border-secondary-light">
            {title}:
          </div>

          <ul className="p-5 flex flex-col gap-2">
            {data.map(({ id, label }) => (
              <li key={id} className="text-secondary-light">
                {label}
              </li>
            ))}
          </ul>
        </a>
      ))}
    </div>
  </div>
);
