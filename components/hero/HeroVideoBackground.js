"use client";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4";

// Full-bleed background video for the hero section only (absolute within the
// section, not fixed to the viewport, so it never shows through the
// sections below).
export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        src={VIDEO_SRC}
        crossOrigin="anonymous"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="h-full w-full object-cover"
        style={{ objectPosition: "65% 30%" }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-paper via-paper/70 to-transparent md:bg-linear-to-r md:from-paper md:via-paper/60 md:to-transparent" />
    </div>
  );
}
