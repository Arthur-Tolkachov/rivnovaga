import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PAGES_WITH_TRANSPARENT_HEADER = ["/"];

export const useHeader = () => {
  const pathname = usePathname();
  const shouldBeTransparent = PAGES_WITH_TRANSPARENT_HEADER.includes(pathname);
  const initialOpacity = shouldBeTransparent ? 0 : 1;

  const [opacity, setOpacity] = useState(initialOpacity);
  const [isLoading, setIsLoading] = useState(true);
  console.log("isLoading :>> ", opacity);

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

  useEffect(() => {
    if (shouldBeTransparent) {
      window.addEventListener("scroll", onScroll);
      setOpacity(calculateOpacity(window.scrollY));
    } else {
      setOpacity(1);
    }

    setIsLoading(false);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [shouldBeTransparent]);

  return {
    shouldBeTransparent,
    opacity,
    isLoading,
  };
};
