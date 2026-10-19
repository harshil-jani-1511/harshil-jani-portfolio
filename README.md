# Harshil Jani — Static Vue Portfolio

A static portfolio website built with Vue 3, Vite, Vue Router (hash mode), and Tailwind CSS 4. It does not require PHP, Laravel, Inertia.js, or a database at runtime.

## Requirements

- Node.js 20.19+ (or a compatible current LTS release)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Test a production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Before publishing

Update the placeholders in `src/pages/Home.vue`:

- `YOUR_EMAIL@example.com` — replace with your professional email.
- `https://www.linkedin.com/` — replace with your actual LinkedIn profile URL.
- `91YOURNUMBER` and `+91YOURNUMBER` — replace with your phone number for WhatsApp and calls, or remove those buttons if you do not want to publish your number.
- Add your resume PDF to `public/Harshil-Jani-Resume.pdf` to enable the resume download button.

Review experience dates and project descriptions for accuracy before publishing. The WeDoWebApps Ltd. entry is currently listed as September 2020–September 2021; update its title and responsibilities if needed.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Import that repository in Vercel.
3. Vercel should detect Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. Hash-based project URLs work without extra rewrite rules.

## Deploy to GitHub Pages

Vite's build output is static. For a user/project repository published at the root of a GitHub Pages domain, use the default `/` base. If publishing under a repository subpath such as `username.github.io/repository-name/`, set the `base` option in `vite.config.js` to `'/repository-name/'` before building. Use a GitHub Actions workflow to build and publish the `dist` directory.

## Notes

- Project case studies are static data in `src/data/projects.js`.
- Project detail pages use hash URLs such as `/#/projects/justfleet`, making static hosting straightforward.
- No backend, API keys, or database are required for the current portfolio.
