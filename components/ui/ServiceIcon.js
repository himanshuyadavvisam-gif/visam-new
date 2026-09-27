// Minimal line icons, one per service — no icon library dependency.
const ICONS = {
  "brand-identity": (
    <path d="M12 3l2.4 5.8L20 11l-5.6 2.2L12 19l-2.4-5.8L4 11l5.6-2.2L12 3z" />
  ),
  "web-development": (
    <>
      <rect x="3.5" y="5" width="17" height="13" rx="2" />
      <path d="M3.5 9h17" />
      <path d="M9 14l-2 2 2 2M15 14l2 2-2 2" />
    </>
  ),
  ecommerce: (
    <>
      <path d="M4 8h16l-1.5 10.5a2 2 0 01-2 1.5H7.5a2 2 0 01-2-1.5L4 8z" />
      <path d="M8 8V6a4 4 0 018 0v2" />
    </>
  ),
  "packaging-design": (
    <>
      <path d="M3.5 8l8.5-4 8.5 4-8.5 4-8.5-4z" />
      <path d="M3.5 8v8l8.5 4 8.5-4V8" />
      <path d="M12 12v8" />
    </>
  ),
  "digital-marketing": (
    <>
      <path d="M4 15l5-5 4 4 7-7" />
      <path d="M14 7h6v6" />
    </>
  ),
  "business-consulting": (
    <>
      <rect x="4" y="8" width="16" height="11" rx="2" />
      <path d="M9 8V6a3 3 0 016 0v2" />
    </>
  ),
};

export default function ServiceIcon({ id, className = "h-6 w-6" }) {
  const path = ICONS[id];
  if (!path) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {path}
    </svg>
  );
}
