import Image from "next/image";
import { capabilities } from "@/data/content";
import { Icon, toneClasses } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function CapabilityCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {capabilities.map((c, i) => (
        <Reveal
          key={c.title}
          delay={(i % 2) * 0.06}
          as="article"
          className="group flex flex-col overflow-hidden rounded-[22px] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-green">
            <Image
              src={c.photo.src}
              alt={c.photo.alt}
              fill
              quality={85}
              sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <span className={cn("absolute bottom-4 left-4 grid h-[52px] w-[52px] place-items-center rounded-[14px] shadow-lg", toneClasses[c.tone])}>
              <Icon name={c.icon} className="h-[23px] w-[23px]" />
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-3 p-7">
            <h3 className="font-serif text-[24px] font-semibold leading-tight">{c.title}</h3>
            <p className="text-[16px] font-semibold text-gold-text">{c.lead}</p>
            <p className="text-[15.5px] leading-relaxed text-ink-soft">{c.body}</p>
            <p className="mt-auto rounded-xl bg-cream px-4 py-3 text-[14.5px] leading-snug text-ink-soft">
              <span className="font-bold text-ink">For example: </span>
              {c.example}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
