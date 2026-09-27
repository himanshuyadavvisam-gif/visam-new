"use client";

import { useState } from "react";
import { brand, services } from "@/lib/content";
import RevealText from "@/components/ui/RevealText";

export default function Contact() {
  return (
    <section className="relative bg-paper px-6 pb-28 pt-32 md:px-10 md:pb-36 md:pt-40">
      <span className="text-xs font-medium uppercase tracking-widest text-accent">
        Get In Touch
      </span>
      <RevealText
        as="h1"
        onLoad
        lines={["Let's Build", "Something Great"]}
        className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl"
      />
      <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
        Based in Jodhpur, Rajasthan — serving clients across India and worldwide. Share
        your project and we&apos;ll respond within 24 hours.
      </p>

      <div className="mt-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="space-y-8">
          <InfoCard label="Our Office">
            {brand.address}
          </InfoCard>
          <InfoCard label="Email Us">
            <a href={`mailto:${brand.email}`} className="hover:text-accent">
              {brand.email}
            </a>
            <div className="mt-1 text-sm text-ink-soft">We reply within 24 hours</div>
          </InfoCard>
          <InfoCard label="Call Us">
            <a href={`tel:${brand.phone}`} className="hover:text-accent">
              {brand.phone}
            </a>
            <div className="mt-1 text-sm text-ink-soft">Mon – Sat, 10 AM – 7 PM</div>
          </InfoCard>
          <InfoCard label="Working Hours">{brand.hours}</InfoCard>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function InfoCard({ label, children }) {
  return (
    <div className="border-t border-line pt-6">
      <span className="text-xs uppercase tracking-widest text-ink-soft/70">{label}</span>
      <div className="mt-2 text-lg font-medium text-ink">{children}</div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-paper-dim/40 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-paper-dim/40 p-8 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <input
          required
          placeholder="Your Name *"
          value={form.name}
          onChange={update("name")}
          className={inputClass}
        />
        <input
          required
          type="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={update("email")}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={update("phone")}
          className={inputClass}
        />
        <select
          required
          value={form.service}
          onChange={update("service")}
          className={`${inputClass} ${form.service ? "text-ink" : "text-ink-soft/60"}`}
        >
          <option value="">Service Interested In *</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <textarea
        required
        placeholder="Project Details *"
        rows={5}
        value={form.message}
        onChange={update("message")}
        className={`${inputClass} mt-5`}
      />

      <button
        type="submit"
        data-cursor="cta"
        className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
      >
        {sent ? "Opening your email app…" : "Send Message"}
        <span>→</span>
      </button>
    </form>
  );
}
