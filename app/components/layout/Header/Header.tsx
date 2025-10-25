import Container from "@/app/components/ui/Container";

import HeaderBottom from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";
import HeaderVisibility from "./HeaderVisibility";

export function Header() {
  return (
    <>
      <header
        id="mainHeader"
        className="sticky top-[-73px] left-0 right-0 z-2 mb-[-182px]"
        style={{
          opacity: 0,
          transform: "scale(0)",
          transition: "opacity 0.3s ease",
        }}
      >
        <HeaderVisibility />

        <Container className="relative z-1">
          <HeaderTop />

          <HeaderBottom />
        </Container>
      </header>
    </>
  );
}
