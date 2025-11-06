"use client";

import { usePathname } from "next/navigation";

import { HEADER_STICKY_POSITION } from "@shared/config/layout.constants";
import { Container } from "@shared/ui/base/Container";

import HeaderBottomPanel from "./HeaderBottomPanel";
import { HeaderTopPanel } from "./HeaderTopPanel";
import { useHeaderTransparency } from "./useHeaderTransparency";
import { PAGES_WITH_TRANSPARENT_HEADER } from "../config/header.config";

export const Header = () => {
  const pathname = usePathname();
  const shouldBeTransparent = pathname
    ? PAGES_WITH_TRANSPARENT_HEADER.includes(pathname)
    : false;

  const { isLoading, opacity } = useHeaderTransparency({ shouldBeTransparent });

  return (
    <>
      <header
        id="mainHeader"
        className="sticky left-0 right-0 z-2 "
        style={{
          top: HEADER_STICKY_POSITION,
          opacity: 0,
          transform: "scale(0)",

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
          <HeaderTopPanel />

          <HeaderBottomPanel />
        </Container>
      </header>
    </>
  );
};
