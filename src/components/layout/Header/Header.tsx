"use client";

import { STICKY_POSITION } from "@/src/utils/rootLayout.constants";

import HeaderBottom from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";
import { useHeader } from "./useHeader";
import Container from "../../ui/Container";

export function Header() {
  const { isLoading, opacity } = useHeader();

  return (
    <>
      <header
        id="mainHeader"
        className="sticky left-0 right-0 z-2 "
        style={{
          top: STICKY_POSITION,
          opacity: 0,
          transform: "scale(0)",
          transition: "opacity 0.3s ease",

          ...(!isLoading && { opacity: 1, transform: "scale(1)" }),
        }}
      >
        <div
          className="absolute inset-0 bg-primary-main"
          style={{
            opacity,
          }}
        ></div>

        <Container className="relative z-1">
          <HeaderTop />

          <HeaderBottom />
        </Container>
      </header>
    </>
  );
}
