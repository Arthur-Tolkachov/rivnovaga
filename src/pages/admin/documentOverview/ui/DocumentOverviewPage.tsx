import { DocumentOverviewModel } from "@entity/documentOverview";
import { CreateDocumentOverviewForm } from "@features/documentOverview/CreateDocumentOverview";
import { UpdateDocumentOverviewForm } from "@features/documentOverview/UpdateDocumentOverview";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface DocumentOverviewPageProps {
  documentOverview?: DocumentOverviewModel;
}

export const DocumentOverviewPage: React.FC<
  DocumentOverviewPageProps
> = async ({ documentOverview }) => {
  const title = documentOverview ? "Редагування документа" : "Новий документ";

  const breadCrumbsConfig = [
    {
      key: documentOverview?.id || "documentOverview",
      title: documentOverview ? documentOverview.title : "Новий документ",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <BreadCrumbs
        home={{ title: "Зразки документiв", href: "/admin/document-overviews" }}
        config={breadCrumbsConfig}
      />

      <h2 className="text-primary-dark">{title}</h2>

      {documentOverview ? (
        <UpdateDocumentOverviewForm initialValues={documentOverview} />
      ) : (
        <CreateDocumentOverviewForm />
      )}
    </div>
  );
};
