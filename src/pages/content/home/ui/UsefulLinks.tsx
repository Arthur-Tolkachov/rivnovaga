import { getAvailableUsefulLinks } from "@entity/usefulLink";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";

export const UsefulLinks = async () => {
  const availableUsefulLinks = await getAvailableUsefulLinks();

  if (!availableUsefulLinks) {
    return null;
  }

  return (
    <MainSection>
      <Container className="flex flex-col gap-5 md:gap-10">
        <h2 className="text-secondary-dark">Кориснi посилання</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {availableUsefulLinks.map(({ id, title, data }) => (
            <div key={id} className="flex flex-col gap-2">
              <h3 className="text-secondary-dark">{title}:</h3>

              <div>
                {data.map((link) => (
                  <Link
                    key={link.id}
                    href={link.link}
                    className="text-secondary-darker hover:text-secondary-main duration-200 w-fit"
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </MainSection>
  );
};
