# Webzy Inc. — webzyinc.com

Marketing site for Webzy Inc. **We help growing businesses run better through software.**

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all routes prerender statically)
npm start
```

## Structure

```
app/
  page.tsx               homepage — one narrative, 14 sections in order
  business-software/     capabilities, process, system demo, workflow, fit
  work/  work/[slug]/     delivered systems: problem → system → outcome
  company/ careers/ contact/ privacy/ terms/
  opengraph-image.tsx    social card, generated at build time
components/
  home/                  the homepage sections (each owns one idea)
  layout/                nav, footer, page header, wordmark
  primitives/            Section, Reveal/RevealLines, Action, TextLink
lib/
  site.ts                name, URL, email, nav, socials, analytics IDs
  work.ts                delivered systems (the only source for /work)
  questions.ts           the five qualifying questions (homepage + contact)
  motion.ts              one easing curve, shared variants
```

## Ground rules for edits

**Nothing on this site is invented.** No fabricated clients, metrics, logos,
awards, or products. `lib/work.ts` describes work actually delivered; the
interactive interface in "What we build" is labelled *Illustrative interface*
and uses record IDs rather than client names. Keep it that way.

**Design system** lives in `app/globals.css` — colour tokens, type scale
(`display-xl` … `lede`, `label-mono`), grid (`shell`), surfaces. Use the tokens;
avoid one-off hex values.

- `--color-accent` (#0092e7, the Webzy blue from the mark) carries **graphics**
  — strokes, dots, rails, fills behind nothing.
- `--color-accent-ink` (#0a6aa6) carries **anything with text**, on or in it,
  where contrast has to hold. Small blue text uses `accent-ink`, never `accent`.

**Motion** must communicate something. One easing curve (`EASE` in
`lib/motion.ts`), short distances, `prefers-reduced-motion` respected
throughout. `RevealLines` puts its observer on the wrapper, never on the masked
lines — a line parked outside its own `overflow-hidden` box reads as invisible
to IntersectionObserver and would never animate in.

## Notes

- The site URL is a single constant: `site.url` in `lib/site.ts`.
- Old URLs (`/case-study`, `/case-study/:slug`, `/services`, `/pricing`,
  `/products`) redirect permanently in `next.config.ts`.
- Booking uses the real Cal.com link; there is no contact form, because there is
  no backend to receive one.
- `public/webzy-mark.png` is the logo trimmed from `public/logo.png`.
