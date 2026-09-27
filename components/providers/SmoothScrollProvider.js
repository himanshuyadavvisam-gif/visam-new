"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

// Returns an onClick handler for in-page anchor links that scrolls via
// Lenis instead of the browser's native (instant) anchor jump — keeps
// Lenis's internal scroll state in sync so ScrollTrigger reveals fire.
export function useSmoothAnchor() {
  const lenis = useLenis();
  return (href) => (e) => {
    if (!lenis) return;
    e.preventDefault();
    lenis.scrollTo(href, { duration: 1.3 });
  };
}

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      document.documentElement.classList.remove("has-lenis");
      return;
    }

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    lenisRef.current = instance;
    setLenis(instance);
    document.documentElement.classList.add("has-lenis");

    instance.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      instance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      instance.destroy();
      document.documentElement.classList.remove("has-lenis");
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
