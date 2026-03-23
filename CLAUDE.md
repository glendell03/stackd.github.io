# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server on port 3000
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm lint       # TypeScript type-check (tsc --noEmit)
pnpm clean      # Remove dist/
```

## Architecture

Single-page landing site for "STACKD" — a React 19 + TypeScript + Vite app with Tailwind CSS v4.

**Page structure** (`src/App.tsx`): Linear scroll layout composing six full-section components in order — `Navbar → Hero → Services → Projects → Team → Contact`. Each section has a matching `id` for anchor-scroll navigation (smooth scroll wired in `App.tsx`'s `useEffect`).

**Animations**: Uses `motion/react` (Motion library). The shared `TextReveal` component (`src/components/ui/`) wraps text in a clip-masked `overflow-hidden` div with a slide-up entrance triggered by `whileInView`. Use `delay` prop to stagger reveals within a section.

**Styling conventions**:
- Tailwind v4 via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed
- Brand palette: background `#F4F4F0`, text `#0A0A0A`, accent `#FF3300`
- Typography uses `font-mono` for labels/captions, `font-bold tracking-tighter uppercase` for large headings
- Fluid type: headings use viewport units (`text-[10vw] lg:text-[8vw]`)
- Grid: 12-column layout with `lg:col-span-*` for section content splits

**Path alias**: `@` resolves to the project root (e.g., `@/src/components/...`).

**Backend deps** (`express`, `better-sqlite3`, `dotenv`) are installed but no server code exists yet — these are available for a future API layer.
