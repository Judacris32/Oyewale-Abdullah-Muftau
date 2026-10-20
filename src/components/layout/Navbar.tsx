"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  // Pages whose hero is dark: until the visitor scrolls, the header uses light text so it stays readable.
  const darkHero = pathname === "/contact";
  const light = darkHero && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-line/70 bg-cream/90 shadow-[0_10px_30px_-24px_rgba(27,31,29,0.5)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav aria-label="Main" className="container flex h-[76px] items-center justify-between gap-6 lg:h-[88px]">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.shortName}, home`}>
          <Image src="/images/brand/logo.png" alt="" width={42} height={42} className="h-[38px] w-[38px] lg:h-[42px] lg:w-[42px]" priority />
          <span className={cn("whitespace-nowrap font-serif text-[19px] font-semibold tracking-[-0.01em] transition-colors lg:text-[20px]", light && "text-cream")}>
            Oyewale <span className="font-normal italic">Muftau</span>
          </span>
        </Link>

        <ul className={cn("hidden items-center gap-7 text-[15px] font-semibold xl:flex", light ? "text-cream/80" : "text-ink-soft")}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative py-2 transition-colors",
                  light ? "hover:text-gold-light" : "hover:text-gold-text",
                  isActive(link.href) && cn(light ? "text-cream" : "text-ink", "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-gold"),
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={cn(
            "hidden h-[46px] items-center gap-2 rounded-full px-[22px] text-[14.5px] font-semibold transition-all hover:-translate-y-0.5 xl:inline-flex",
            light ? "bg-gold text-[#1B1408] hover:bg-gold-light" : "bg-green text-cream hover:bg-green-mid",
          )}
        >
          Let&apos;s work together
          <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={cn("grid h-[46px] w-[46px] place-items-center rounded-full xl:hidden", light ? "bg-cream text-green" : "bg-green text-cream")}
        >
          <Menu aria-hidden className="h-5 w-5" />
        </button>
      </nav>

      {/*
        The menu is rendered on <body>, not inside <header>. Once the page is scrolled the header gets a
        backdrop blur, and in CSS that makes the header the container for any "fixed" child, which would
        squeeze the full-screen menu into the 76px header bar.
      */}
      {mounted
        ? createPortal(
          <AnimatePresence>
            {open ? (
              <motion.div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                className="fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-green text-cream xl:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="container flex h-[76px] items-center justify-between">
                  <Link href="/" className="flex items-center gap-3">
                    <Image src="/images/brand/logo.png" alt="" width={38} height={38} />
                    <span className="font-serif text-[19px] font-semibold">
                      Oyewale <span className="font-normal italic">Muftau</span>
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="grid h-[46px] w-[46px] place-items-center rounded-full border border-cream/30"
                  >
                    <X aria-hidden className="h-5 w-5" />
                  </button>
                </div>
                <motion.ul
                  className="container mt-6 flex flex-col"
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
                >
                  {[{ href: "/", label: "Home" }, ...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
                    <motion.li
                      key={link.href}
                      variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                      className="border-b border-cream/10"
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between py-4 font-serif text-[30px] font-medium",
                          (link.href === "/" ? pathname === "/" : isActive(link.href)) && "italic text-gold-light",
                        )}
                      >
                        {link.label}
                        <ArrowRight aria-hidden className="h-5 w-5 opacity-60" />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="container mt-auto pb-10 pt-8 text-[15px] text-cream/75">
                  <a href={`mailto:${site.email}`} className="link-underline font-semibold text-cream">
                    {site.email}
                  </a>
                  <p className="mt-2">{site.city}</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>,
            document.body,
          )
        : null}
    </header>
  );
}
