import { getAvailableDocumentOverviews } from "@entity/documentOverview";
import { getRegulatoryActs } from "@entity/regulatoryActs";
import { getUsefulMaterials } from "@entity/usefulMaterials";
import EmptyDocPlaceholder from "@public/assets/images/doc_placeholder.jpg";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";
import { Card } from "@shared/ui/composite/Card";

const BREADCRUMBS_CONFIG = [
  {
    key: "information",
    title: "Кориснi матерiали",
  },
];

export const UsefulMaterialsPage = async () => {
  const aboutUsefulMaterials = await getUsefulMaterials();
  const documentOverviews = await getAvailableDocumentOverviews();
  const regulatoryActs = await getRegulatoryActs();

  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">{aboutUsefulMaterials.title}</h1>

          <h3 className="text-primary-dark">{aboutUsefulMaterials.subtitle}</h3>
        </div>

        <div className="sticky grid grid-cols-[3fr_1fr]">
          <div className="flex flex-col gap-10 pr-5">
            <h3 className="text-primary-dark">Зразки документів</h3>

            {!!documentOverviews.length ? (
              <div className="grid grid-cols-3 gap-5">
                {documentOverviews.map((documentOverview) => (
                  <Card
                    key={documentOverview.id}
                    href={documentOverview.file.url}
                    backgroundImageUrl={EmptyDocPlaceholder.src}
                    className="min-h-[350px]"
                  >
                    {documentOverview.title}
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-primary-dark text-xl">
                Наразі жодного зразка документа не додано.
              </div>
            )}
          </div>

          <div className="flex flex-col gap-10 pl-5 border-l-1 border-secondary-main">
            <h3 className="text-primary-dark">Нормативно-правові акти</h3>

            {!!regulatoryActs.length ? (
              <div className="flex flex-col gap-5 px-10">
                {regulatoryActs.map((regulatoryAct) => (
                  <Link
                    key={regulatoryAct.id}
                    className="text-secondary-darker hover:text-secondary-main hover:underline duration-200"
                    href={regulatoryAct.link}
                    target="_blank"
                  >
                    {regulatoryAct.title}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-primary-dark text-xl">
                Наразі жодного акта не додано.
              </div>
            )}
          </div>
        </div>
      </Container>
    </MainSection>
  );
};
