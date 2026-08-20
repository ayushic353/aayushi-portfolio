# Aayushi Charde — Portfolio

Personal placement portfolio for software engineering, full-stack, and AI/ML roles.

## Tech Stack

- React
- Vite
- Tailwind CSS
- lucide-react (icons)

## Features

- Responsive, dark, developer-focused design
- Sticky navbar with smooth-scroll and mobile menu
- Experience timeline
- Featured projects with metrics and case studies
- Categorized skills
- Education & certifications
- Contact CTA
- Resume download
- SEO metadata (title, description, Open Graph, favicon)

## Run Locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

Output is generated in `dist/`.

## Deployment

Deployed via **Vercel** (free tier), connected directly to this GitHub repository.
No environment variables are required for the base site. If you add any later
(e.g. a contact-form API key), configure them in the Vercel project settings —
never commit them to the repo.

## Manual steps before publishing

- Replace `YOUR_GITHUB_URL_HERE` in `src/data/projects.js` with the real
  repository links for the RAG Document Platform, the Mental Health
  Classification project, and NAAVI.
- Confirm `public/Aayushi-Charde-Resume.pdf` is the version you want live —
  swap the file (keep the same name) to update it.
