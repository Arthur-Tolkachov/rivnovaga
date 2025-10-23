import Container from "@/app/components/ui/Container";

import HeaderBg from "./HeaderBg";
import HeaderBottom from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";

export function Header() {
  return (
    <>
      <header className="sticky top-[-70px] left-0 right-0 z-1 mb-[-182px]">
        <HeaderBg />

        <Container className="relative z-1">
          <HeaderTop />

          <HeaderBottom />
        </Container>
      </header>
    </>
  );
}
