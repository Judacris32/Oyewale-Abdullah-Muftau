import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Newspaper, Trophy } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { awards, press } from "@/data/content";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Oyewale Muftau's national awards: the Analytics Innovation Award at the 20th Titans of Tech Awards (2024) and Emerging Data Intelligence & Analytics Professional of the Year at the 11th Nigeria Technology Awards (2025).",
  alternates: { canonical: "/recognition" },
};

export default function RecognitionPage() {
  const [titans, nita] = awards;

  return (
    <>
      <PageHero
        align="center"
        eyebrow="Recognition"
        title={
          <>
            Recognised nationally, <em>two years</em> running.
          </>
        }
        intro={
          <p>
            In 2024 and 2025 my analytics work was recognised by two of Nigeria&apos;s established technology award programmes. Both decisions were made by independent judging panels. Below are the details of each award, with the award and certificate.
          </p>
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Recognition" }]}
        actions={
          <>
            <Button href="#awards" variant="gold" icon="none">
              View the awards
            </Button>
            <Button href="/press" variant="outline" icon="none">
              Press coverage
            </Button>
          </>
        }
        aside={
          <Reveal className="mx-auto grid max-w-[440px] grid-cols-2 gap-5 pt-2">
            <Image src={titans.image} alt={titans.imageAlt} width={405} height={540} className="aspect-[3/4] w-full -rotate-3 rounded-[18px] object-cover shadow-soft" sizes="230px" priority />
            <Image src={nita.image} alt={nita.imageAlt} width={567} height={756} className="mt-10 aspect-[3/4] w-full rotate-2 rounded-[18px] object-cover shadow-soft" sizes="230px" priority />
          </Reveal>
        }
      />

      <section id="awards" className="bg-cream py-24 lg:py-32">
        <div className="container flex flex-col gap-10 lg:gap-14">
          {awards.map((a, i) => (
            <Reveal key={a.id} as="article">
              <div id={a.id} className="grid overflow-hidden rounded-[26px] bg-white lg:grid-cols-2">
                <div className={cn("grid grid-cols-2 gap-4 bg-brown p-6 sm:p-8", i % 2 === 1 && "lg:order-2")}>
                  <figure className="flex flex-col gap-2.5">
                    <Image src={a.image} alt={a.imageAlt} width={600} height={800} sizes="(min-width: 1024px) 300px, 45vw" className="aspect-[3/4] w-full rounded-[14px] object-cover" />
                    <figcaption className="text-[12.5px] font-semibold text-cream/60">The award</figcaption>
                  </figure>
                  <figure className="flex flex-col gap-2.5">
                    <Image src={a.certificate} alt={a.certificateAlt} width={600} height={800} sizes="(min-width: 1024px) 300px, 45vw" className="aspect-[3/4] w-full rounded-[14px] bg-cream object-cover" />
                    <figcaption className="text-[12.5px] font-semibold text-cream/60">The certificate</figcaption>
                  </figure>
                </div>
                <div className="flex flex-col gap-5 p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-gold-text">
                      <Trophy aria-hidden className="h-[22px] w-[22px]" />
                    </span>
                    <span className="font-serif text-[44px] font-semibold leading-none text-gold-text">{a.year}</span>
                  </div>
                  <h2 className="font-serif text-[30px] font-semibold leading-[1.12] tracking-[-0.015em] lg:text-[36px]">{a.title}</h2>
                  <p className="text-[16px] font-bold text-ink-soft">{a.event}</p>
                  <p className="inline-flex items-center gap-2 text-[14.5px] text-ink-muted">
                    <CalendarDays aria-hidden className="h-4 w-4" /> {a.date}
                  </p>
                  <div className="prose-body border-t border-line pt-5 text-[16.5px] leading-[1.75] text-ink-soft">
                    {a.details.map((d) => (
                      <p key={d}>{d}</p>
                    ))}
                  </div>
                  {a.link ? (
                    <a href={a.link.href} target="_blank" rel="noopener noreferrer" className="link-underline mt-auto inline-flex items-center gap-1.5 self-start text-[15px] font-bold text-green-accent">
                      {a.link.label} <ArrowUpRight aria-hidden className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <Link href="/press" className="group flex flex-col items-start justify-between gap-6 rounded-[26px] bg-green p-8 text-cream transition-transform hover:-translate-y-1 sm:p-10 lg:flex-row lg:items-center">
              <div className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cream/10 text-gold-light">
                  <Newspaper aria-hidden className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-serif text-[26px] font-semibold leading-tight">In the press</p>
                  <p className="mt-1 text-[16px] text-cream/75">{press.length} articles in the national press, including coverage of both awards, expert commentary and an opinion piece.</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-[15.5px] font-bold text-gold-light">
                Read the coverage <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
