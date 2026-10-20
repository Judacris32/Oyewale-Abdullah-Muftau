"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/** Splits "−18%" into ["−", "18", "%"], "70+" into ["", "70", "+"], "2" into ["", "2", ""]. */
const PATTERN = /^(\D*?)(\d+(?:\.\d+)?)(.*)$/;

/**
 * A stat number that counts up from zero the first time it scrolls into view.
 * - The server renders the final value, so it is always correct without JavaScript and for search engines.
 * - Years (e.g. "2023") and values without a number are shown as they are.
 * - Visitors who prefer reduced motion see the final value straight away.
 */
export function CountUp({ value, duration = 1.6, className }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(PATTERN);
    if (!match || reduceMotion) return;
    const [, prefix, number, suffix] = match;
    const target = parseFloat(number);
    const isYear = !prefix && !suffix && target >= 1900 && target <= 2100;
    if (isYear) return;

    const decimals = number.includes(".") ? number.split(".")[1].length : 0;
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;

    if (!inView) {
      setDisplay(format(0));
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => setDisplay(format(n)),
    });
    return () => controls.stop();
  }, [value, inView, reduceMotion, duration]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden className="tabular-nums">
        {display}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
