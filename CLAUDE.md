# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # ESLint check
```

## Architecture

Single-page Next.js 15 portfolio with one route (`src/app/page.tsx`). All content is rendered server-side except page-level AOS init (`"use client"`).

**Layout split:**
- `src/app/layout.tsx` — root layout, renders `<Footer />` globally
- `src/app/page.tsx` — renders `<Navbar />` + all content sections in order: Hero → About → Projects → Skills → Contact

**Sections are independent components** in `src/components/`. They have no shared state. Data (projects list, skills list) is hardcoded as `const` arrays inside the component files themselves.

**Styling:** Tailwind CSS v3. Custom design tokens are defined in `tailwind.config.js`:
- `accent` = `#08E95E` (green)
- `surface`, `card`, `card-hover`, `border` = dark palette
- Custom animations: `fade-up`, `fade-in`, `blink`, `float`
- `container` is centered with responsive padding

**Animations:** AOS (Animate On Scroll) — initialized once in `page.tsx` via `useEffect`. Components add `data-aos="fade-up"` attributes directly.

**Images:** Stored in `/public/`. Uses `next/image` with `unoptimized: true` (set in `next.config.js`).

**Path alias:** `@/*` → `./src/*`

**Fonts:** Geist Sans + Geist Mono loaded locally from `src/app/fonts/`.

## Known repo issue

Every `.tsx` source file has a corresponding compiled `.js` file committed alongside it (e.g. `page.js` + `page.tsx`). The `.js` files are stale compiled outputs and should be deleted — Next.js errors when both exist in the same directory. Additionally, `next.config.ts` and `tailwind.config.ts` are outdated duplicates; only `next.config.js` and `tailwind.config.js` are correct and should be kept.
