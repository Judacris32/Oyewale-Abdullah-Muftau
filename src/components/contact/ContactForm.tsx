"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, CircleCheck, LoaderCircle, LockKeyhole } from "lucide-react";
import { contactSchema, topics } from "@/lib/contact-schema";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";
type FieldName = "name" | "email" | "organisation" | "topic" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

/** Boxed inputs with a clear focus ring; the border turns red when a field has an error. */
const input = (hasError?: boolean) =>
  cn(
    "w-full rounded-xl border bg-white px-4 text-[16px] text-ink shadow-[0_1px_0_rgba(27,31,29,0.04)] transition placeholder:text-[#9A9B93] focus:outline-none focus:ring-4",
    hasError ? "border-clay focus:border-clay focus:ring-clay/15" : "border-line hover:border-ink/25 focus:border-gold focus:ring-gold/20",
  );

export function ContactForm({
  heading = "Send a message",
  intro = "Share a few details and I will get back to you within two working days.",
  className,
}: {
  heading?: string;
  intro?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fe = parsed.error.flatten().fieldErrors;
      const next = Object.fromEntries(Object.entries(fe).map(([k, v]) => [k, v?.[0]])) as FieldErrors;
      setErrors(next);
      // Move focus to the first field with a problem, so keyboard and screen-reader users land on it.
      const first = (["name", "email", "organisation", "topic", "message"] as FieldName[]).find((k) => next[k]);
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setServerError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Your message could not be sent.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Your message could not be sent.");
      setStatus("error");
    }
  }

  return (
    <div className={cn("relative rounded-[24px] bg-cream p-6 text-ink shadow-[0_30px_60px_-40px_rgba(0,0,0,0.55)] sm:p-9", className)}>
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[460px] flex-col items-center justify-center gap-4 text-center"
            role="status"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-green-soft text-green-accent">
              <CircleCheck aria-hidden className="h-8 w-8" strokeWidth={1.8} />
            </span>
            <h3 className="font-serif text-[28px] font-semibold leading-tight">Message sent</h3>
            <p className="max-w-sm text-[16px] leading-relaxed text-ink-soft">Thank you for getting in touch. {site.replyTime}</p>
            <button type="button" onClick={() => setStatus("idle")} className="link-underline mt-2 text-[15px] font-bold text-green-accent">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
            <div className="border-b border-line pb-5">
              <h3 className="font-serif text-[26px] font-semibold leading-tight">{heading}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{intro}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" required error={errors.name} id="cf-name">
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Emma Clarke"
                  className={cn(input(!!errors.name), "h-12")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "cf-name-error" : undefined}
                />
              </Field>
              <Field label="Email address" required error={errors.email} id="cf-email">
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="emma.clarke@company.com"
                  className={cn(input(!!errors.email), "h-12")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "cf-email-error" : undefined}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Company or organisation" hint="Optional" error={errors.organisation} id="cf-organisation">
                <input id="cf-organisation" name="organisation" type="text" autoComplete="organization" placeholder="Northbridge Analytics" className={cn(input(), "h-12")} />
              </Field>
              <Field label="Enquiry type" required error={errors.topic} id="cf-topic">
                <div className="relative">
                  <select
                    id="cf-topic"
                    name="topic"
                    defaultValue=""
                    className={cn(input(!!errors.topic), "h-12 cursor-pointer appearance-none pr-11 invalid:text-[#9A9B93]")}
                    required
                    aria-invalid={!!errors.topic}
                    aria-describedby={errors.topic ? "cf-topic-error" : undefined}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {topics.map((t) => (
                      <option key={t} value={t} className="text-ink">
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink-muted" />
                </div>
              </Field>
            </div>

            <Field label="Message" required error={errors.message} id="cf-message">
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                placeholder="Briefly describe the role or project, the data involved and any timelines."
                className={cn(input(!!errors.message), "min-h-[140px] resize-y py-3.5 leading-relaxed")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "cf-message-error" : undefined}
              />
            </Field>

            {/* Honeypot: hidden from people, filled in by spam bots. */}
            <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
              <label htmlFor="cf-website">Website</label>
              <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {status === "error" ? (
              <p role="alert" className="rounded-xl border border-clay/30 bg-clay-soft px-4 py-3 text-[14.5px] text-clay">
                {serverError} You can also email me directly at{" "}
                <a href={`mailto:${site.email}`} className="font-bold underline">
                  {site.email}
                </a>
                .
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-xl bg-green text-[15.5px] font-bold text-cream transition-all hover:bg-green-mid focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/40 disabled:cursor-wait disabled:opacity-75"
            >
              {status === "sending" ? (
                <>
                  Sending <LoaderCircle aria-hidden className="h-[18px] w-[18px] animate-spin" />
                </>
              ) : (
                <>
                  Send message <ArrowRight aria-hidden className="h-[17px] w-[17px]" />
                </>
              )}
            </button>
            <p className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-muted">
              <LockKeyhole aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Your details are used only to reply to your enquiry. They are never shared or added to a mailing list.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, hint, required, error, id, children }: { label: string; hint?: string; required?: boolean; error?: string; id: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between gap-2 text-[14px] font-semibold text-ink">
        <span>
          {label}
          {required ? (
            <span aria-hidden className="ml-0.5 text-clay">
              *
            </span>
          ) : null}
        </span>
        {hint ? <span className="text-[12.5px] font-medium text-ink-muted">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-[13px] font-semibold text-clay" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
