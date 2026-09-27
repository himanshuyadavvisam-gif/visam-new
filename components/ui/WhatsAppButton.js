"use client";

import { brand } from "@/lib/content";

export default function WhatsAppButton() {
  const digits = brand.phone.replace(/[^\d]/g, "");
  const message = encodeURIComponent(
    "Hi Visam Solutions, I'd like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${digits}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="native-cursor group fixed bottom-6 right-6 z-200 flex h-12 w-12 items-center justify-center md:bottom-8 md:right-8"
    >
      <span className="whatsapp-shadow absolute -bottom-1 left-1/2 h-3 w-8 -translate-x-1/2 rounded-full bg-black blur-sm" />

      <span
        className="whatsapp-float relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-[#3ee878] to-[#159c46] shadow-[0_2px_2px_rgba(255,255,255,0.35)_inset,0_-3px_6px_rgba(0,0,0,0.25)_inset,0_8px_14px_-4px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110"
      >
        <span className="pointer-events-none absolute inset-x-1.5 top-1 h-4 rounded-full bg-white/25 blur-[2px]" />
        <svg
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="white"
          aria-hidden
          className="relative drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
        >
          <path d="M16.004 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.256.59 4.375 1.622 6.214L3.2 28.8l6.79-1.78a12.74 12.74 0 0 0 6.014 1.53h.006c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.55-12.806-12.55zm0 23.11h-.005a10.24 10.24 0 0 1-5.222-1.43l-.374-.222-3.878 1.017 1.035-3.78-.244-.388a10.24 10.24 0 0 1-1.572-5.507c0-5.664 4.61-10.274 10.266-10.274 2.742 0 5.318 1.07 7.256 3.011a10.2 10.2 0 0 1 3.004 7.27c-.002 5.665-4.611 10.303-10.266 10.303zm5.633-7.693c-.309-.155-1.828-.902-2.111-1.005-.283-.104-.489-.155-.695.155-.206.31-.797 1.005-.977 1.212-.18.207-.36.232-.669.078-.309-.155-1.305-.48-2.486-1.529-.919-.818-1.54-1.83-1.72-2.14-.18-.31-.019-.477.136-.63.14-.14.309-.362.463-.543.155-.181.206-.31.309-.517.103-.207.052-.388-.026-.543-.077-.155-.695-1.671-.953-2.288-.251-.602-.507-.52-.695-.53-.18-.008-.386-.01-.592-.01a1.14 1.14 0 0 0-.823.387c-.283.31-1.08 1.056-1.08 2.573s1.105 2.986 1.259 3.193c.155.207 2.176 3.322 5.27 4.658.736.318 1.31.508 1.758.65.738.235 1.41.202 1.941.123.592-.088 1.828-.747 2.086-1.468.258-.72.258-1.337.18-1.468-.077-.13-.283-.207-.592-.362z" />
        </svg>
      </span>
    </a>
  );
}
