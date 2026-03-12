#!/bin/bash
git add ATFRO_Company_Overview.docx
git commit -m "chore: add company overview document"

git add src/app/globals.css
git commit -m "style: define global CSS variables and reset"

git add src/app/layout.tsx
git commit -m "chore: configure root layout and global typography"

git add src/app/page.module.css
git commit -m "style: add styling for Home page hero and bento grid"

git add src/app/page.tsx
git commit -m "feat: implement minimal, centered Home page hero and explicit deliverables"

git add src/app/blog/page.module.css
git commit -m "style: add styles for Blog index timeline grid"

git add src/app/blog/page.tsx
git commit -m "feat: build Blog index page routing and timeline"

git add src/app/blog/\[slug\]/page.module.css
git commit -m "style: add styling for dynamic blog post articles"

git add src/app/blog/\[slug\]/page.tsx
git commit -m "feat: implement dynamic routing for individual blog posts"

git add src/app/case-studies/page.module.css
git commit -m "style: build case studies visual grid CSS"

git add src/app/case-studies/page.tsx
git commit -m "feat: build data-driven Case Studies page layout"

git add src/app/contact/page.module.css
git commit -m "style: style the contact form and layout"

git add src/app/contact/page.tsx
git commit -m "feat: implement Contact form page with interactive validation styling"

git add src/app/founders/page.module.css
git commit -m "style: build founder grid layout css"

git add src/app/founders/page.tsx
git commit -m "feat: build Founders team page with placeholder UI"

git add src/app/process/page.module.css
git commit -m "style: establish process 7-stage visual timeline CSS"

git add src/app/process/page.tsx
git commit -m "feat: implement 7-stage ATFRO process architecture view"

git add src/app/robots.ts
git commit -m "chore: configure Next.js dynamic robots.txt"

git add src/app/services/page.module.css
git commit -m "style: build styling for 4-Pillar services grid"

git add src/app/services/page.tsx
git commit -m "feat: implement explicit conversion deliverables in Services page"

git add src/app/sitemap.ts
git commit -m "chore: configure dynamic sitemap generation for SEO routes"

mkdir -p src/components/Button src/components/FadeIn src/components/Footer src/components/Navbar src/components/Typography

git add src/components/Button/Button.module.css
git commit -m "style: implement tactile CSS for reusable Button component"

git add src/components/Button/Button.tsx
git commit -m "feat: build polymorphic Button component"

git add src/components/FadeIn/FadeIn.tsx
git commit -m "feat: build global FadeIn scroll animation component"

git add src/components/Footer/Footer.module.css
git commit -m "style: build global footer column and layout CSS"

git add src/components/Footer/Footer.tsx
git commit -m "feat: implement global Next.js App Router Footer"

git add src/components/Navbar/Navbar.module.css
git commit -m "style: fix mobile navbar z-index and visibility CSS"

git add src/components/Navbar/Navbar.tsx
git commit -m "feat: construct responsive Navbar component"

git add src/components/Typography/Typography.module.css
git commit -m "style: map global typographic scales in CSS module"

git add src/components/Typography/Typography.tsx
git commit -m "feat: build dynamic Typography rendering component"

git add .
git commit -m "chore: final cleanup and untracked changes commit"
