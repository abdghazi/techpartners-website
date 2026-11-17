import Link from "next/link";
import { services, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">{site.name}</p>
          <p className="mt-2 text-sm tracking-[0.14em] text-white/60 uppercase">
            {site.tagline}
          </p>
          <a href={site.phoneHref} className="mt-4 inline-block text-sm hover:text-teal">
            {site.phone}
          </a>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-white/50 uppercase">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/services#${service.id}`} className="hover:text-teal">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-white/50 uppercase">Firm</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/approach" className="hover:text-teal">
                Approach
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal">
                Request a proposal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
