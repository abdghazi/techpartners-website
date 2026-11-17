import type { Metadata } from "next";
import { ProposalForm } from "@/components/proposal-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a proposal for managed services, outsourcing, security, ERP, or a new build.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-medium tracking-[0.16em] text-teal-deep uppercase">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-navy-deep">
          Request a proposal
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          Tell us what you need run, staffed, secured, or built. A proposal
          starts from that: the problem, the sequence, and what we would leave
          for later.
        </p>
        <a
          href={site.phoneHref}
          className="mt-6 inline-block font-medium text-navy hover:text-teal-deep"
        >
          {site.phone}
        </a>
      </div>
      <ProposalForm />
    </main>
  );
}
