// components/HeroCarousel.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "New Autumn Collection",
    subtitle: "Refined silhouettes, bold elegance.",
    cta: "Shop Now",
  },
  {
    image: "/images/slide2.jpg",
    title: "Timeless Luxury",
    subtitle: "Where craftsmanship meets innovation.",
    cta: "Discover",
  },
  {
    image: "/images/slide3.jpg",
    title: "Signature Styles",
    subtitle: "Designed for the modern aesthete.",
    cta: "Explore",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-serif mb-3 tracking-wide"
            >
              {slides[index].title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg mb-6"
            >
              {slides[index].subtitle}
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="border border-white text-white px-8 py-3 uppercase tracking-wide hover:bg-white hover:text-black transition"
            >
              {slides[index].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 hover:opacity-80"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 hover:opacity-80"
      >
        <ChevronRight size={36} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 flex gap-3 justify-center w-full">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 cursor-pointer transition-all ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}