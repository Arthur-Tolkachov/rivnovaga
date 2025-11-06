import { useLayoutEffect, useState } from "react";

interface UseHeaderTransparencyProps {
  shouldBeTransparent: boolean;
}

export const useHeaderTransparency = ({
  shouldBeTransparent,
}: UseHeaderTransparencyProps) => {
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
  }, [shouldBeTransparent, setOpacity]);

  return {
    shouldBeTransparent,
    opacity,
    isLoading,
  };
};
