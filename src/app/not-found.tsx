import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-beige pb-28 pt-[160px] lg:pt-[200px]">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold-light/40 blur-[120px]" />
      <div className="container relative flex max-w-3xl flex-col items-start gap-6">
        <p className="eyebrow">Error 404</p>
        <h1 className="heading font-serif text-[46px] font-[560] leading-[1.02] tracking-[-0.025em] sm:text-[64px]">
          This page is an <em>outlier.</em>
        </h1>
        <p className="text-[18px] leading-relaxed text-ink-soft">
          I checked twice, and it isn&apos;t here. The link may be old, or the address may have a typo. Here are a few places that do exist.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/" variant="gold">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" icon="none">
            Contact me
          </Button>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-semibold">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
