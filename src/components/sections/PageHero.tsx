import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs: { label: string; href?: string }[];
  actions?: ReactNode;
  image?: { src: string; alt: string; position?: string };
  aside?: ReactNode;
  tone?: "beige" | "sand" | "cream";
  /** "center" stacks everything in the middle and places the aside underneath. */
  align?: "left" | "center";
};

const tones = {
  beige: "bg-beige",
  sand: "bg-sand",
  cream: "bg-cream",
};

export function PageHero({ eyebrow, title, intro, crumbs, actions, image, aside, tone = "beige", align = "left" }: Props) {
  const centred = align === "center";
  return (
    <section className={cn("relative overflow-hidden pb-20 pt-[132px] lg:pb-24 lg:pt-[160px]", tones[tone])}>
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold-light/40 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-48 left-[-10%] h-[420px] w-[420px] rounded-full bg-green-soft blur-[110px]" />

      <div className={cn("container relative grid items-center gap-12", !centred && (image || aside) && "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16")}>
        <div className={cn("flex flex-col gap-6", centred && "mx-auto max-w-4xl items-center text-center")}>
          <nav aria-label="Breadcrumb">
            <ol className={cn("flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold text-ink-muted", centred && "justify-center")}>
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-gold-text">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-ink">
                      {c.label}
                    </span>
                  )}
                  {i < crumbs.length - 1 ? <ChevronRight aria-hidden className="h-3.5 w-3.5" /> : null}
                </li>
              ))}
            </ol>
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading font-serif text-[40px] font-[560] leading-[1.04] tracking-[-0.025em] text-balance sm:text-[52px] lg:text-[64px]">
            {title}
          </h1>
          {intro ? <div className="max-w-2xl text-[17.5px] leading-[1.7] text-ink-soft lg:text-[18.5px]">{intro}</div> : null}
          {actions ? <div className={cn("mt-2 flex flex-wrap gap-3", centred && "justify-center")}>{actions}</div> : null}
        </div>

        {image ? (
          <div className="relative mx-auto w-full max-w-[460px]">
            <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] border-2 border-gold/40" />
            <Image
              src={image.src}
              alt={image.alt}
              width={854}
              height={1280}
              priority
              sizes="(min-width: 1024px) 460px, 90vw"
              className="relative aspect-[4/4.6] w-full rounded-[28px] object-cover shadow-soft"
              style={{ objectPosition: image.position ?? "50% 25%" }}
            />
          </div>
        ) : null}
        {aside && !image ? centred ? <div className="mx-auto mt-2 w-full max-w-4xl">{aside}</div> : aside : null}
      </div>
    </section>
  );
}
