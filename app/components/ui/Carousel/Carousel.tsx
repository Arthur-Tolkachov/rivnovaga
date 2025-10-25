"use client";

import useEmblaCarousel from "embla-carousel-react";

export const Carousel = () => {
  const [carouselRef] = useEmblaCarousel();

  return (
    <div ref={carouselRef}>
      <div className="flex overflow-hidden">
        <div className="min-w-0 grow-0 shrink-0 basis-[100%]">1</div>
        <div className="min-w-0 grow-0 shrink-0 basis-[100%]">2</div>
        <div className="min-w-0 grow-0 shrink-0 basis-[100%]">3</div>
      </div>
    </div>
  );
};
