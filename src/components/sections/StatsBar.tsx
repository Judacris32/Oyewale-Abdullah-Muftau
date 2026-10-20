import { stats } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function StatsBar() {
  return (
    <div className="container relative z-10 -mt-12 lg:-mt-[92px]">
      <Reveal y={18}>
        <dl className="grid grid-cols-1 gap-y-6 rounded-[22px] bg-green px-6 py-7 text-cream shadow-lift sm:grid-cols-3 sm:gap-6 sm:px-8 lg:px-10 lg:py-9">
          {stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? "border-t border-cream/15 pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0" : ""}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <CountUp value={s.value} className="block font-serif text-[34px] font-medium leading-none text-gold-light lg:text-[46px]" />
                <span className="mt-2.5 block text-[14px] leading-snug text-cream/80 lg:text-[14.5px]">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
