import { DocumentOverviewModel } from "@entity/documentOverview";
import EmptyDocPlaceholder from "@public/assets/images/doc_placeholder.jpg";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";
import { Card } from "@shared/ui/composite/Card";
import { CardButton } from "@shared/ui/composite/CardButton";

interface DocumentOverviewsProps {
  documentOverviews: DocumentOverviewModel[];
}

export const DocumentOverviewsPage: React.FC<DocumentOverviewsProps> = async ({
  documentOverviews,
}) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs
      home={{ title: "Зразки документiв", href: "/admin/document-overviews" }}
    />

    <h2 className="text-primary-dark">Зразки документiв</h2>

    <div className="grid grid-cols-4 gap-5">
      <CardButton className="h-[350px]" href="/admin/document-overviews/new" />

      {documentOverviews.map(({ id, title }) => (
        <Card
          key={id}
          href={`/admin/document-overviews/${id}`}
          backgroundImageUrl={EmptyDocPlaceholder.src}
          className="h-[350px]"
          variant="secondary"
        >
          {title}
        </Card>
      ))}
    </div>
  </div>
);
