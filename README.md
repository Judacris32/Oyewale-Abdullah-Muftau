# Oyewale Muftau · Portfolio

Multi-page portfolio for **Oyewale Abdullah Muftau**, data analyst (Manchester, UK).
Designed and built by **JayDev Studio**.

**Stack:** Next.js 15.5 (App Router) · React 19 · TypeScript · Tailwind CSS 3.4 · Framer Motion 12 · Zod · Resend (contact email).
Fonts are self-hosted with `@fontsource` (Fraunces for headings, Hanken Grotesk for body, Allura for script accents), so the build never needs Google Fonts.

---

## Run it locally (PowerShell)

```powershell
cd oyewale-portfolio
npm install
Copy-Item .env.example .env.local   # then fill in the values
npm run dev                         # http://localhost:3000
```

Before pushing:

```powershell
npm run lint
npm run build
```

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, stats bar, about, what I do, skills, recent work experience, awards, press coverage, published opinion (₦ funding-gap chart), mentorship banner, services, contact form |
| `/about` | Full profile (justified text), career journey, how I work, toolkit, education, certifications, interests |
| `/work` | Full work history from LinkedIn (one card per role, newest first) and a dashboards walkthrough offer |
| `/services` | Five services in a simple list, four-step process, FAQ |
| `/recognition` | Titans of Tech 2024 and NiTA 2025, with award and certificate photos |
| `/press` | Press coverage cards with article screenshots, opinion piece summary, Disrupt Africa commentary, media enquiries |
| `/contact` | Contact form, details, what happens next, FAQ |
| `/api/contact` | Server route: validates, rate-limits, blocks spam (honeypot) and emails via Resend |

Old URLs redirect: `/writing` → `/press`, `/mentorship` → home page mentorship section, `/work/<anything>` → `/work`.
Also included: custom 404, `sitemap.xml`, `robots.txt`, web manifest, Open Graph image, favicon set (from the OM logo) and Person JSON-LD.

## Page spacing (left and right margins)

Every section, the header and the footer sit inside one shared `.container` defined in `src/app/globals.css`.
Content is capped at 1200px and always keeps a gap from the screen edges:

| Screen width | Gap on each side |
| --- | --- |
| under 480px (phones) | 24px |
| 480px+ (large phones) | 32px |
| 768px+ (tablets) | 40px |
| 1024px+ (laptops) | 64px |
| 1280px+ (large laptops) | 96px |
| wider than ~1390px | content stays 1200px wide and centred |

To change the spacing, edit the `--gutter` values in `.container` in `globals.css`. Don't add Tailwind's `container` settings back to `tailwind.config.ts`: it is switched off on purpose.

## Editing content

All copy and facts live in two files, so you never need to dig through components:

- `src/lib/site.ts`: name, email, LinkedIn, CV path, site URL, nav links, **availability line**
- `src/data/content.ts`: stats, work experience, journey, capabilities, services, FAQs, awards, press, opinion piece, mentorship

## Photos and brand icons

- All photos are local files in `public/images/` (portraits, award photos, "What I do" card images and press screenshots). No external image services are used.
- Tool logos in the Skills section are official brand icons (Simple Icons) stored as static SVG data in `src/data/brand-icons.ts`.

## Contact form setup (Resend)

1. Create an account at https://resend.com and an API key.
2. In Vercel → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (where messages arrive, default `oyewale25@gmail.com`)
   - `CONTACT_FROM_EMAIL` (use `Portfolio Contact <onboarding@resend.dev>` until a domain is verified in Resend)
   - `NEXT_PUBLIC_SITE_URL` (the live domain, e.g. `https://oyewalemuftau.com`)
3. Redeploy.

Without a key, the form logs messages to the terminal in development, and in production it politely asks visitors to email directly.

## Deploy (Vercel via GitHub)

```powershell
git init
git add .
git commit -m "Initial build: Oyewale Muftau portfolio"
git branch -M main
git remote add origin https://github.com/Judacris32/oyewale-muftau-portfolio.git
git push -u origin main
```

Then import the repo in Vercel (framework: Next.js, defaults are fine) and add the environment variables above.

## To confirm with Oyewale before launch

- **Original photos** from the photographer (current ones are WhatsApp-compressed, ~850px wide). Replace files in `public/images/` with the same names.
- **Availability line** in `src/lib/site.ts` and the "Are you open to full-time roles?" FAQ answer.
- **CV**: `public/cv/oyewale-muftau-cv.pdf` is the engineering CV he sent, which includes his phone number. Swap in a data-focused version if he has one.
- **Dashboards**: links or screenshots for the "Want to see the dashboards?" section on `/work`.
- **Domain** for `NEXT_PUBLIC_SITE_URL`.
- **10Alytics**: 2–3 highlights for his current role (LinkedIn has no description).
- **Oldham Council**: it isn't on LinkedIn, so it's not in the work history, but the About text and one "What I do" example still mention it. Keep or remove.
- **Mentorship quote**: the handwritten line "Ask the data a better question" on the home page needs his approval.

## Folder structure

```
oyewale-portfolio/
├── public/
│   ├── cv/oyewale-muftau-cv.pdf
│   ├── images/
│   │   ├── awards/          Titans of Tech plaque + certificate, NiTA trophy + certificate
│   │   ├── brand/logo.png
│   │   ├── capabilities/    "What I do" card images
│   │   ├── press/           article screenshots for the press cards
│   │   └── hero-backdrop.jpg, hero-portrait.webp, portrait-*.jpg
│   └── og.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx, page.tsx, globals.css, not-found.tsx
│   │   ├── favicon.ico, icon.png, apple-icon.png, manifest.ts, robots.ts, sitemap.ts
│   │   ├── about/ · contact/ · press/ · recognition/ · services/ · work/
│   │   └── api/contact/route.ts
│   ├── components/
│   │   ├── charts/Charts.tsx       ₦ funding-gap chart
│   │   ├── contact/ContactForm.tsx
│   │   ├── layout/Navbar.tsx, Footer.tsx
│   │   ├── sections/               PageHero, HeroIntro, StatsBar, CapabilityCards, SkillsExpertise,
│   │   │                           AwardCards, PressList, Faq, CtaBand, ContactSection
│   │   ├── ui/                     Button, Reveal, SectionHeading, Icon
│   │   └── work/ExperienceCard.tsx
│   ├── data/content.ts, brand-icons.ts
│   └── lib/site.ts, contact-schema.ts, cn.ts
├── .env.example
├── next.config.mjs, tailwind.config.ts, postcss.config.mjs, eslint.config.mjs, tsconfig.json
└── package.json, package-lock.json
```
