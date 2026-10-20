import { brandTools, type BrandTool } from "@/data/brand-icons";
import { expertise } from "@/data/content";
import { Icon, toneClasses } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

function BrandIcon({ tool, className }: { tool: BrandTool; className?: string }) {
  return <svg viewBox={tool.viewBox} className={className} aria-hidden dangerouslySetInnerHTML={{ __html: tool.body }} />;
}

export function SkillsExpertise({ className, id = "skills" }: { className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-24 lg:py-32", className)}>
      <div className="container">
        <SectionHeading
          eyebrow="Skills & expertise"
          title={
            <>
              The tools I use, and <em>what I do with them.</em>
            </>
          }
          aside={<p>Analytical and visualisation tools for the data work, backed by nearly a decade of engineering and automation experience.</p>}
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
          <div>
            <h3 className="mb-5 text-[13px] font-bold uppercase tracking-[0.16em] text-ink-muted">Tools &amp; technologies</h3>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {brandTools.map((t, i) => (
                <Reveal as="li" key={t.id} delay={(i % 3) * 0.05}>
                  <div
                    className="group flex h-full flex-col gap-4 rounded-[18px] border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                    style={{ borderTop: `3px solid ${t.color}` }}
                  >
                    <span className="grid h-[52px] w-[52px] place-items-center rounded-[14px]" style={{ backgroundColor: `${t.color}1A` }}>
                      <BrandIcon tool={t} className={t.id === "siemens" ? "h-9 w-[46px]" : "h-7 w-7"} />
                    </span>
                    <div>
                      <p className="text-[16px] font-bold leading-snug">{t.name}</p>
                      <p className="mt-1 text-[13.5px] leading-snug text-ink-muted">{t.use}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[13px] font-bold uppercase tracking-[0.16em] text-ink-muted">Areas of expertise</h3>
            <ul className="flex flex-col gap-3">
              {expertise.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 0.03}>
                  <div className="flex items-center gap-4 rounded-[16px] border border-line bg-white px-4 py-3.5">
                    <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-xl", toneClasses[e.tone])}>
                      <Icon name={e.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-[15.5px] font-semibold leading-snug">{e.title}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
