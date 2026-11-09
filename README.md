# DesignVault

A premium gallery of 50+ high-end website designs. Visitors can preview a live demo of each design, copy the exact AI prompt that recreates it, and use it to build their own website.

## Tech Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion
- Fonts via CSS font stacks (Inter + Playfair Display + Space Grotesk pairings)
- Icons: lucide-react
- Zero backend — all designs stored in a typed data file (`/data/designs.ts`)
- Deployable on Vercel with zero config

## Folder Structure

```
designvault/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (metadata, registry import, Navbar)
│   ├── page.tsx                  # Home (hero, stats, categories, how-it-works, CTA)
│   ├── designs/page.tsx          # Gallery (masonry grid, filters, search, load-more)
│   ├── designs/client.tsx        # Gallery client component
│   ├── designs/[slug]/page.tsx   # Design detail (live preview + prompt panel)
│   ├── demo/[slug]/page.tsx      # Full-screen standalone demo
│   ├── favorites/page.tsx        # Favorites (localStorage bookmarks)
│   ├── favorites/client.tsx      # Favorites client component
│   ├── about/page.tsx            # About page
│   └── not-found.tsx             # Custom 404
├── components/
│   ├── layout/                   # Navbar, Footer, ThemeToggle, DemoShell
│   ├── home/                     # Hero, Stats, CategoryGrid, HowItWorks, Testimonials, CTA
│   ├── designs/                  # DesignCard, FilterBar, DetailView, DemoView
│   └── ui/                       # Button, Badge, Card, CopyButton, Toast, Skeleton, Input, lucide barrel
├── data/
│   └── designs.ts                # Design registry — 52 designs with prompts
├── lib/
│   ├── registry.ts               # Design registry (register/get/search helpers)
│   ├── watermark.ts              # Permanent watermark system (DemoShell)
│   ├── clipboard.ts              # Clipboard copy with execCommand fallback
│   ├── favorites.ts              # localStorage favorites helper
│   └── utils.ts                  # cn(), formatNumber, slugify, debounce, etc.
├── designs/<slug>/index.tsx      # 52 individual design demo components
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (v20+ recommended)
- npm

### Installation

```bash
cd designvault
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting / Type Checking

```bash
npm run lint       # Next.js ESLint
npx tsc --noEmit   # TypeScript strict check
```

## Features

- **50+ unique designs** across SaaS, startup, portfolio, agency, e-commerce, restaurant, real estate, fitness, education, crypto/web3, travel, photography, medical, law firm, event, music, and fashion categories.
- **Live demos** with desktop/tablet/mobile device toggle inside a browser-frame mockup.
- **Copyable AI prompts** (150–300 words each) with format tabs: default, ChatGPT, Claude, Cursor, Lovable.
- **Permanent watermark** ("Designed by Utkarsh Bajpai") on every demo — fixed badge bottom-right + faint diagonal layer + MutationObserver re-injection guard.
- **Browse, search, filter, sort** with sticky filter bar and instant results.
- **Favorites** persisted via localStorage.
- **Command palette** (Cmd/Ctrl + K) for instant search.
- **Dark/Light mode** with persisted preference.
- **SEO**: dynamic metadata, Open Graph images, sitemap-ready, JSON-LD.
- **Accessibility**: semantic HTML, keyboard navigation, focus rings, ARIA labels, AA contrast.
- **Error boundaries** around every demo with graceful fallback.

## Adding a New Design

1. Create a new folder: `designs/<slug>/index.tsx` exporting a default React component.
2. Register it in `data/designs.ts` with a `D({ ... })` call (import the component, add one registry entry).
3. The design is automatically available in the gallery, detail page, and full demo.

## Deployment on Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel ([vercel.com](https://vercel.com)).
3. Vercel detects Next.js automatically — zero config required.
4. Deploy. The site is fully static (zero backend) and will deploy successfully.

## Watermark (Critical)

Every design demo carries a permanent watermark:
- Text: "Designed by Utkarsh Bajpai"
- Fixed pill badge bottom-right with backdrop-blur
- Faint diagonal repeating layer across the demo (marked screenshots too)
- MutationObserver re-injects the watermark if removed via DevTools
- Style-guard enforces display/opacity/visibility every frame
- Every copied prompt ends with: `Add a permanent footer credit: 'Designed by Utkarsh Bajpai'.`

## License

MIT
