"use client";

// Self-hosted, downscaled, and turned into a forward+reverse "boomerang" loop
// so it plays continuously with no jump-cut at the restart (the original
// hotlinked 4K/9Mbps clip also ended mid-turn, snapping back to the start
// pose every loop, which read as a stall).
const VIDEO_SRC = "/hero/hero-loop.mp4";

// Full-bleed background video for the hero section only (absolute within the
// section, not fixed to the viewport, so it never shows through the
// sections below).
export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        src={VIDEO_SRC}
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
