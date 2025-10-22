import Container from "@/app/components/ui/Container";

import HeaderBottom from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-1">
      <Container>
        <HeaderTop />

        <HeaderBottom />
      </Container>
    </header>
  );
}
