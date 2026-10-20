import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BriefcaseBusiness, CircleCheck, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { StatsBar } from "@/components/sections/StatsBar";
import { CapabilityCards } from "@/components/sections/CapabilityCards";
import { SkillsExpertise } from "@/components/sections/SkillsExpertise";
import { ExperienceCard } from "@/components/work/ExperienceCard";
import { AwardCards } from "@/components/sections/AwardCards";
import { PressList } from "@/components/sections/PressList";
import { SmeGapChart } from "@/components/charts/Charts";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { article, experience, mentorship, needSignals, services } from "@/data/content";
import { site } from "@/lib/site";
import { CountUp } from "@/components/ui/CountUp";

export default function HomePage() {
  return (
    <>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative overflow-hidden bg-[#EFE2CF] pt-[110px] lg:h-[820px] lg:pt-0">
        <Image src="/images/hero-backdrop.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="container relative flex h-full flex-col lg:flex-row lg:items-center">
          <HeroIntro />
          <div className="relative mx-auto mt-10 w-[92%] max-w-[480px] lg:absolute lg:bottom-[-40px] lg:right-0 lg:mt-0 lg:h-[92%] lg:w-auto lg:max-w-none">
            <Image
              src="/images/hero-portrait.webp"
              alt="Oyewale Abdullah Muftau smiling, hands clasped, wearing a stone-coloured jacket"
              width={730}
              height={1097}
              priority
              sizes="(min-width: 1024px) 520px, 92vw"
              className="h-auto w-full drop-shadow-[-20px_20px_40px_rgba(80,50,20,0.22)] lg:h-full lg:w-auto"
            />
          </div>
        </div>
      </section>

      <StatsBar />

      {/* ------------------------------ About ------------------------------ */}
      <section id="about" className="bg-cream pb-24 pt-20 lg:pb-32 lg:pt-28">
        <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-[72px]">
          <Reveal>
            <Image
              src="/images/portrait-seated.jpg"
              alt="Oyewale seated at a table, hands folded, smiling"
              width={854}
              height={1280}
              sizes="(min-width: 1024px) 480px, 92vw"
              className="aspect-[5/4.6] w-full rounded-[22px] object-cover object-[50%_32%]"
            />
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-[22px]">
            <p className="eyebrow">About me</p>
            <h2 className="heading font-serif text-[34px] font-[560] leading-[1.08] tracking-[-0.02em] sm:text-[42px] lg:text-[52px] lg:leading-[1.06]">
              An engineer&apos;s discipline, an analyst&apos;s <em>curiosity.</em>
            </h2>
            <p className="text-justified text-[16.5px] leading-[1.75] text-ink-soft sm:text-[17.5px]">
              I am a data analyst and data scientist with a foundation in electrical and power systems engineering. I specialise in data analysis, machine learning and predictive modelling, turning complex operational and financial data into insight that decision-makers can act on.
            </p>
            <p className="text-justified text-[16.5px] leading-[1.75] text-ink-soft sm:text-[17.5px]">
              My career began at a 330/132kV substation, recording load and energy data where accuracy is critical. Since then I have used Python, SQL, Excel and Tableau to forecast energy demand, automate reporting and reduce operating costs across the telecoms and energy sectors. Today I work as a Data Scientist with 10Alytics in Manchester, and mentor emerging analysts through the Full Stackers programme.
            </p>
            <div className="flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-[22px] text-[14.5px] font-semibold">
              <span className="inline-flex items-center gap-2.5">
                <MapPin aria-hidden className="h-[19px] w-[19px] text-gold-text" strokeWidth={1.9} />
                {site.city}
              </span>
              <span className="inline-flex items-center gap-2.5">
                <BriefcaseBusiness aria-hidden className="h-[19px] w-[19px] text-gold-text" strokeWidth={1.9} />
                Data Scientist, 10Alytics
              </span>
              <span className="inline-flex items-center gap-2.5">
                <GraduationCap aria-hidden className="h-[19px] w-[19px] text-gold-text" strokeWidth={1.9} />
                MEng, University of Salford
              </span>
            </div>
            <Link href="/about" className="link-underline self-start text-[15px] font-bold text-green-accent">
              Read my full profile
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ What I do ------------------------------ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="What I do"
            title={
              <>
                Four ways I help teams <em>use their data.</em>
              </>
            }
            intro={
              <>
                <p>Each area below comes with a real result from my work, so you can see exactly what it looks like in practice.</p>
                <Link href="/services" className="link-underline mt-3 inline-block text-[14.5px] font-bold text-ink">
                  See all services
                </Link>
              </>
            }
          />
          <CapabilityCards />
        </div>
      </section>

      {/* ------------------------------ Skills ------------------------------ */}
      <SkillsExpertise className="bg-green-soft" />

      {/* ------------------------------ Work ------------------------------ */}
      <section id="work" className="bg-beige py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Work experience"
            title={
              <>
                Where I&apos;ve <em>worked.</em>
              </>
            }
            intro={<p>My most recent roles, with the results I delivered in each.</p>}
          />
          <div className="flex flex-col gap-5">
            {experience.slice(0, 3).map((job, i) => (
              <Reveal key={job.id} delay={i * 0.05}>
                <ExperienceCard job={job} maxHighlights={3} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Button href="/work" variant="green">
              See my full work history
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Recognition ------------------------------ */}
      <section className="on-dark overflow-hidden bg-brown py-24 text-cream lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Recognition"
            title={
              <>
                Recognised nationally, <em>two years</em> running.
              </>
            }
            intro={<p>Both awards were decided by independent judging panels at two of Nigeria&apos;s established technology award programmes.</p>}
          />
          <AwardCards />
          <Reveal className="mt-12 flex justify-center">
            <Link href="/recognition" className="link-underline text-[15px] font-bold text-gold-light">
              See the awards in detail
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Press ------------------------------ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Press"
            title={
              <>
                Featured in the <em>national press.</em>
              </>
            }
            intro={
              <>
                <p>My work has been covered by Blueprint, Independent, PM News, Disrupt Africa and New Telegraph, from national technology awards to expert commentary on data and small business finance.</p>
                <Link href="/press" className="link-underline text-[14.5px] font-bold text-ink">
                  View all press coverage
                </Link>
              </>
            }
          />
          <Reveal>
            <PressList />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Published opinion ------------------------------ */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-[72px]">
          <Reveal className="flex flex-col gap-[22px]">
            <p className="eyebrow">Published opinion · {article.outlet}</p>
            <h2 className="heading font-serif text-[32px] font-[560] leading-[1.1] tracking-[-0.02em] sm:text-[40px] lg:text-[46px]">
              Better data could close a <em>₦12 trillion</em> funding gap.
            </h2>
            <p className="text-[17.5px] leading-[1.75] text-ink-soft">
              In my New Telegraph opinion piece, I argue that many Nigerian small businesses are turned down for finance not because they can&apos;t repay, but because lenders can&apos;t see the evidence. Their payment and cash-flow data could change that.
            </p>
            <p className="text-[14.5px] font-semibold text-ink-muted">
              {article.outlet} · {article.date}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/press#article" variant="gold">
                Read the summary
              </Button>
              <Button href={article.href} variant="outline" icon="external">
                Read on {article.outlet}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SmeGapChart />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Mentorship ------------------------------ */}
      <section id="mentorship" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="container">
          {/* Banner: a rounded green panel centred inside the section, with breathing room on every side. */}
          <div className="on-dark relative isolate overflow-hidden rounded-[28px] bg-green px-6 py-10 text-cream shadow-lift sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-28 -z-10 h-[360px] w-[360px] rounded-full bg-gold/20 blur-[100px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-[300px] w-[300px] rounded-full bg-green-accent/40 blur-[90px]" />
            <div className="grid items-center gap-10 lg:grid-cols-[300px_minmax(0,1fr)_220px] lg:gap-12">
              <Reveal>
                <Image
                  src="/images/portrait-white.jpg"
                  alt="Oyewale in a white shirt, hand under his chin"
                  width={854}
                  height={1280}
                  sizes="(min-width: 1024px) 300px, 92vw"
                  className="aspect-[4/4.4] w-full rounded-[20px] object-cover object-[50%_16%]"
                />
              </Reveal>
              <Reveal delay={0.08} className="flex flex-col gap-5">
                <p className="eyebrow">Mentorship</p>
                <h2 className="heading font-serif text-[30px] font-[560] leading-[1.14] tracking-[-0.015em] lg:text-[40px]">
                  I mentor new analysts through <em>real business problems.</em>
                </h2>
                <p className="text-[16.5px] leading-relaxed text-cream/80">
                  Since 2023 I have mentored new analysts on the {mentorship.programme}, teaching Excel, SQL, Tableau and Power BI with a focus on practical, job-ready skills rather than textbook exercises.
                </p>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-1">
                  {[
                    { v: "15", l: "analysts mentored in 2025" },
                    { v: "2023", l: "mentoring since" },
                  ].map((s) => (
                    <div key={s.l}>
                      <CountUp value={s.v} className="block font-serif text-[34px] font-semibold leading-none text-gold-light" />
                      <p className="mt-1.5 text-[13.5px] text-cream/70">{s.l}</p>
                    </div>
                  ))}
                  <a href={mentorship.url} target="_blank" rel="noopener noreferrer" className="link-underline text-[15px] font-bold text-gold-light">
                    About the programme
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.16} className="hidden -rotate-6 flex-col gap-1.5 lg:flex">
                <p className="font-script text-[52px] leading-[1.05] text-gold-light">Start with the question, not the tool.</p>
                <svg aria-hidden width="190" height="20" viewBox="0 0 190 20" fill="none" stroke="#E8C68C" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M4 12c40-8 90-10 150-4 10 1 20 4 30 2" />
                </svg>
                <p className="mt-1 text-[13px] text-cream/60">My advice to every new analyst</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ Services ------------------------------ */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="container grid items-start gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="How I can help"
              title={
                <>
                  Ways we can <em>work together.</em>
                </>
              }
              className="!mb-6"
            />
            <ul className="flex flex-col">
              {services.map((s, i) => (
                <Reveal as="li" key={s.slug} delay={i * 0.04} className="border-b border-line last:border-0">
                  <Link href={`/services#${s.slug}`} className="group grid grid-cols-[48px_minmax(0,1fr)_20px] items-center gap-[18px] py-[18px]">
                    <span className="grid h-12 w-12 place-items-center rounded-[14px] border border-line bg-white text-green">
                      <Icon name={s.icon} className="h-[21px] w-[21px]" />
                    </span>
                    <span>
                      <span className="block font-serif text-[20px] font-semibold transition-colors group-hover:text-gold-text">{s.title}</span>
                      <span className="text-[15px] text-ink-muted">{s.short}</span>
                    </span>
                    <ArrowRight aria-hidden className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-gold-text" />
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1} as="article" className="flex flex-col gap-5 rounded-[24px] border border-line bg-white p-8 sm:p-9 lg:mt-24">
            <h3 className="font-serif text-[26px] font-semibold leading-tight">You might need me if…</h3>
            <ul className="flex flex-col gap-4">
              {needSignals.map((n) => (
                <li key={n} className="grid grid-cols-[26px_minmax(0,1fr)] gap-3 text-[16px] leading-relaxed">
                  <CircleCheck aria-hidden className="mt-0.5 h-[22px] w-[22px] text-green-accent" strokeWidth={2} />
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-1 flex flex-wrap gap-2.5">
              <Button href="/contact" variant="green" size="md">
                Let&apos;s talk
              </Button>
            </div>
            <p className="flex items-center gap-2 border-t border-line pt-5 text-[14px] text-ink-muted">
              <Award aria-hidden className="h-4 w-4 text-gold-text" /> {site.availability}
            </p>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
