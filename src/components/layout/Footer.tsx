import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { experience } from "@/data/content";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-[#071A18] text-cream">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
        <div className="flex max-w-sm flex-col gap-5">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/brand/logo.png" alt="" width={44} height={44} />
            <span className="font-serif text-[21px] font-semibold">
              Oyewale <span className="font-normal italic">Muftau</span>
            </span>
          </Link>
          <p className="text-[15.5px] leading-relaxed text-cream/70">
            Data analyst in Manchester. I help teams make sense of operational, energy and financial data, and explain it in plain English.
          </p>
          <p className="text-[14px] font-semibold text-gold-light">{site.availability}</p>
        </div>

        <div>
          <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-cream/50">Explore</h2>
          <ul className="flex flex-col gap-2.5 text-[15px]">
            <li>
              <Link href="/" className="text-cream/85 transition-colors hover:text-gold-light">
                Home
              </Link>
            </li>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/85 transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-cream/85 transition-colors hover:text-gold-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-cream/50">Work experience</h2>
          <ul className="flex flex-col gap-3 text-[15px]">
            {experience.slice(0, 3).map((job) => (
              <li key={job.id}>
                <Link href={`/work#${job.id}`} className="leading-snug text-cream/85 transition-colors hover:text-gold-light">
                  {job.company}
                  <span className="block text-[13.5px] text-cream/50">{job.role}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/work" className="text-[14px] font-semibold text-gold-light hover:text-cream">
                Full work history →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-cream/50">Get in touch</h2>
          <ul className="flex flex-col gap-2.5 text-[15px]">
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-cream/85 transition-colors hover:text-gold-light">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cream/85 transition-colors hover:text-gold-light">
                LinkedIn <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
              </a>
            </li>
            <li className="text-cream/60">{site.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container flex flex-col items-start justify-between gap-4 py-6 text-[13.5px] text-cream/60 sm:flex-row sm:items-center">
          <p>© {year} {site.name}</p>
          <p>
            Designed &amp; built by <span className="font-semibold text-cream/80">@Judacris_Jude</span>
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 font-semibold text-cream transition-colors hover:text-gold-light">
            Back to top <ArrowUp aria-hidden className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
