import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const tones = { white: "bg-white", cream: "bg-cream" };

/**
 * Closing call to action: a rounded green banner centred inside a light section.
 * Pick the `tone` that contrasts with the section above it.
 */
export function CtaBand({
  title = (
    <>
      Let&apos;s find the <em>signal</em> in your data.
    </>
  ),
  body = "Tell me what you're working on. I read every message myself and reply within two working days.",
  tone = "white",
}: {
  title?: ReactNode;
  body?: string;
  tone?: keyof typeof tones;
}) {
  return (
    <section className={cn("py-20 lg:py-28", tones[tone])}>
      <div className="container">
        <Reveal className="on-dark relative isolate overflow-hidden rounded-[28px] bg-green-deep px-6 py-14 text-center text-cream shadow-lift sm:px-12 lg:px-16 lg:py-20">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-28 -z-10 h-[380px] w-[380px] rounded-full bg-gold/20 blur-[110px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-[320px] w-[320px] rounded-full bg-green-accent/35 blur-[100px]" />
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <p className="eyebrow mb-5">Work with me</p>
            <h2 className="heading font-serif text-[38px] font-[560] leading-[1.04] tracking-[-0.03em] text-balance sm:text-[50px] lg:text-[60px]">{title}</h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-cream/80">{body}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="gold">
                Start a conversation
              </Button>
              <Button href={`mailto:${site.email}`} variant="outlineLight" icon="none">
                Email me
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
