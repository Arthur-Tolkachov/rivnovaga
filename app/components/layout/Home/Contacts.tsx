import Container from "@/app/components/ui/Container";
import { Map } from "@/app/components/ui/Map/Map";

export default function Contacts() {
  return (
    <section>
      <Container className="flex flex-col gap-10 py-15">
        <h2 className="text-secondary-dark w-fit">Контакти</h2>

        <div className="border-1 border-secondary-main">
          <Map />
        </div>
      </Container>
    </section>
  );
}
