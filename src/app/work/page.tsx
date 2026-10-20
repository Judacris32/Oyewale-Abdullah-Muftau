import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceCard } from "@/components/work/ExperienceCard";
import { experience } from "@/data/content";
import { CountUp } from "@/components/ui/CountUp";

export const metadata: Metadata = {
  title: "Work experience",
  description:
    "Work experience of Oyewale Muftau: data scientist at 10Alytics, technical business analyst at Pilot Science, and earlier engineering roles across manufacturing, public infrastructure and power transmission.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="Work experience"
        title={
          <>
            Where I&apos;ve worked and <em>what I delivered.</em>
          </>
        }
        intro={
          <p>
            My career started in electrical engineering and moved steadily towards data. Below is every role in order, newest first, with what I was responsible for and the results that came out of it.
          </p>
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Work" }]}
        aside={
          <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "15%", l: "energy efficiency from ML forecasts" },
              { v: "30%", l: "more efficient project reporting" },
              { v: "−18%", l: "operating costs after consolidation" },
              { v: "70+", l: "engineers led on project delivery" },
            ].map((s) => (
              <div key={s.l} className="rounded-[18px] bg-white/80 p-5 text-center shadow-[0_18px_40px_-30px_rgba(40,30,15,0.5)] backdrop-blur">
                <CountUp value={s.v} className="block font-serif text-[36px] font-semibold leading-none text-green-accent" />
                <p className="mt-2 text-[14px] leading-snug text-ink-muted">{s.l}</p>
              </div>
            ))}
          </Reveal>
        }
      />

      <section className="bg-cream py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Career history"
            title={
              <>
                Every role, <em>newest first.</em>
              </>
            }
            intro={<p>{experience.length} roles across data science, business analysis and engineering.</p>}
          />
          <div className="mx-auto flex max-w-5xl flex-col gap-6 lg:gap-8">
            {experience.map((job) => (
              <Reveal key={job.id}>
                <ExperienceCard job={job} className="scroll-mt-28" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Want to see the <em>dashboards?</em>
          </>
        }
        body="Much of my analysis sits inside organisations and can't be shared publicly. I'm happy to walk you through examples of my Power BI, Tableau and Python work on a call, using sample data."
      />
    </>
  );
}
