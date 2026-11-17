import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TechPartners is an IT consultancy for managed services, outsourcing, security, ERP, and AI.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium tracking-[0.16em] text-teal uppercase">
            About
          </p>
          <h1 className="mt-3 font-display text-5xl font-semibold">{site.name}</h1>
          <p className="mt-3 text-sm tracking-[0.18em] text-white/70 uppercase">
            {site.tagline}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl space-y-4 text-lg leading-8 text-muted">
          <p>
            We are an IT consultancy. Clients ask us to run systems, take on
            delivery they cannot staff, close security gaps, put an ERP in
            place, and build the software and AI around that work.
          </p>
          <p>
            A written plan comes first, so the engagement has a scope, an
            order, and a clear stop. Then we build or run that plan with you.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-10 inline-block rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-deep"
        >
          Request a proposal
        </Link>
      </section>
    </main>
  );
}
