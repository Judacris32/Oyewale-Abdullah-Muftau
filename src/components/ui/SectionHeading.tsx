import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Section headings are centred by default. Use "left" inside two-column layouts. */
  align?: "left" | "center";
  size?: "lg" | "md";
  as?: "h1" | "h2";
  className?: string;
  /** Supporting note. Shown beside the title when left-aligned, or underneath when centred. */
  aside?: ReactNode;
};

export function SectionHeading({ eyebrow, title, intro, align = "center", size = "lg", as = "h2", className, aside }: Props) {
  const Tag = as;
  const centred = align === "center";
  const note = intro ?? (centred ? aside : undefined);

  const heading = (
    <div className={cn("flex flex-col gap-[18px]", centred && "mx-auto max-w-3xl items-center text-center")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag
        className={cn(
          "heading font-serif font-[560] tracking-[-0.02em] text-balance",
          size === "lg" ? "text-[34px] leading-[1.08] sm:text-[42px] lg:text-[52px] lg:leading-[1.06]" : "text-[30px] leading-[1.1] sm:text-[36px] lg:text-[42px]",
        )}
      >
        {title}
      </Tag>
      {note ? (
        <div
          className={cn(
            "max-w-2xl text-[17px] leading-relaxed text-ink-muted [.on-dark_&]:text-cream/75",
            centred && "flex flex-col items-center gap-3 [&>*]:!self-center",
          )}
        >
          {note}
        </div>
      ) : null}
    </div>
  );

  if (aside && !centred) {
    return (
      <Reveal className={cn("mb-12 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end lg:gap-10", className)}>
        {heading}
        <div className="flex max-w-sm flex-col gap-3 text-[16px] leading-relaxed text-ink-muted [.on-dark_&]:text-cream/75">{aside}</div>
      </Reveal>
    );
  }

  return <Reveal className={cn("mb-12 lg:mb-14", className)}>{heading}</Reveal>;
}
