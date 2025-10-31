import MouseIcon from "@/public/assets/icons/mouse.svg";

import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Link from "../../ui/Link";
import MainSection from "../../ui/MainSection";

export default function HeroSection() {
  return (
    <MainSection className="bg-[url(/assets/images/hero_bg.jpg)] bg-fixed bg-cover w-full h-screen relative">
      <Container className="flex h-full">
        <div className="flex flex-col justify-center gap-10">
          <h2 className="text-secondary-lighter">Ваш захист — наш пріоритет</h2>

          <h1 className="text-secondary-light">
            Професійна юридична підтримка у всіх сферах права. Захищаємо ваші
            інтереси ефективно та чесно
          </h1>

          <Button color="secondary" variant="outlined-light">
            Консультацiя
          </Button>

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
  );
}
