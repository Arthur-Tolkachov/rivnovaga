import { useLayoutEffect, useState } from "react";

import { useMobile } from "@shared/lib/useMobile";

interface UseHeaderTransparencyProps {
  shouldBeTransparent: boolean;
}

export const useHeaderTransparency = ({
  shouldBeTransparent,
}: UseHeaderTransparencyProps) => {
  const isMobile = useMobile();
  const initialOpacity = shouldBeTransparent ? 0 : 1;

  const [opacity, setOpacity] = useState(initialOpacity);
  const [isLoading, setIsLoading] = useState(true);

  const calculateOpacity = (scrollValue: number) => {
    const opacityValue = scrollValue / 300;

    if (opacityValue < 1) {
      return opacityValue;
    }

    return 1;
  };

  const onScroll = () => {
    const scrollY = window.scrollY;

    setOpacity(() => {
      return calculateOpacity(scrollY);
    });
  };

  useLayoutEffect(() => {
    if (isMobile) {
      return;
    }

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
  }, [shouldBeTransparent, setOpacity, isMobile]);

  return {
    shouldBeTransparent,
    opacity,
    isLoading,
  };
};
