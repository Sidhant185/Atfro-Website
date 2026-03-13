# ATFRO Website

Official website for ATFRO — Architecting Transformations For Robust Outcomes. Built with Next.js (App Router), TypeScript, and CSS Modules.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules, global CSS
- **Deployment:** Hostinger Node.js

## Commands

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start development server       |
| `npm run build`| Production build               |
| `npm start`    | Start production server        |
| `npm run lint` | Run ESLint                     |

## Production Deployment

For Hostinger deployment (install → build → start), see **[DEPLOYMENT.md](DEPLOYMENT.md)**.

## Project Structure

- `src/app/` — App Router pages, layouts, sitemap, robots
- `src/components/` — Reusable UI (Navbar, Footer, Button, Typography, etc.)
- `public/` — Static assets

## Analytics & SEO

- **Google Analytics:** Tracking ID is configured in `src/components/Analytics/GoogleAnalytics.tsx`.
- **Google Search Console:** To verify ownership, set the verification code in `src/app/layout.tsx` (`googleSiteVerification` constant).
- **Sitemap:** `/sitemap.xml` — dynamically generated.
- **Robots:** `/robots.txt` — allows crawling and references sitemap.
