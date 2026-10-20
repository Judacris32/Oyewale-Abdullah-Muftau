import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, PenLine, Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SkillsExpertise } from "@/components/sections/SkillsExpertise";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { certifications, education, journey, memberships, principles } from "@/data/content";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Oyewale Muftau is a Manchester-based data analyst and data scientist with a foundation in electrical and power systems engineering, specialising in data analysis, machine learning and predictive modelling.",
  alternates: { canonical: "/about" },
};

const kindIcon = { work: Briefcase, education: GraduationCap, award: Award, community: Users, writing: PenLine };
const kindLabel = { work: "Work", education: "Education", award: "Award", community: "Community", writing: "Press" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="About me"
        title={
          <>
            Turning complex data into clear, <em>reliable answers.</em>
          </>
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        actions={
          <>
            <Button href="/work" variant="gold">
              View my work
            </Button>
            <Button href="/contact" variant="outline" icon="none">
              Get in touch
            </Button>
          </>
        }
      />

      {/* ------------------------------ Profile ------------------------------ */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          <Reveal>
            <Image
              src="/images/portrait-standing.jpg"
              alt="Oyewale Abdullah Muftau smiling, hands clasped, against a warm ochre wall"
              width={854}
              height={1280}
              priority
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 420px, 92vw"
              className="mb-10 aspect-[4/4.6] w-full max-w-[420px] rounded-[24px] object-cover object-[50%_22%] shadow-soft"
            />
            <p className="eyebrow mb-4">Profile</p>
            <h2 className="heading font-serif text-[34px] font-[560] leading-[1.08] tracking-[-0.02em] lg:text-[44px]">
              From power systems to <em>predictive models.</em>
            </h2>
            <dl className="mt-8 grid gap-3 border-t border-line pt-6 text-[15px]">
              {[
                ["Current role", "Data Scientist, 10Alytics"],
                ["Based in", site.city],
                ["Education", "MEng, University of Salford"],
                ["Focus", "Analysis, machine learning, BI"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="font-bold">{k}</dt>
                  <dd className="text-right text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.06} className="prose-body text-justified max-w-[68ch] text-[16.5px] leading-[1.75] text-ink-soft sm:text-[18px] sm:leading-[1.8]">
            <p>
              <span className="float-left mr-3 mt-1 font-serif text-[72px] font-semibold leading-[0.8] text-gold-text">I</span>am a results-driven data professional with a strong foundation in electrical engineering. My work spans data analysis, machine learning and predictive modelling, and I use Python, SQL, Excel, Tableau, Power BI and Google Data Studio to clean complex datasets, design dashboards and build data-driven solutions that improve operations and support better decisions.
            </p>
            <p>
              My career began on the engineering side. As an engineering intern at the Transmission Company of Nigeria&apos;s 330/132kV substation in Osogbo, I recorded hourly energy consumption and monitored load and frequency, my first experience of how much depends on accurate data. I went on to hold roles in solar installation, technical support and industrial maintenance, including work on PLC and SCADA automation systems at West Africa Thread Company.
            </p>
            <p>
              At Pilot Science, as Technical Business Analyst and Electrical Engineer, data moved to the centre of my work. I built a Python and Excel reporting template that increased reporting efficiency by 30%, improved data quality by 25%, and applied machine learning to predict energy consumption at telecom data centres, improving energy use efficiency by 15%. I also led a team of more than 70 engineers, using performance data to raise technical support efficiency by 20%.
            </p>
            <p>
              In 2024 I completed a Master of Engineering in Mechatronics, Robotics and Automation at the University of Salford. I now work as a Data Scientist with 10Alytics, and I continue to apply data analysis to building operations at Oldham Council. Since 2023 I have mentored emerging analysts through the Full Stackers Mentorship Programme, and my work has been recognised with national analytics awards in 2024 and 2025.
            </p>
            <p className="font-serif text-[22px] font-medium italic leading-snug text-ink">
              My approach is consistent: understand the operational reality behind the numbers, apply rigorous analysis, and communicate the findings clearly enough to support confident decisions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Journey ------------------------------ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Career journey"
            title={
              <>
                A decade of engineering, <em>a career in data.</em>
              </>
            }
            aside={<p>Each role added something to how I work with data today: an understanding of the equipment, the operation and the people who rely on the numbers.</p>}
          />
          <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => {
              const KindIcon = kindIcon[j.kind];
              const card = (
                <div
                  className={cn(
                    "flex h-full flex-col gap-3 rounded-[20px] border p-6 transition-all duration-300",
                    j.kind === "award" ? "border-gold/40 bg-gold-soft" : "border-line bg-cream",
                    j.href && "hover:-translate-y-1 hover:shadow-soft",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[34px] font-semibold leading-none text-gold-text">{j.year}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[12px] font-bold text-ink-soft">
                      <KindIcon aria-hidden className="h-3.5 w-3.5" />
                      {kindLabel[j.kind]}
                    </span>
                  </div>
                  <h3 className="font-serif text-[19px] font-semibold leading-snug">{j.title}</h3>
                  <p className="text-[14px] font-semibold text-ink-muted">{j.org}</p>
                  <p className="text-[15px] leading-relaxed text-ink-soft">{j.body}</p>
                  {j.href ? (
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-bold text-green-accent">
                      Find out more <ArrowRight aria-hidden className="h-3.5 w-3.5" />
                    </span>
                  ) : null}
                </div>
              );
              return (
                <Reveal as="li" key={`${j.year}-${j.title}`} delay={(i % 4) * 0.05}>
                  {j.href ? (
                    <Link href={j.href} className="block h-full">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ------------------------------ Principles ------------------------------ */}
      <section className="on-dark bg-green py-24 text-cream lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="How I work"
            title={
              <>
                Four principles behind <em>every project.</em>
              </>
            }
          />
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} as="article" className="flex gap-6 rounded-[20px] border border-cream/12 bg-cream/[0.04] p-7 lg:p-8">
                <span className="font-serif text-[44px] font-semibold leading-none text-gold-light">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-[23px] font-semibold">{p.title}</h3>
                  <p className="mt-2.5 text-[16px] leading-relaxed text-cream/75">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ Skills ------------------------------ */}
      <SkillsExpertise className="bg-beige" />

      {/* ------------------------------ Education & certs ------------------------------ */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="container grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">Education</p>
            <h2 className="heading font-serif text-[32px] font-[560] leading-[1.1] tracking-[-0.02em] lg:text-[40px]">
              Degrees and <em>qualifications.</em>
            </h2>
            <ul className="mt-10 border-t border-line">
              {education.map((e) => (
                <li key={e.title} className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 border-b border-line py-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-soft text-gold-text">
                    <GraduationCap aria-hidden className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-[20px] font-semibold leading-snug">{e.title}</h3>
                    <p className="mt-1 text-[15px] text-ink-muted">
                      {e.org} · {e.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow mb-4">Certifications</p>
            <h2 className="heading font-serif text-[32px] font-[560] leading-[1.1] tracking-[-0.02em] lg:text-[40px]">
              Training and <em>memberships.</em>
            </h2>
            <ul className="mt-10 border-t border-line">
              {certifications.map((c) => (
                <li key={c.title} className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 border-b border-line py-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-green-soft text-green-accent">
                    <BookOpen aria-hidden className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[16.5px] font-bold leading-snug">{c.title}</h3>
                    <p className="mt-0.5 text-[14.5px] text-ink-muted">{c.org}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="mr-1 text-[14px] font-bold text-ink-muted">Professional memberships:</span>
              {memberships.map((m) => (
                <span key={m} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13.5px] font-bold">
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Beyond work ------------------------------ */}
      <section className="bg-sand py-24 lg:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal>
            <Image
              src="/images/portrait-white.jpg"
              alt="Oyewale in a white shirt, hand under his chin"
              width={854}
              height={1280}
              sizes="(min-width: 1024px) 460px, 92vw"
              className="aspect-[4/4.2] w-full rounded-[24px] object-cover object-[50%_15%]"
            />
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-6">
            <p className="eyebrow">Interests</p>
            <h2 className="heading font-serif text-[32px] font-[560] leading-[1.1] tracking-[-0.02em] lg:text-[44px]">
              Where data meets <em>infrastructure.</em>
            </h2>
            <p className="text-[17.5px] leading-[1.75] text-ink-soft">
              My professional interests sit where data and physical systems meet: smart grids, renewable energy, sustainable infrastructure and the use of IoT in energy management. I am particularly interested in how machine learning and artificial intelligence can make these systems more efficient and resilient.
            </p>
            <p className="text-[17.5px] leading-[1.75] text-ink-soft">
              I am equally committed to developing others. Mentoring emerging analysts, and seeing them move into their first roles in technology, is one of the most rewarding parts of my work.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Smart grids", "Renewable energy", "IoT in energy management", "Artificial intelligence", "Financial inclusion", "Mentoring"].map((t) => (
                <span key={t} className="rounded-full bg-white px-4 py-2 text-[14px] font-semibold">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/#mentorship" variant="green" size="md">
                My mentoring
              </Button>
              <Button href="/press" variant="outline" size="md">
                Press coverage
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
