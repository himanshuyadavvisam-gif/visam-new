import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, brand } from "@/lib/content";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/navigation/Footer";
import RevealText from "@/components/ui/RevealText";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${brand.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.id === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <section className="relative bg-paper px-6 pb-16 pt-24 md:px-10 md:pb-32 md:pt-40">
        <Link
          href="/work"
          data-cursor="link"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink"
        >
          ← All Work
        </Link>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
          <RevealText
            as="h1"
            onLoad
            lines={[project.title]}
            className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl"
          />
          <div className="flex flex-col items-start gap-1 text-sm text-ink-soft md:items-end">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
        </div>

        <div className="relative mt-12 h-[50vw] w-full overflow-hidden rounded-3xl bg-paper-dim md:h-[60vh]">
          <div className="absolute inset-0 p-6 md:p-10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
          {project.description}
        </p>

        <div className="mt-16 border-t border-line pt-8">
          <Link
            href={`/work/${next.id}`}
            data-cursor="link"
            className="group flex items-center justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-ink-soft/70">
                Next Project
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
