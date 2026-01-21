import { getHero } from "@entity/hero";
import MouseIcon from "@public/assets/icons/mouse.svg";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";
import { FeedbackModal } from "@widgets/FeedbackModal";

export const HeroSection = async () => {
  const hero = await getHero();

  return (
    <>
      <MainSection className="bg-[url(/assets/images/hero_bg.jpg)] bg-fixed bg-cover w-full h-screen relative">
        <Container className="flex h-full">
          <div className="flex flex-col justify-center gap-10">
            <h2 className="text-secondary-lighter">{hero.subtitle}</h2>

            <h1 className="text-secondary-light">{hero.title}</h1>

            <FeedbackModal />

            <Link
              href="#about"
              className="w-fit absolute bottom-10 left-2/4 ml-[-7px]"
              startAdornment={
                <MouseIcon className="w-15 h-auto fill-secondary-light hover:fill-secondary-main duration-200" />
              }
            />
          </div>
        </Container>
      </MainSection>
    </>
  );
};
