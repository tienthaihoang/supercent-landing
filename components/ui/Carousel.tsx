"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface AutoCarouselProps {
  images: string[];
  interval?: number;
}

export default function AutoCarousel({
  images,
  interval = 5000,
}: AutoCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [paused, interval, nextSlide]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image */}
      <div className="rounded-2xl aspect-video">
        <div className="relative w-full h-full bg-white/20 rounded-xl overflow-hidden">
          <Image
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            fill
            className="object-cover transition-all duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="text-white/60! hover:text-white! transition-colors cursor-pointer"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-blue-400 w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-white/60! hover:text-white! transition-colors cursor-pointer"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
