import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Faq } from "@/components/sections/Faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/content";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Oyewale Muftau about data analyst roles, consulting projects, team training, mentorship or speaking. Based in Manchester, UK.",
  alternates: { canonical: "/contact" },
};

const steps = [
  { title: "You send a note", body: "A few lines about what you're working on is plenty." },
  { title: "I reply within two working days", body: "Usually with a couple of questions, or a time to talk." },
  { title: "We have a short call", body: "We work out whether I'm the right person and what a good result looks like." },
];

export default function ContactPage() {
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-green-deep pb-24 pt-[132px] text-cream lg:pb-32 lg:pt-[160px]">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/20 blur-[130px]" />
        <div className="container relative">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <nav aria-label="Breadcrumb" className="text-[13.5px] font-semibold text-cream/60">
              <Link href="/" className="hover:text-gold-light">
                Home
              </Link>{" "}
              / <span className="text-cream">Contact</span>
            </nav>
            <p className="eyebrow">Get in touch</p>
            <h1 className="heading font-serif text-[44px] font-[560] leading-[1] tracking-[-0.03em] sm:text-[60px] lg:text-[76px]">
              Let&apos;s find the <em>signal</em> in your data.
            </h1>
            <p className="max-w-2xl text-[17.5px] leading-relaxed text-cream/80">
              Whether it&apos;s a role, a project, training for your team or a conversation about data, I&apos;d like to hear about it. {site.availability}
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-12 lg:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <Reveal className="flex flex-col gap-7">
              <h2 className="font-serif text-[24px] font-semibold">Contact details</h2>
              <ul className="flex flex-col gap-4 border-t border-cream/15 pt-7 text-[16px]">
                <li className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-gold-light">
                    <Mail aria-hidden className="h-5 w-5" />
                  </span>
                  <a href={`mailto:${site.email}`} className="link-underline break-all font-serif text-[22px] font-medium sm:text-[26px]">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-gold-light">
                    <ArrowUpRight aria-hidden className="h-5 w-5" />
                  </span>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline font-semibold">
                    Connect on LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-gold-light">
                    <MapPin aria-hidden className="h-5 w-5" />
                  </span>
                  <span className="text-cream/85">{site.location}. Remote or on site.</span>
                </li>
              </ul>

              <div className="flex items-center gap-4 rounded-[18px] bg-cream/[0.06] p-4">
                <Image
                  src="/images/portrait-seated.jpg"
                  alt="Oyewale smiling"
                  width={120}
                  height={120}
                  className="h-14 w-14 rounded-full border-2 border-gold-light object-cover object-[50%_25%]"
                />
                <p className="flex items-center gap-2 text-[15px] text-cream/85">
                  <Clock aria-hidden className="h-4 w-4 shrink-0 text-gold-light" /> {site.replyTime}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="What happens next"
            title={
              <>
                Simple, and <em>no pressure.</em>
              </>
            }
          />
          <ol className="grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06} className="rounded-[20px] bg-white p-7">
                <span className="font-serif text-[48px] font-semibold leading-none text-gold-text">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-[22px] font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-28">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          <Reveal className="flex flex-col gap-5">
            <p className="eyebrow">Questions</p>
            <h2 className="heading font-serif text-[34px] font-[560] leading-[1.08] tracking-[-0.02em] lg:text-[44px]">
              Before you <em>write.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
