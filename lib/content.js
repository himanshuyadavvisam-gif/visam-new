// Real content, pulled directly from the live visamsolutions.com (rendered
// via headless Chromium, since the site is a client-rendered SPA and the
// copy isn't in the static HTML). Verbatim where practical; lightly
// restructured to fit this site's sections.

export const brand = {
  name: "Visam Solutions",
  short: "Visam",
  location: "Jodhpur, Rajasthan",
  tagline: "Jodhpur's award-winning digital agency",
  description:
    "Award-winning digital agency in Jodhpur, Rajasthan. Expert branding, logo design, website development, e-commerce & digital marketing for businesses across India and worldwide.",
  email: "mukul.visam@gmail.com",
  phone: "+91 70737 85326",
  address: "IStart Nest, Vikramaditya Nagar, Surya Colony, Jodhpur, Rajasthan 342011",
  hours: "Monday – Saturday, 10:00 AM – 7:00 PM IST",
  founder: {
    name: "Mukul Yadav",
    title: "Founder & CEO, Visam Solutions",
    quote:
      "When I founded Visam Solutions in 2017, my vision was simple: help businesses in Rajasthan and across India build brands that truly stand out — not just with beautiful design, but with strategic thinking that drives real growth.",
    bio: "Mukul leads Visam Solutions with a hands-on approach to every client relationship — proudly based in Jodhpur, serving businesses across India and worldwide since 2017.",
    image: "/team/mukul-yadav.png",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  eyebrow: "Digital Agency — Jodhpur, India",
  lines: ["Transform Your", "Business", "Digitally"],
  sub: "Jodhpur's award-winning digital agency — branding, web development & marketing for businesses across Rajasthan, India and worldwide.",
  cta: { label: "Start Your Project", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/work" },
  visualCaptions: ["Brand Identity", "Web Development", "E-commerce"],
};

// The 6 core services (matches the live site's sitemap slugs). Descriptions
// and feature bullets are copied from the live /services page.
export const services = [
  {
    id: "brand-identity",
    index: "01",
    title: "Brand Identity",
    short: "Logo design, visual systems, and brand language.",
    description:
      "Transform your business into a memorable brand with comprehensive identity design and strategic positioning that resonates with your target audience in Rajasthan and beyond.",
    tags: ["Brand Strategy & Positioning", "Logo Design", "Brand Guidelines"],
    image: "/services/brand-identity.png",
  },
  {
    id: "web-development",
    index: "02",
    title: "Web Development",
    short: "Fast, modern websites built to convert.",
    description:
      "Lightning-fast websites built with React, WordPress, or PHP. Fully responsive and SEO-optimized.",
    tags: ["React / Next.js", "WordPress", "PHP Custom"],
    image: "/services/website-development.png",
  },
  {
    id: "ecommerce",
    index: "03",
    title: "E-commerce",
    short: "Storefronts engineered to sell.",
    description:
      "High-converting Shopify and WooCommerce stores with payment gateway and inventory management.",
    tags: ["Shopify", "WooCommerce", "Payment Gateway"],
    image: "/services/ecommerce.png",
  },
  {
    id: "packaging-design",
    index: "04",
    title: "Packaging Design",
    short: "Physical design for digital-first brands.",
    description:
      "Eye-catching packaging solutions that protect your products and captivate customers. From traditional Rajasthani crafts to modern retail products, we design packaging that sells.",
    tags: ["Custom Box & Container Design", "Label & Sticker Design", "3D Mockups"],
    image: "/services/packaging.png",
  },
  {
    id: "digital-marketing",
    index: "05",
    title: "Digital Marketing",
    short: "Campaigns that compound.",
    description:
      "Data-driven marketing strategies that grow your business in Jodhpur's competitive market. From social media campaigns to Google Ads, we help you reach the right customers at the right time.",
    tags: ["Social Media Marketing", "Google Ads & Local SEO", "Content Strategy"],
    image: "/services/digital-marketing.png",
  },
  {
    id: "business-consulting",
    index: "06",
    title: "Business Consulting",
    short: "Strategy for digital-first growth.",
    description:
      "Expert guidance for startups and businesses on branding, marketing, and growth strategies.",
    tags: ["Business Strategy", "Brand Workshops", "Growth Consulting"],
    image: "/services/business-consulting.png",
  },
];

// Real portfolio projects and images, pulled from the live /portfolio page.
export const projects = [
  {
    id: "rivaayaa",
    index: "01",
    title: "Rivaayaa",
    category: "Branding",
    year: "2026",
    description:
      "Premium Retail Storefront Signage — designed and executed a premium illuminated storefront signage for Rivaayaa, creating a luxury retail presence with elegant black acrylic channel letters and warm halo lighting for maximum visibility.",
    image: "/portfolio/rivaayaa-premium-retail-storefront-signage.png",
  },
  {
    id: "ferrowoods",
    index: "02",
    title: "Ferrowoods",
    category: "Brand Identity & Web Design",
    year: "2023",
    description:
      "A comprehensive brand transformation for Shree Art & Furniture, rebranded as Ferrowoods, positioning them as a premium furniture and interior design destination — full identity redesign, website development, and product catalog design.",
    image: "/portfolio/ferrowoods-premium-furniture-brand-evolution.png",
  },
  {
    id: "bliss-of-earth",
    index: "03",
    title: "Bliss of Earth",
    category: "Packaging Design & E-Commerce",
    year: "2024",
    description:
      "Branding and e-commerce for a fast-growing natural wellness brand specializing in organic, cold-pressed oils and superfoods — distinctive packaging for 20+ product variants and a modern e-commerce build.",
    image: "/portfolio/bliss-of-earth-natural-wellness-product-branding.png",
  },
  {
    id: "my-love-marriage",
    index: "04",
    title: "My Love Marriage",
    category: "Logo Design & Brand Strategy",
    year: "2023",
    description:
      "Full-service branding for a leading wedding planning and coordination company — a sophisticated yet warm identity system: logo, color palette, typography, and complete digital presence.",
    image: "/portfolio/my-love-marriage-wedding-planning-brand-identity.png",
  },
  {
    id: "retro-shakes",
    index: "05",
    title: "Retro Shakes by Bhupii",
    category: "Logo Design & Branding",
    year: "2024",
    description:
      "A vibrant rebrand for a popular Jodhpur milkshake café — identity built for Gen-Z and millennial audiences, capturing vintage American diner energy with contemporary appeal.",
    image: "/portfolio/retro-shakes-by-bhupii-nostalgic-milkshake-caf-branding.png",
  },
  {
    id: "natures-saga",
    index: "06",
    title: "Nature's Saga",
    category: "Packaging Design & E-Commerce",
    year: "2024",
    description:
      "Packaging and e-commerce branding for a Jodhpur-based organic skincare brand producing natural aloe vera gel, beetroot powder, and herbal beauty products — premium packaging and Amazon presence optimization.",
    image: "/portfolio/nature-s-saga-organic-skincare-packaging.png",
  },
  {
    id: "ar-jewellers",
    index: "07",
    title: "AR Jewellers",
    category: "Marketing & Advertising",
    year: "2023",
    description:
      "A full brand-launch campaign for a premium jewelry retailer in Jodhpur's Chopasni area — identity design, outdoor advertising, and integrated marketing for a grand opening.",
    image: "/portfolio/ar-jewellers-grand-opening-campaign.png",
  },
];

export const about = {
  eyebrow: "About Visam Solutions",
  heading: "Jodhpur's digital studio.",
  paragraphs: [
    "Visam Solutions is a digital agency built around brand, product and growth — serving clients across India and worldwide since 2017.",
    "From logo design to full-scale web and e-commerce builds, every project is treated as a long-term partnership, not a one-off job.",
  ],
  stats: [
    { value: "250+", label: "Clients" },
    { value: "500+", label: "Projects" },
    { value: "7+", label: "Years" },
  ],
  team: [
    {
      name: "Dheeraj Rankawat",
      role: "Production",
      bio: "Creative visionary with expertise in video production, cinematography, and post-production workflows.",
    },
    {
      name: "Rakesh Parihar",
      role: "Strategist",
      bio: "Strategic thinker and business consultant guiding clients toward measurable brand and growth success.",
    },
    {
      name: "Vinit Lakhara",
      role: "Post Production",
      bio: "Post-production specialist with mastery in color grading, video editing, and motion graphics.",
    },
  ],
};

// The live site's 4-step methodology (from the /about page).
export const process = [
  { index: "01", title: "Discovery", description: "Understanding your business, goals, target audience, and competition." },
  { index: "02", title: "Design", description: "Creating wireframes, mockups, and prototypes in Figma." },
  { index: "03", title: "Development", description: "Building with React, Shopify, WordPress using best practices." },
  { index: "04", title: "Launch & Support", description: "Deployment, testing, training, and ongoing maintenance." },
];

// Real categorized tech stack from the live /services page.
export const technologies = [
  { category: "Frontend", items: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Supabase", "Firebase", "PostgreSQL"] },
  { category: "E-commerce", items: ["Shopify", "WooCommerce", "Stripe"] },
  { category: "CMS", items: ["WordPress", "Contentful", "Sanity"] },
  { category: "DevOps", items: ["Vercel", "Netlify", "GitHub Actions", "Cloudflare"] },
];

// Real "Why Choose Visam" points from the live /services page.
export const whyChoose = [
  { title: "Award-Winning Quality", description: "Awwwards-level design and development standards." },
  { title: "On-Time Delivery", description: "98% of projects delivered before deadline." },
  { title: "Security First", description: "SSL, data encryption, and GDPR compliance." },
  { title: "250+ Happy Clients", description: "Trusted by startups to enterprises." },
  { title: "Lightning Fast", description: "Lighthouse 100/100 performance guarantee." },
  { title: "Lifetime Support", description: "Free maintenance for 6 months post-launch." },
];

// Real client testimonials from the live homepage.
export const testimonials = [
  {
    quote:
      "VISAM transformed our Shopify store. Sales increased by 40% in just 3 months. Their attention to detail is unmatched.",
    name: "Rajesh Kumar",
    title: "CEO at Treza Care",
  },
  {
    quote:
      "Best web development team in Rajasthan. They delivered a beautiful WordPress site ahead of schedule.",
    name: "Priya Sharma",
    title: "Founder at Ayur Wellness",
  },
  {
    quote:
      "Their React expertise is world-class. Built our SaaS platform with clean code and perfect performance.",
    name: "Amit Patel",
    title: "CTO at TechStart",
  },
];

export const cta = {
  heading: "Ready to Transform Your Business?",
  sub: "From Jodhpur to global markets — let's discuss your project and build something that grows your business.",
  action: { label: "Start Your Project Now", href: "/contact" },
};
