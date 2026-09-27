"use client";

import { useRef, useState } from "react";
import { brand, services } from "@/lib/content";
import RevealText from "@/components/ui/RevealText";

export default function Contact() {
  return (
    <section className="relative bg-paper px-6 pb-16 pt-24 md:px-10 md:pb-36 md:pt-40">
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
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      fireConfetti(formRef.current);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-paper-dim/40 px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-accent";

  if (status === "success") {
    return (
      <div
        ref={formRef}
        className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-line bg-paper-dim/40 p-8 text-center md:p-10"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 12.5L9.5 18L20 6"
              stroke="var(--color-accent)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink md:text-3xl">
          Message sent!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft md:text-base">
          Thanks for reaching out — we&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-ink underline underline-offset-2 hover:text-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-paper-dim/40 p-8 md:p-10"
    >
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

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        data-cursor="cta"
        className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        <span>→</span>
      </button>
    </form>
  );
}

async function fireConfetti(anchorEl) {
  const confetti = (await import("canvas-confetti")).default;
  const rect = anchorEl?.getBoundingClientRect();
  const origin = rect
    ? { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight }
    : { x: 0.5, y: 0.5 };

  const colors = ["#0459dd", "#14120f", "#d9d6d0", "#cfe0fa"];

  const burst = (opts) =>
    confetti({
      particleCount: 60,
      spread: 70,
      startVelocity: 35,
      gravity: 1,
      colors,
      origin,
      ...opts,
    });

  burst({ angle: 60 });
  burst({ angle: 120 });
  setTimeout(() => burst({ particleCount: 40, spread: 100, startVelocity: 25 }), 150);
}
