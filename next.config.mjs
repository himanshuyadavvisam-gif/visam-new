/** @type {import('next').NextConfig} */
const nextConfig = {
  // GSAP/ScrollTrigger mutate the DOM imperatively; React Strict Mode's
  // dev-only double-invoke of effects can leave duplicate/stale triggers
  // behind (visible as sections that never reveal on scroll in `next dev`).
  // Production builds don't double-invoke, but this keeps dev behavior
  // consistent with it.
  reactStrictMode: false,
};

export default nextConfig;
