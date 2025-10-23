"use client";

import { useEffect, useState } from "react";

export default function HeaderBg() {
  const [opacity, setOpacity] = useState(0);

  const onScroll = () => {
    const scrollY = window.scrollY / 300;

    setOpacity(() => {
      if (scrollY < 1) {
        return scrollY;
      }

      return 1;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="absolute top-0 left-0 right-0 z-1 h-[182px] bg-primary-main"
      style={{
        opacity,
      }}
    ></div>
  );
}
