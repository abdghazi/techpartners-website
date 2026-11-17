import Link from "next/link";
import { services, site, steps } from "@/content/site";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,177,0.45),transparent_52%),radial-gradient(ellipse_at_bottom_left,rgba(11,61,134,0.9),transparent_48%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="relative mx-auto grid max-w-6xl items-end gap-12 px-6 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28">
          <div>
            <p className="text-sm font-medium tracking-[0.22em] text-teal uppercase">
              IT consultancy
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl leading-[1.05] font-semibold sm:text-6xl">
              We write the plan. Then we build it.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              {site.name} runs, builds, and protects the systems a company
              depends on. Managed services, outsourcing, security, ERP, and AI.
              The work starts with a plan you can approve.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-center text-sm font-medium text-navy-deep hover:bg-teal hover:text-white"
              >
                Request a proposal
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/30 px-5 py-2.5 text-center text-sm font-medium text-white hover:border-white"
              >
                See the services
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-xs tracking-[0.2em] text-white/60 uppercase">
              {site.tagline}
            </p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.id} className="flex items-center justify-between gap-4 border-t border-white/15 pt-3 text-sm">
                  <span>{service.title}</span>
                  <span className="text-teal">{service.kicker}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl font-semibold text-navy-deep sm:text-4xl">
            What we take on
          </h2>
          <p className="max-w-md text-sm leading-6 text-muted">
            Operations, protection, and new systems. AI is one of the builds,
            not the whole firm.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group rounded-3xl bg-gradient-to-br from-navy/30 to-teal/50 p-px transition hover:-translate-y-1"
            >
              <span className="flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-paper p-6 shadow-sm">
                <span className="flex items-center justify-between text-xs font-medium tracking-[0.16em] text-teal-deep uppercase">
                  {service.kicker}
                  <span className="text-navy/40">0{index + 1}</span>
                </span>
                <span className="mt-4 font-display text-xl font-semibold text-navy">
                  {service.title}
                </span>
                <span className="mt-3 text-sm leading-6 text-muted">
                  {service.summary}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-semibold">
            How an engagement runs
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-white/15 pt-5">
                <p className="font-display text-3xl font-semibold text-teal">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{step.text}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/approach"
            className="mt-10 inline-block text-sm font-medium text-teal hover:text-white"
          >
            Read the approach
          </Link>
        </div>
      </section>
    </main>
  );
}
