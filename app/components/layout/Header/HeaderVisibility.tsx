"use client";

import { useEffect, useState } from "react";

export default function HeaderVisibility() {
  const [opacity, setOpacity] = useState(0);

  const calculateOpacity = (scrollValue: number) => {
    const value = scrollValue / 300;

    if (value < 1) {
      return value;
    }

    return 1;
  };

  const onScroll = () => {
    const scrollY = window.scrollY;

    setOpacity(() => {
      return calculateOpacity(scrollY);
    });
  };

  const showHeader = () => {
    const header = document.getElementById("mainHeader");

    if (header) {
      header.style.opacity = "1";
      header.style.transform = "scale(1)";
    }
  };

  useEffect(() => {
    setOpacity(calculateOpacity(window.scrollY));
    window.addEventListener("scroll", onScroll);
    showHeader();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="absolute top-0 left-0 right-0 h-[182px] z-1 bg-primary-main"
      style={{
        opacity,
      }}
    ></div>
  );
}
