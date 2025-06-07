"use client";
import Image from "next/image";
import React from "react";

export default function Banner() {
  const slide = [
    {
      image: "/banner-1.webp",
      hrefButton: "/vestibular",
    },
    {
      image: "/banner-2.webp",
    },
    {
      image: "/banner-3.webp",
    },
    {
      image: "/banner-4.webp",
    },
  ];
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <div className="relative w-full aspect-video sm:h-[60vh] md:h-[80vh] bg-[#00194A]">
          <Image
            alt="Banner 6"
            fetchPriority="high"
            decoding="async"
            fill
            src={slide[currentSlide].image}
            className="object-contain object-center absolute inset-0 w-full h-full text-transparent"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 z-10">
          <button
            className="bg-white/20 text-white rounded-full p-2 sm:p-2 md:p-3 shadow-md hover:bg-white/30 backdrop-blur-md transition border border-white/30"
            aria-label="Previous"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? slide.length - 1 : prev - 1
              )
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              className="sm:hidden"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              className="hidden sm:block"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
          </button>
          <button
            className="bg-white/20 text-white rounded-full p-2 sm:p-2 md:p-3 shadow-md hover:bg-white/30 backdrop-blur-md transition border border-white/30"
            aria-label="Next"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev < slide.length - 1 ? prev + 1 : 0
              )
            }
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              className="sm:hidden"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              className="hidden sm:block"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
          </button>
        </div>
        {slide[currentSlide].hrefButton && (
          <a
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10 px-12 py-5 text-xl font-bold text-white rounded shadow-lg transition border-4 border-white/70 hidden sm:block bg-[#ff5c33] [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]"
            href="/vestibular"
          >
            Faça agora mesmo
          </a>
        )}
        <div className="absolute bottom-16 w-full flex justify-center space-x-2 z-10 sm:flex">
          {slide.map((_, index) => (
            <span
              className={
                "w-3 h-3 rounded-full" +
                (index !== currentSlide
                  ? " bg-white opacity-50"
                  : " bg-yellow-500")
              }
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
