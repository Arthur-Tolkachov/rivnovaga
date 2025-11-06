import { Button } from "@shared/ui/base/Button";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { SocialLinks } from "@widgets/SocialLinks";

export const CtaSection = () => {
  return (
    <MainSection className="bg-[url(/assets/images/cta_bg.jpg)] bg-fixed bg-center bg-cover py-30">
      <Container>
        <div className="bg-secondary-dark-80 p-10 flex flex-col gap-10">
          <h2 className="text-secondary-light">
            Потребуєте юридичної допомоги?
          </h2>

          <div className="flex flex-col gap-5">
            <p className="text-secondary-light text-xl">
              Зверніться до нас, щоб отримати кваліфіковану підтримку у
              вирішенні правових питань будь-якої складності. Ми надаємо
              професійні консультації, допомагаємо підготувати необхідні
              документи та забезпечуємо надійний захист ваших прав і інтересів у
              суді.
            </p>

            <p className="text-secondary-light text-xl">
              Наш досвід і відповідальний підхід гарантують ефективне вирішення
              справи у найкоротші терміни.
            </p>

            <p className="text-secondary-light text-xl">
              Не відкладайте захист своїх прав — зв’яжіться з нами вже сьогодні.
            </p>
          </div>

          <div className="flex justify-between items-center border-t-1 border-secondary-light pt-10">
            <Button variant="outlined-light" color="secondary">
              Консультацiя
            </Button>

            <SocialLinks />
          </div>
        </div>
      </Container>
    </MainSection>
  );
};
