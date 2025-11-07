import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800",
  "src/components/Cake-4.jpg",

];

export default function CakeGallery({ images = IMAGES }: { images?: string[] }) {
  const [current, setCurrent] = useState(0);
  const delay = 4000; // 4 seconds
  const autoplayRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Autoplay setup
  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  function startAutoplay() {
    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, delay) as unknown as number;
  }

  function stopAutoplay() {
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }

  function prev() {
    setCurrent((c) => (c - 1 + images.length) % images.length);
    startAutoplay();
  }
  function next() {
    setCurrent((c) => (c + 1) % images.length);
    startAutoplay();
  }
  function goTo(index: number) {
    setCurrent(index);
    startAutoplay();
  }

  // Swipe detection
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function onTouchStart(e: TouchEvent) {
      touchStartX.current = e.touches[0].clientX;
      stopAutoplay();
    }
    function onTouchMove(e: TouchEvent) {
      touchEndX.current = e.touches[0].clientX;
    }
    function onTouchEnd() {
      if (touchStartX.current === null || touchEndX.current === null) return;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        diff > 0 ? next() : prev();
      }
      touchStartX.current = touchEndX.current = null;
      startAutoplay();
    }

    el.addEventListener("touchstart", onTouchStart);
    el.addEventListener("touchmove", onTouchMove);
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="w-full h-full">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 gap-4 w-full h-full">
        {images.map((src, i) => (
          <div key={i} className="relative">
            <img
              src={src}
              alt={`Cake ${i + 1}`}
              className="rounded-2xl object-cover w-full h-full shadow-xl"
            />
          </div>
        ))}
      </div>

      {/* Mobile Slideshow */}
      <div
        ref={containerRef}
        className="relative md:hidden w-full overflow-hidden rounded-xl"
        style={{
          height: "300px", // you can change this to '50vh' or 'auto'
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Cake ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black font-bold w-8 h-8 rounded-full shadow-lg flex items-center justify-center"
        >
          ‹
        </button>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black font-bold w-8 h-8 rounded-full shadow-lg flex items-center justify-center"
        >
          ›
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full ${
                current === i ? "bg-pink-500" : "bg-white/70"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
