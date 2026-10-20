import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { awards } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

/** Both awards side by side on desktop, stacked on mobile. */
export function AwardCards() {
  return (
    <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:gap-6">
      {awards.map((a, i) => (
        <Reveal
          key={a.id}
          as="article"
          delay={i * 0.08}
          className="grid grid-cols-[110px_minmax(0,1fr)] gap-5 rounded-[20px] border border-cream/12 bg-cream/[0.05] p-4 text-left sm:grid-cols-[140px_minmax(0,1fr)] sm:p-5"
        >
          <Image src={a.image} alt={a.imageAlt} width={400} height={540} className="h-full min-h-[210px] w-full rounded-[14px] object-cover" sizes="140px" />
          <div className="flex flex-col gap-2.5 py-1">
            <p className="font-serif text-[38px] font-semibold leading-none text-gold-light">{a.year}</p>
            <h3 className="font-serif text-[19px] font-semibold leading-tight lg:text-[21px]">{a.title}</h3>
            <p className="text-[14px] leading-relaxed text-cream/70">
              {a.event}. {a.summary}
            </p>
            <Link href={`/recognition#${a.id}`} className="link-underline mt-auto self-start text-[14px] font-bold text-gold-light">
              More details <ArrowRight aria-hidden className="inline h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
