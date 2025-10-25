import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";

export default function Cta() {
  return (
    <section className="bg-[url(/assets/images/cta_bg.jpg)] bg-cover py-20">
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
          <Button variant="outlined" color="secondary">
            Консультацiя
          </Button>
        </div>
      </Container>
    </section>
  );
}
