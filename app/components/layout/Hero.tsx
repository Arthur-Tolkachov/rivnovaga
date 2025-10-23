import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import Link from "@/app/components/ui/Link";
import MouseIcon from "@/public/assets/icons/mouse.svg";

export function Hero() {
  return (
    <div className="bg-[url(/assets/images/hero_bg.jpg)] bg-cover w-full h-screen relative">
      <Container className="flex h-full">
        <div className="flex flex-col justify-center gap-10">
          <h2 className="text-secondary-main">Ваш захист — наш пріоритет.</h2>

          <h1 className="text-text-light">
            Професійна юридична підтримка у всіх сферах права. Захищаємо ваші
            інтереси ефективно та чесно.
          </h1>

          <Button color="secondary" variant="outlined">
            Консультацiя
          </Button>

          <Link
            href="#"
            className="w-fit absolute bottom-10 left-2/4 ml-[-7px]"
            startAdornment={
              <MouseIcon className="w-15 h-auto fill-text-light hover:fill-secondary-main duration-200" />
            }
          />
        </div>
      </Container>
    </div>
  );
}
