import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mic, Newspaper, PenLine, Quote } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { PressList } from "@/components/sections/PressList";
import { SmeGapChart } from "@/components/charts/Charts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { article, disruptAfrica, press, speakingTopics } from "@/data/content";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Media coverage of data analyst Oyewale Muftau in Blueprint, Independent, PM News, Disrupt Africa and New Telegraph, including national technology awards and expert commentary on data and small business finance.",
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  const counts = [
    { icon: Newspaper, v: press.filter((p) => p.kind === "Feature").length, l: "news features" },
    { icon: Quote, v: press.filter((p) => p.kind === "Quoted").length, l: "expert commentary" },
    { icon: PenLine, v: press.filter((p) => p.kind === "Opinion").length, l: "opinion piece" },
  ];

  return (
    <>
      <PageHero
        align="center"
        eyebrow="Press & media"
        title={
          <>
            Featured in Nigeria&apos;s <em>national press.</em>
          </>
        }
        intro={
          <p>
            My work in data analytics has been reported by leading Nigerian publications, from national technology awards and recognition for mentoring, to expert commentary on how data can widen access to finance for small businesses.
          </p>
        }
        crumbs={[{ label: "Home", href: "/" }, { label: "Press" }]}
        actions={
          <>
            <Button href="#coverage" variant="gold" icon="none">
              View coverage
            </Button>
            <Button href="#article" variant="outline" icon="none">
              Read my opinion piece
            </Button>
          </>
        }
      />

      {/* ------------------------------ Featured in ------------------------------ */}
      <section aria-label="Publications" className="border-y border-line bg-white py-10 lg:py-12">
        <div className="container flex flex-col items-center gap-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-ink-muted">As featured in</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {press.map((p) => (
              <li key={p.outlet} className="font-serif text-[22px] font-semibold leading-none text-ink-soft lg:text-[26px]">
                {p.outlet}
              </li>
            ))}
          </ul>
          <dl className="flex flex-wrap justify-center gap-x-12 gap-y-5 border-t border-line pt-8">
            {counts.map((c) => (
              <div key={c.l} className="flex items-center gap-3">
                <c.icon aria-hidden className="h-5 w-5 text-gold-text" />
                <dt className="sr-only">{c.l}</dt>
                <dd className="flex items-baseline gap-2">
                  <span className="font-serif text-[30px] font-semibold leading-none">{c.v}</span>
                  <span className="text-[14.5px] text-ink-muted">{c.l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------ Coverage ------------------------------ */}
      <section id="coverage" className="scroll-mt-20 bg-cream py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Coverage"
            title={
              <>
                Selected <em>coverage.</em>
              </>
            }
            intro={<p>Each card links to the original article on the publisher&apos;s website.</p>}
          />
          <Reveal>
            <PressList detailed />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Article ------------------------------ */}
      <section id="article" className="scroll-mt-20 bg-white py-24 lg:py-32">
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Opinion · {article.outlet}</p>
            <h2 className="heading font-serif text-[32px] font-[560] leading-[1.1] tracking-[-0.02em] lg:text-[40px]">
              Most small businesses aren&apos;t uncreditworthy. They&apos;re <em>invisible.</em>
            </h2>
            <p className="text-[17px] leading-relaxed text-ink-soft">{article.standfirst}</p>
            <dl className="grid gap-2 border-y border-line py-5 text-[15px]">
              {[
                ["Title", article.title],
                ["Published", `${article.outlet}, ${article.date}`],
                ["Author", "Oyewale Muftau"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[90px_minmax(0,1fr)] gap-3">
                  <dt className="font-bold">{k}</dt>
                  <dd className="text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
            <SmeGapChart compact />
            <Button href={article.href} variant="gold" icon="external" className="self-start">
              Read it on New Telegraph
            </Button>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-3">The argument in brief</p>
              <p className="max-w-[60ch] font-serif text-[24px] font-medium leading-snug lg:text-[28px]">
                A market trader may take hundreds of payments a week but have no audited accounts, so the bank declines. The business can repay. The lender simply cannot see it.
              </p>
            </Reveal>
            <ol className="mt-12 flex flex-col">
              {article.points.map((p, i) => (
                <Reveal as="li" key={p.title} className="grid grid-cols-[56px_minmax(0,1fr)] gap-5 border-t border-line py-8">
                  <span className="font-serif text-[36px] font-semibold leading-none text-gold-text">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-[23px] font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-2.5 max-w-[64ch] text-[17px] leading-[1.75] text-ink-soft">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ------------------------------ Quoted ------------------------------ */}
      <section id="quoted" className="on-dark bg-brown py-24 text-cream lg:py-32">
        <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <p className="eyebrow">Expert contribution</p>
            <h2 className="heading font-serif text-[34px] font-[560] leading-[1.1] tracking-[-0.02em] lg:text-[44px]">
              Quoted by <em>Disrupt Africa.</em>
            </h2>
            <p className="text-[16px] text-cream/70">
              {disruptAfrica.outlet} · {disruptAfrica.date} · by {disruptAfrica.author}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[24px] border border-cream/12 bg-cream/[0.05] p-8 sm:p-10">
            <Quote aria-hidden className="h-9 w-9 text-gold-light" />
            <h3 className="mt-4 font-serif text-[24px] font-semibold leading-snug">{disruptAfrica.title}</h3>
            <p className="mt-4 text-[16.5px] leading-relaxed text-cream/80">{disruptAfrica.summary}</p>
            <a href={disruptAfrica.href} target="_blank" rel="noopener noreferrer" className="link-underline mt-6 inline-flex items-center gap-1.5 text-[15px] font-bold text-gold-light">
              Read on Disrupt Africa <ArrowUpRight aria-hidden className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Media ------------------------------ */}
      <section className="bg-white py-24 lg:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Media enquiries"
            title={
              <>
                Topics I can <em>comment on.</em>
              </>
            }
            intro={
              <p>
                I am available for interviews, expert comment, contributed articles and panel discussions on the following subjects.{" "}
                <Link className="link-underline font-bold text-ink" href="/contact">
                  Get in touch
                </Link>{" "}
                with details of your piece or event.
              </p>
            }
          />
          <Reveal className="flex flex-wrap justify-center gap-3">
            {speakingTopics.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-5 py-3 font-serif text-[18px] font-medium">
                <Mic aria-hidden className="h-4 w-4 text-gold-text" />
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Working on a story about <em>data?</em>
          </>
        }
        body="For interviews, expert comment or speaking requests, send a brief outline of your piece and your deadline. I aim to respond within two working days."
        tone="cream"
      />
    </>
  );
}
