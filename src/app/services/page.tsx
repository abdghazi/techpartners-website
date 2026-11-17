import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed services, outsourcing, security, ERP, AI, and custom software. Each engagement starts with a written plan.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-medium tracking-[0.16em] text-teal-deep uppercase">
        Services
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-navy-deep sm:text-5xl">
        Run it, protect it, or build it. The work follows the plan.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        We take on managed services, outsourcing, security, ERP, and the
        software and AI systems those operations sit on.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-28 rounded-3xl border border-line bg-paper p-8 shadow-sm"
          >
            <p className="text-xs font-medium tracking-[0.16em] text-teal-deep uppercase">
              0{index + 1} · {service.kicker}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy">
              {service.title}
            </h2>
            <p className="mt-3 text-muted">{service.summary}</p>
            <p className="mt-6 text-sm font-medium text-navy">The problem</p>
            <p className="mt-2 text-sm leading-6 text-muted">{service.problem}</p>
            <p className="mt-6 text-sm font-medium text-navy">What you get</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              {service.deliver.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <Link
        href="/contact"
        className="mt-10 inline-block rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-deep"
      >
        Request a proposal
      </Link>
    </main>
  );
}
