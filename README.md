# SSD Deals 🚀💾

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-green?logo=tailwindcss)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-2.45-purple?logo=supabase)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel)](https://vercel.com)

A modern, responsive Next.js application showcasing featured SSD deals and products. Features dynamic product tables, hero sections, dark/light theme toggle, and Supabase-backed API for real-time data.

## ✨ Features
- 📱 Fully responsive design with TailwindCSS
- 🌙 Dark/Light theme switching (next-themes)
- 🔥 Featured deals carousel with Framer Motion animations
- 📊 Interactive DiskTable for product specs
- 🎯 Hero, StatsBar, HowItWorks sections
- 🔗 Contact page
- ⚡ Server-side API routes (`/api/products`, `/api/featured`)
- 🗄️ Supabase integration for products data
- 📈 Lucide icons and smooth UI (DealCard components)

Live Demo: [TBD - Deploy to Vercel](http://localhost:3000)

## 🛠️ Getting Started

### Prerequisites
- Node.js 20+
- [Supabase Account](https://supabase.com): Create a project, get `SUPABASE_URL` and `SUPABASE_ANON_KEY`

### Local Setup
1. Clone/Fork the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env.local`:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Setup Database: Run `supabase/ssd_products.sql` in your Supabase SQL editor.
5. Run dev server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

### Project Structure
```
ssd/
├── app/              # App Router pages & API routes
│   ├── api/products/ route.ts
│   ├── api/featured/ route.ts
│   ├── page.tsx      # Home
│   └── contact/
├── components/       # Reusable UI (Hero, FeaturedDeals, DealCard, etc.)
├── lib/service/      # supabaseClient.ts
├── types/            # product.ts
├── supabase/         # ssd_products.sql
├── public/           # Assets (icons)
├── package.json      # Deps: Next.js, Supabase, Tailwind, Framer Motion
└── tailwind.config.ts # (inferred)
```

## 🔨 Build & Deploy
```bash
npm run build
npm run start
```
- **Deploy**: Push to GitHub, connect to [Vercel](https://vercel.com) (auto-deploys).
- Env vars: Add Supabase keys in Vercel dashboard.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 4 + clsx + tailwind-merge
- **Database/API**: Supabase
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Themes**: next-themes

## 🤝 Contributing
Fork, PR welcome! See [CONTRIBUTING.md](CLAUDE.md) (or create one).

## 📄 License
MIT

---

Built with ❤️ by BLACKBOXAI

