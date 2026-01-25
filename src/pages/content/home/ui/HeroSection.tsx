import { getHero, MouseDown } from "@entity/hero";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { FeedbackModal } from "@widgets/FeedbackModal";

export const HeroSection = async () => {
  const hero = await getHero();
  const background =
    "[background-image:-webkit-image-set(url('/assets/images/hero_bg.jpg')_1x,_url('/assets/images/hero_bg.jpg')_2x)]";

  return (
    <>
      <MainSection
        className={`${background} md:bg-fixed bg-center bg-cover w-full h-screen relative`}
      >
        <Container className="flex h-full">
          <div className="flex flex-col justify-center gap-10">
            <h2 className="text-secondary-lighter">{hero.subtitle}</h2>

            <h1 className="text-secondary-light">{hero.title}</h1>

            <FeedbackModal />

            <MouseDown anchor="#about" />
          </div>
        </Container>
      </MainSection>
    </>
  );
};
