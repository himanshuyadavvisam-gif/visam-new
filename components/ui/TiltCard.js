"use client";

import { useRef } from "react";

// A card that tilts toward the cursor while hovered — local tracking
// (relative to its own bounds), not the whole viewport. Kept subtle by
// default so it reads as a gentle depth cue, not a gimmick.
export default function TiltCard({ children, className = "", maxTilt = 4, lift = 1.01 }) {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${px * maxTilt * 2}deg) rotateX(${
      -py * maxTilt * 2
    }deg) scale3d(${lift}, ${lift}, ${lift})`;
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
