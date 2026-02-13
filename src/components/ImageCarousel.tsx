"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { CarouselSlide } from "@/lib/types";
import { urlForImage } from "@/lib/sanity.image";

type ImageCarouselProps = {
  slides: CarouselSlide[];
};

export default function ImageCarousel({ slides }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  if (!slides.length) return null;

  const currentSlide = slides[currentIndex];
  const imageUrl = urlForImage(currentSlide.image)
    ?.width(1400)
    .height(800)
    .url();

  return (
    <section
      className="relative overflow-hidden rounded-3xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Personal image carousel"
      aria-roledescription="carousel"
    >
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={currentSlide.alt}
            fill
            sizes="100vw"
            className="object-cover transition-opacity duration-700"
            priority={currentIndex === 0}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/30" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {(currentSlide.tagline || currentSlide.attribution) && (
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="glass inline-block max-w-2xl rounded-2xl p-6">
              {currentSlide.tagline && (
                <p className="text-lg font-medium italic text-primary md:text-xl">
                  &ldquo;{currentSlide.tagline}&rdquo;
                </p>
              )}
              {currentSlide.attribution && (
                <p className="mt-2 text-sm text-secondary">
                  — {currentSlide.attribution}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-muted bg-black/50 p-2 text-primary backdrop-blur-sm transition hover:border-accent hover:bg-black/70"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-muted bg-black/50 p-2 text-primary backdrop-blur-sm transition hover:border-accent hover:bg-black/70"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2"
            role="tablist"
            aria-label="Carousel navigation"
          >
            {slides.map((slide, index) => (
              <button
                key={slide._key}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === currentIndex
                    ? "bg-accent"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
