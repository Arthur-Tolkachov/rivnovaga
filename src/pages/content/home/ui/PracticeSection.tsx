import { getPracticeCategories } from "@entity/practiceCategory";
import ArrowRightIcon from "@public/assets/icons/arrow-right.svg";
import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";
import { Card } from "@shared/ui/composite/Card";

export const PracticeSection = async () => {
  const practiceCategories = await getPracticeCategories();

  if (!practiceCategories.length) {
    return null;
  }

  return (
    <MainSection>
      <Container className="flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col min-[400px]:flex-row gap-2 min-[400px]:gap-0 justify-between">
          <h2 className="text-secondary-dark w-fit">Наша практика</h2>

          <Link
            href="/practice"
            className="text-secondary-darker hover:underline"
            endAdornment={
              <ArrowRightIcon className="w-5 h-5 stroke-secondary-darker" />
            }
            gap={10}
          >
            Переглянути всi
          </Link>
        </div>

        <div className="grid min-[600px]:grid-cols-2 lg:grid-cols-3 gap-5">
          {practiceCategories.map(({ id, cover, title, slug }, idx) => {
            if (idx > 4) {
              return null;
            }

            const backgroundImageUrl = cover?.url || EmptyPlaceholderImg.src;

            return (
              <Card
                key={id}
                backgroundImageUrl={backgroundImageUrl}
                href={`services/${slug}`}
                className="min-h-[350px]"
              >
                {title}
              </Card>
            );
          })}
        </div>
      </Container>
    </MainSection>
  );
};
