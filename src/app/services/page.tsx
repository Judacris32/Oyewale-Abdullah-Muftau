import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { faqs, process, services } from "@/data/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data cleaning and analysis, predictive modelling and machine learning, Tableau and Power BI dashboards, operations and energy analytics, and team training. How Oyewale Muftau can help, and how working together works.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="Services"
        title={
          <>
            Practical data work, explained <em>in plain English.</em>
          </>
        }
        intro={
          <p>
            A one-off analysis, a dashboard your team will actually use, or training to build confidence with data. Here is what I offer and how we would work together.
          </p>
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        actions={
          <>
            <Button href="/contact" variant="gold">
              Start a conversation
            </Button>
            <Button href="#process" variant="outline" icon="none">
              How it works
            </Button>
          </>
        }
      />

      {/* ------------------------------ Services ------------------------------ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="What I offer"
            title={
              <>
                Five ways I can <em>help.</em>
              </>
            }
            intro={<p>Each can be a one-off project or ongoing support, depending on what your team needs.</p>}
          />

          <div className="mx-auto max-w-5xl border-t border-line">
            {services.map((s) => (
              <Reveal key={s.slug} as="article">
                <div id={s.slug} className="grid scroll-mt-28 gap-6 border-b border-line py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 lg:py-12">
                  <div className="flex items-start gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-green text-gold-light">
                      <Icon name={s.icon} className="h-[22px] w-[22px]" />
                    </span>
                    <div>
                      <h3 className="font-serif text-[24px] font-semibold leading-tight lg:text-[27px]">{s.title}</h3>
                      <p className="mt-2 text-[16px] font-semibold leading-snug text-gold-text">{s.short}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <p className="text-[16.5px] leading-relaxed text-ink-soft">{s.description}</p>
                    <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="grid grid-cols-[20px_minmax(0,1fr)] gap-2 text-[15px] leading-snug">
                          <Check aria-hidden className="mt-0.5 h-4 w-4 text-green-accent" strokeWidth={2.5} />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[14.5px] text-ink-muted">
                      <span className="font-bold text-ink">Tools:</span> {s.tools.join(", ")}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ Process ------------------------------ */}
      <section id="process" className="on-dark scroll-mt-20 bg-green py-24 text-cream lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                Four steps, <em>no surprises.</em>
              </>
            }
            intro={<p>Every project is different, but the shape is the same, so you always know what is happening and why.</p>}
          />
          <ol className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="border-t border-cream/20 pt-6">
                <span className="font-serif text-[40px] font-semibold leading-none text-gold-light">{i + 1}</span>
                <h3 className="mt-4 font-serif text-[21px] font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2.5 text-[15.5px] leading-relaxed text-cream/75">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------ FAQ ------------------------------ */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                Things people <em>usually ask.</em>
              </>
            }
            intro={
              <p>
                Can&apos;t see your question? Email me at{" "}
                <a href={`mailto:${site.email}`} className="link-underline font-bold text-ink">
                  {site.email}
                </a>
                .
              </p>
            }
          />
          <Reveal className="mx-auto max-w-3xl">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
