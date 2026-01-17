import { getAbout } from "@entity/about";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";

export const AboutSection = async () => {
  const about = await getAbout();

  return (
    <MainSection className="scroll-mt-[110px]" id="about">
      <Container className="flex flex-col gap-10">
        <div className="flex gap-15">
          {about.map(({ title, description }) => (
            <div className="flex flex-col gap-10 w-2/4" key={title}>
              <h2 className="text-primary-dark w-fit">{title}</h2>

              <div
                className="text-primary-lighter"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
          ))}
        </div>
      </Container>
    </MainSection>
  );
};
