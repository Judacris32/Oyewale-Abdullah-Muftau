import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="on-dark bg-green-deep py-24 text-cream lg:py-32">
      <div className="container grid items-start gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="flex flex-col gap-7">
          <p className="eyebrow">Get in touch</p>
          <h2 className="heading -mt-2 font-serif text-[46px] font-[560] leading-[0.98] tracking-[-0.03em] sm:text-[64px] lg:text-[68px] xl:text-[76px]">
            Let&apos;s find the <em>signal</em> in your data.
          </h2>
          <a href={`mailto:${site.email}`} className="link-underline self-start break-all font-serif text-[24px] font-medium sm:text-[30px] lg:text-[28px]">
            {site.email}
          </a>
          <div className="flex items-center gap-4">
            <Image
              src="/images/portrait-seated.jpg"
              alt="Oyewale smiling"
              width={120}
              height={120}
              className="h-[60px] w-[60px] rounded-full border-2 border-gold-light object-cover object-[50%_25%]"
            />
            <p className="max-w-sm text-[16px] leading-relaxed text-cream/85">{site.replyTime}</p>
          </div>
          <div className="flex flex-wrap gap-6 text-[15px] font-bold">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1 text-gold-light">
              LinkedIn <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
            <span className="font-medium text-cream/75">{site.city}</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
