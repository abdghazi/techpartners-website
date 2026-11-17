import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/content/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Discover the problem, propose a plan, deliver in steps, and stay on after launch.",
};

export default function ApproachPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-medium tracking-[0.16em] text-teal-deep uppercase">
        Approach
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-navy-deep sm:text-5xl">
        A proposal first. The work starts after you agree.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        The same sequence covers a managed service, an outsourced team, a
        security fix, an ERP rollout, or a new build.
      </p>
      <ol className="mt-12 space-y-5">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="grid gap-4 rounded-3xl border border-line bg-paper p-8 shadow-sm sm:grid-cols-[6rem_1fr]"
          >
            <p className="font-display text-4xl font-semibold text-transparent bg-gradient-to-br from-navy to-teal bg-clip-text">
              0{index + 1}
            </p>
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                {step.title}
              </h2>
              <p className="mt-2 max-w-2xl leading-7 text-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link
        href="/contact"
        className="mt-10 inline-block rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-deep"
      >
        Request a proposal
      </Link>
    </main>
  );
}
