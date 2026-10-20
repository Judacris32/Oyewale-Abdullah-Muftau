import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { press } from "@/data/content";
import { cn } from "@/lib/cn";

const kindStyle = {
  Feature: "bg-beige text-ink-soft",
  Quoted: "bg-green-soft text-green-accent",
  Opinion: "bg-gold-soft text-gold-text",
};

/** Press coverage as cards, each with a screenshot of the published article. */
export function PressList({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="flex flex-wrap justify-center gap-6">
      {press.map((p) => (
        <li key={p.href} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_24px_50px_-40px_rgba(40,30,15,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-36px_rgba(40,30,15,0.6)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-cream">
              <Image
                src={p.image}
                alt={`Screenshot of the ${p.outlet} article: ${p.title}`}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 46vw, 92vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="flex items-center justify-between gap-3 text-[14px]">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-bold">{p.outlet}</span>
                  <span className={cn("rounded-full px-2.5 py-0.5 text-[12px] font-bold", kindStyle[p.kind])}>{p.kind}</span>
                </span>
                <time dateTime={p.date} className="shrink-0 text-ink-muted">
                  {p.display}
                </time>
              </p>
              <h3 className="font-serif text-[20px] font-semibold leading-snug transition-colors group-hover:text-gold-text">{p.title}</h3>
              {detailed ? (
                <p className="text-[15px] leading-relaxed text-ink-muted">
                  {p.summary}
                  {p.author ? <span className="text-ink-soft"> Written by {p.author}.</span> : null}
                </p>
              ) : null}
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14.5px] font-bold text-green-accent">
                Read on {p.outlet}
                <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
