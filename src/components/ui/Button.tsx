import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "gold" | "green" | "outline" | "outlineLight" | "cream";
type IconName = "arrow" | "external" | "download" | "none";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-[#1B1408] hover:bg-[#d29c50]",
  green: "bg-green text-cream hover:bg-green-mid",
  outline: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-cream",
  outlineLight: "border-[1.5px] border-cream/40 text-cream hover:border-cream hover:bg-cream/10",
  cream: "bg-cream text-green hover:bg-white",
};

const icons = {
  arrow: ArrowRight,
  external: ArrowUpRight,
  download: Download,
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: IconName;
  size?: "md" | "lg";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Button({ href, children, variant = "gold", icon = "arrow", size = "lg", className, ...rest }: Props) {
  const Icon = icon === "none" ? null : icons[icon];
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const isFile = href.endsWith(".pdf");
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-16px_rgba(15,46,42,0.55)]",
    size === "lg" ? "h-[54px] px-6 text-[15.5px]" : "h-12 px-5 text-[15px]",
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {Icon ? <Icon aria-hidden className="h-[17px] w-[17px]" strokeWidth={2.2} /> : null}
    </>
  );

  if (isExternal || isFile) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && !href.startsWith("mailto:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(isFile ? { download: "" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}
