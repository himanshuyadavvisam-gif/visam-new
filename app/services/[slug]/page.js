import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, brand } from "@/lib/content";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/navigation/Footer";
import RevealText from "@/components/ui/RevealText";
import ServiceIcon from "@/components/ui/ServiceIcon";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${brand.name}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.id === slug);
  const next = services[(index + 1) % services.length];

  return (
    <main>
      <section className="relative bg-paper px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
        <Link
          href="/services"
          data-cursor="link"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink"
        >
          ← All Services
        </Link>

        <div className="mt-8 flex items-start justify-between gap-6">
          <RevealText
            as="h1"
            onLoad
            lines={[service.title]}
            className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl"
          />
          <span className="font-display text-xl text-ink-soft md:text-2xl">
            {service.index}
          </span>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
          {service.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-12 flex aspect-21/9 w-full items-center justify-center overflow-hidden rounded-3xl border border-line bg-paper-dim/50">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="100vw"
              className="object-contain p-6 md:p-10"
              priority
            />
          ) : (
            <ServiceIcon id={service.id} className="h-24 w-24 text-ink-soft md:h-32 md:w-32" />
          )}
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <Link
            href={`/services/${next.id}`}
            data-cursor="link"
            className="group flex items-center justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-ink-soft/70">
                Next Service
              </span>
              <div className="mt-1 font-display text-2xl font-semibold text-ink md:text-3xl">
                {next.title}
              </div>
            </div>
            <span className="text-2xl text-ink transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
