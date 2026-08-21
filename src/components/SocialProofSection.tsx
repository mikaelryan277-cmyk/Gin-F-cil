import * as React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { REAL_REVIEWS } from '../data/landingData';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SocialProofSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<any>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REAL_REVIEWS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + REAL_REVIEWS.length) % REAL_REVIEWS.length);
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 4500);
  }, [isPaused, nextSlide]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
    // Briefly pause autoplay after interaction
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#090909] relative border-b border-[#1c1c1c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1214] border border-[#E50920]/40 text-xs font-semibold text-[#E50920] mb-3">
            <Award className="w-4 h-4 text-[#E50920]" />
            <span>QUEM JÁ TESTOU O MÉTODO</span>
          </div>
          <h2 className="font-serif-display font-bold text-2xl sm:text-4xl text-[#F5F5F0]">
            Olha o que os próprios compradores disseram.
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-lg mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Area */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#111111] border border-[#262626]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center p-2"
              >
                <img
                  src={REAL_REVIEWS[currentIndex].replace(/\.(png|jpg|jpeg|webp)$/, 'l.$1')}
                  alt={`Avaliação Real ${currentIndex + 1}`}
                  className="max-w-full max-h-full object-contain pointer-events-none select-none"
                  referrerPolicy="no-referrer"
                  loading={currentIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </motion.div>
            </AnimatePresence>

            {/* Desktop Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all z-20"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all z-20"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators / Dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {REAL_REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex 
                    ? 'w-8 h-2 bg-[#E50920]' 
                    : 'w-2 h-2 bg-[#333333] hover:bg-[#555555]'
                }`}
                aria-label={`Ir para avaliação ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


