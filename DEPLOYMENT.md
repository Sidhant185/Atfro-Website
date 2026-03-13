# ATFRO Website — Hostinger Production Deployment

This document describes how to deploy the ATFRO Next.js website on **Hostinger Business Web Hosting** with Node.js support. The site runs as a Node.js application and is updated via GitHub.

---

## Prerequisites

- Hostinger account with **Node.js** support (Business or higher)
- Node.js **20.9 or later** (20.x or 22.x LTS). Next.js 16 does not support Node 18.
- Git (for updates) or FTP/SFTP (for initial upload)

---

## One-Time Setup on Hostinger

### 1. Create Node.js Application

1. In Hostinger **hPanel**, go to **Advanced** → **Node.js** (or **Node.js App**).
2. Create a new application:
   - **Application name:** e.g. `atfro-website`
   - **Node.js version:** **20.x or 22.x** (required). Do not use 18.x — the build will fail.
   - **Application root:** e.g. `atfro.com` or `public_html` (as per Hostinger’s layout)
   - **Application startup file:** leave default or set to use `npm start` (see below).

### 2. Upload Project

**Option A — From GitHub (recommended)**

1. In the Node.js app settings, use **Deploy from repository** if available:
   - Connect your GitHub account and select the repo (e.g. `Sidhant185/Atfro-Website`).
   - Branch: `main`.
   - Set the application root to the repository root (where `package.json` is).

**Option B — Upload via Git (SSH)**

1. SSH into your hosting account (if enabled).
2. Clone the repo into the application root:
   ```bash
   git clone https://github.com/Sidhant185/Atfro-Website.git .
   ```

**Option C — Upload via File Manager / FTP**

1. Zip the project (excluding `node_modules`, `.next`, `.git`).
2. Upload and extract in the application root so that `package.json` is at the root.

### 3. Build and Start Commands

Hostinger usually allows you to set **Install**, **Build**, and **Start** commands.

- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Start command:** `npm start`

The app will run with:

```bash
npm install
npm run build
npm start
```

`next start` uses the **PORT** provided by Hostinger (if set). No code change is required for the port.

### 4. Point Domain to the App

- In Hostinger, point your domain (e.g. `atfro.com`) to the Node.js application (subdomain or root as per your plan).
- Ensure the app is accessible via the URL you use in `metadataBase` and sitemap (e.g. `https://atfro.com`).

---

## Update Workflow (From GitHub)

1. **Local development**
   - Make changes, run `npm run dev`, test.
2. **Push to GitHub**
   - Commit and push to `main` (or your chosen branch).
3. **On Hostinger**
   - If you use **Deploy from repository**: trigger a redeploy or wait for auto-deploy.
   - If you use **Git (SSH)**:
     ```bash
     cd /path/to/application/root
     git pull origin main
     npm install
     npm run build
     # Restart the Node.js app from hPanel (or process manager)
     ```
   - If you use **FTP**: re-upload changed files, then run `npm install`, `npm run build`, and restart the app (or use a script/panel button if available).

---

## Commands Reference

| Command | Purpose |
|--------|--------|
| `npm install` | Install dependencies |
| `npm run build` | Production build (output in `.next`) |
| `npm start` | Start production server (uses `PORT` from env if set) |
| `npm run dev` | Local development server |
| `npm run lint` | Run ESLint (Next.js config) |

---

## What Is Preserved in Production

- **UI/UX:** All components, layouts, and pages.
- **Styling:** CSS Modules, `globals.css`, fonts (Inter via `next/font`).
- **Animations:** Client-side animations and FadeIn behavior.
- **SEO:** Metadata, OpenGraph, Twitter cards, canonical URLs, `sitemap.xml`, `robots.txt`, JSON-LD.
- **Routing:** App Router routes (static and dynamic).
- **Static assets:** Served from `/public` (e.g. `/file.svg`, `/globe.svg`).

---

## Google Analytics & Search Console (Hardcoded)

- **Google Analytics:** The tracking ID `G-R9132SCRDQ` is in `src/app/layout.tsx` (inside `<head>` in the root layout, so it runs on every page). No environment variables are required.
- **Google Search Console:** To verify ownership, open `src/app/layout.tsx` and set the `googleSiteVerification` constant to the content value from Search Console (HTML tag method). Example: `const googleSiteVerification = "abc123xyz";` then redeploy. Leave empty if not using.
- **Sitemap:** Submit `https://atfro.com/sitemap.xml` in Search Console (URL prefix property) for indexing.
- **Robots:** Crawling is allowed via `https://atfro.com/robots.txt`; the `host` directive points to the canonical domain for Google.

---

## Troubleshooting

- **Build fails: "Node.js version >=20.9.0 is required"** — Your host is using Node 18. In the hosting panel (e.g. Node.js app settings or Build settings), change the **Node version** to **20.x** or **22.x**. Do not use 18.x. The project has `engines.node` and `.nvmrc` set to 20 for this reason.
- **Port:** If the app does not respond, confirm Hostinger has set `PORT` and that the Node.js app is bound to it. Next.js reads `process.env.PORT` automatically.
- **Paths:** The app uses relative paths and Next.js defaults; no absolute filesystem paths are required.
- **Static files:** Files in `public/` are served at the root URL. Do not remove or rename `public` when deploying.
- **Build errors:** Run `npm run build` locally and fix any TypeScript or ESLint errors before pushing.
- **404 / routes:** Ensure the hosting proxy or panel is set to forward all requests to the Node.js app (SPA/Node routing).

---

## Production Checklist

- [ ] Node.js app created on Hostinger (18.x or 20.x)
- [ ] Project uploaded (GitHub / Git / FTP)
- [ ] Run on server: `npm install` → `npm run build` → `npm start`
- [ ] Domain pointed to the Node.js app
- [ ] Submit sitemap in Google Search Console: `https://atfro.com/sitemap.xml`
- [ ] (Optional) Add Search Console verification code in `src/app/layout.tsx` and redeploy

## Summary

1. Create a Node.js app on Hostinger.
2. Upload the project (GitHub / Git / FTP).
3. Run: `npm install` → `npm run build` → `npm start`.
4. Point your domain to the app.

No environment variables are required. Google Analytics is hardcoded; Search Console verification is optional and set in the codebase. The site runs in production with stable routing, styling, animations, and SEO intact.
