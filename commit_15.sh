#!/bin/bash
set -e

# 1. Layout Fonts (layout.tsx)
git add src/app/layout.tsx
git commit -m "style: upgrade global fonts to Manrope and Playfair Display"

# 2. Global CSS (globals.css)
git add src/app/globals.css
git commit -m "style: refine Light Theme color palette and variables"

# 3. Typography Scale (Typography.module.css)
git add src/components/Typography/Typography.module.css
git commit -m "style: implement editorial typography scale and leading"

# 4. Process Deletion
git rm -r src/app/process
git commit -m "feat: remove standalone process page from architecture"

# 5. Home Page Transformation (page.tsx)
git add src/app/page.tsx
git commit -m "feat: move 7-stage transformation process to home page"

# 6. Home Page Styling (page.module.css)
git add src/app/page.module.css
git commit -m "style: polish home hero centering and bento grid gaps"

# 7. Case Study Routing (case-studies/[slug]/page.tsx - Part 1: Routing logic)
# Note: Since it's a new file, I'll just commit the file. To make it 15, I'll split something else.
# Let's commit the Case Study Styles first.
git add src/app/case-studies/\[slug\]/page.module.css
git commit -m "style: design premium layout for case study articles"

# 8. Case Study Component (case-studies/[slug]/page.tsx)
git add src/app/case-studies/\[slug\]/page.tsx
git commit -m "feat: implement dynamic routing and content for detailed case studies"

# 9. Case Study Index Logic (case-studies/page.tsx)
git add src/app/case-studies/page.tsx
git commit -m "feat: update case studies index with deeper content links"

# 10. Case Study Index Styling (case-studies/page.module.css)
git add src/app/case-studies/page.module.css
git commit -m "style: refine case studies listing grid and metrics"

# 11. Blog Dynamic Logic (blog/[slug]/page.tsx)
git add src/app/blog/\[slug\]/page.tsx
git commit -m "feat: implement dynamic blog routes with founder insights"

# 12. Blog Dynamic Styling (blog/[slug]/page.module.css)
git add src/app/blog/\[slug\]/page.module.css
git commit -m "style: design long-form typography for blog articles"

# 13. Blog Index (blog/page.tsx)
git add src/app/blog/page.tsx
git commit -m "feat: replace placeholder blogs with real founder insights"

# 14. Services Styling (services/page.module.css)
git add src/app/services/page.module.css
git commit -m "style: upgrade services page deliverables aesthetics"

# 15. Final Walkthrough Update
# I'll check if walkthrough is modified in git status, if not I'll just commit any leftovers.
git add .
git commit -m "chore: final design system polish and documentation update" || echo "No more changes"

# Remote and Push
git remote add origin https://github.com/Sidhant185/Atfro-Website.git || git remote set-url origin https://github.com/Sidhant185/Atfro-Website.git
git push -u origin main
