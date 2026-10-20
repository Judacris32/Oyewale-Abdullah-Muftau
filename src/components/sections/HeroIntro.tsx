"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function HeroIntro() {
  const reduce = useReducedMotion();
  const item = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div className="relative z-10 flex max-w-[590px] flex-col gap-6 lg:pt-6">
      <motion.p className="eyebrow" {...item(0.05)}>
        Data analyst · {site.city}
      </motion.p>
      <motion.h1
        className="heading font-serif text-[44px] font-[560] leading-[1.02] tracking-[-0.025em] sm:text-[56px] lg:text-[70px]"
        {...item(0.12)}
      >
        Data that holds up, from the field to the <em>boardroom.</em>
      </motion.h1>
      <motion.p className="max-w-[520px] text-[17.5px] leading-[1.65] text-ink-soft lg:text-[18.5px]" {...item(0.22)}>
        I help teams make sense of messy operational, energy and financial data, then explain what it means in plain English so they can act on it with confidence.
      </motion.p>
      <motion.div className="mt-1 flex flex-wrap gap-3" {...item(0.3)}>
        <Button href="/work" variant="gold">
          See my work
        </Button>
        <Button href="/contact" variant="outline" icon="none">
          Get in touch
        </Button>
      </motion.div>
      <motion.p className="mt-1 flex items-center gap-2.5 text-[14.5px] font-semibold text-ink-soft" {...item(0.38)}>
        <Medal aria-hidden className="h-5 w-5 text-gold-text" strokeWidth={1.8} />
        Two national analytics awards, 2024 and 2025
      </motion.p>
    </div>
  );
}
