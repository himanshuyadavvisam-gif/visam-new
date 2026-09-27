import Image from "next/image";

// Next.js shows this automatically while a route segment is loading —
// covers slow-network navigations so the page never just goes blank.
export default function Loading() {
  return (
    <div className="fixed inset-0 z-300 flex items-center justify-center bg-paper">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-line border-t-accent" />
        <Image
          src="/brand/visam-mark.png"
          alt=""
          width={28}
          height={22}
          className="h-6 w-auto animate-pulse"
        />
      </div>
    </div>
  );
}
