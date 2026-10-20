import { CalendarDays, CircleCheck, MapPin } from "lucide-react";
import type { Experience } from "@/data/content";
import { cn } from "@/lib/cn";
import { CountUp } from "@/components/ui/CountUp";

/** One job from the work history: dates on the left, role and highlights on the right. */
export function ExperienceCard({ job, maxHighlights, className }: { job: Experience; maxHighlights?: number; className?: string }) {
  const highlights = maxHighlights ? job.highlights.slice(0, maxHighlights) : job.highlights;

  return (
    <article id={job.id} className={cn("grid gap-6 rounded-[22px] bg-white p-7 sm:p-9 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-10", className)}>
      <div className="flex flex-col gap-2.5 border-b border-line pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
        <p className="inline-flex items-center gap-2 font-serif text-[18px] font-semibold leading-snug text-gold-text">
          <CalendarDays aria-hidden className="h-[18px] w-[18px] shrink-0" />
          {job.period}
        </p>
        {job.location ? (
          <p className="inline-flex items-center gap-2 text-[14.5px] text-ink-muted">
            <MapPin aria-hidden className="h-4 w-4 shrink-0" />
            {job.location}
          </p>
        ) : null}
        {job.current ? <span className="mt-1 self-start rounded-full bg-green-soft px-3 py-1 text-[12.5px] font-bold text-green-accent">Current role</span> : null}
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-serif text-[24px] font-semibold leading-tight lg:text-[27px]">{job.role}</h3>
          <p className="mt-1 text-[16px] font-bold text-ink-soft">{job.company}</p>
        </div>
        <p className="text-[16px] leading-relaxed text-ink-soft">{job.summary}</p>

        {highlights.length ? (
          <ul className="flex flex-col gap-2.5">
            {highlights.map((h) => (
              <li key={h} className="grid grid-cols-[22px_minmax(0,1fr)] gap-2.5 text-[15.5px] leading-relaxed">
                <CircleCheck aria-hidden className="mt-0.5 h-[19px] w-[19px] text-green-accent" strokeWidth={2} />
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        {job.metrics ? (
          <dl className="mt-1 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {job.metrics.map((m) => (
              <div key={m.label} className="rounded-xl bg-cream px-4 py-3">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <CountUp value={m.value} className="block font-serif text-[26px] font-semibold leading-none text-green-accent" />
                  <span className="mt-1.5 block text-[13px] leading-snug text-ink-muted">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="flex flex-wrap gap-2 pt-1">
          {job.tags.map((t) => (
            <span key={t} className="rounded-lg bg-beige px-3 py-1.5 text-[13px] font-semibold text-ink-soft">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
