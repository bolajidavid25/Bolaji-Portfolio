## Bolaji David — Portfolio

Modern, multi-page developer portfolio built with:

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Dark/Light mode (next-themes)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Customize

- **Profile details + social links**: `src/data/profile.ts`
- **Projects + categories**: `src/data/projects.ts`
- **Project preview images**: `public/projects/*.svg` (replace with real screenshots anytime)

## Contact Form

The contact form posts to `POST /api/contact` (`src/app/api/contact/route.ts`).
To enable email delivery, set `RESEND_API_KEY` in a `.env.local` file and optionally `CONTACT_EMAIL`.
A sample environment file is included at `.env.local.example`.

## Build & Deploy (Vercel)

Build locally:

```bash
npm run build
npm run start
```

Deploy on Vercel:

- Push to GitHub
- Import the repo in Vercel
- Deploy

Then update `metadataBase` in `src/app/layout.tsx` to your real domain.
