"use client";

import { useRef } from "react";

const MAX_TILT_DEG = 10;

// A card that tilts toward the cursor while hovered — local tracking
// (relative to its own bounds), not the whole viewport.
export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${px * MAX_TILT_DEG * 2}deg) rotateX(${
      -py * MAX_TILT_DEG * 2
    }deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
