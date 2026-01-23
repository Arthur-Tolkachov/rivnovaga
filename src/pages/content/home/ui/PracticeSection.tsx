import { getAvailablePractices, PracticeCard } from "@entity/practice";
import ArrowRightIcon from "@public/assets/icons/arrow-right.svg";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";

export const PracticeSection = async () => {
  const availablePractices = await getAvailablePractices();

  if (!availablePractices.length) {
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
          {availablePractices.map((practice, idx) => {
            if (idx > 4) {
              return null;
            }

            return (
              <PracticeCard
                key={practice.id}
                caseNumber={practice.caseNumber}
                city={practice.city}
                proceedingNumber={practice.proceedingNumber}
                title={practice.title}
                fileUrl={practice.file.url}
                href={practice.url}
              />
            );
          })}
        </div>
      </Container>
    </MainSection>
  );
};
