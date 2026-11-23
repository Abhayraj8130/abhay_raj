# Abhay Raj — Developer Portfolio

A responsive React + Vite portfolio with a creative dark editorial visual style and lime accent.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Personalize before publishing
Edit `src/data.js`:
- Replace `email`, `github`, and `linkedin`.
- Add verified work dates, job title/company details, education and certifications if you want them shown.
- Update project descriptions to match your preferred public wording.
- Add your resume PDF as `public/resume.pdf` (or change the `resume` path). The current design does not show a resume download button until you choose to add one.
- Add only skills you can confidently discuss in an interview.

The portfolio intentionally avoids invented employers, dates, education, metrics, and contact information.

## Deploy

### Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

### Netlify
1. Push to GitHub and import the repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy.

No backend or environment variables are required for this static portfolio. The contact link uses `mailto:`; add a form service or backend later if you need submissions stored online.
