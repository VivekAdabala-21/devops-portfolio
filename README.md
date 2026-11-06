# Vivek — DevOps Portfolio

A responsive personal portfolio built with React, Vite and custom CSS.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` folder.

## Personalize before publishing

Search the project for these placeholders and replace them:
- `Vivek` — use your preferred professional display name.
- `YOUR_EMAIL@example.com` — add your professional email.
- `https://github.com/` — replace with your GitHub profile URL.
- `https://www.linkedin.com/` — replace with your LinkedIn profile URL.
- In `src/App.jsx`, add the real GitHub repository URL to each project's `link` field.
- Add your resume PDF to `public/` and create a download link when it is ready.
- Update project status and descriptions to match what you have actually completed.

## GitHub

Create a repository named `vivek-devops-portfolio`, then:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/vivek-devops-portfolio.git
git push -u origin main
```

## Deployment options

- GitHub Pages: suitable for a static Vite site; configure the Vite base path if deploying to a repository subpath.
- AWS EC2: build with `npm run build`, then serve the generated `dist/` files using a web server or a container. This is a separate deployment step.

## Suggested repository structure

```text
vivek-devops-portfolio/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Important accuracy note

The portfolio labels the Hospital Management System deployment as "In progress". Change that status only after the deployment is verified. Keep skills and project claims aligned with your real hands-on experience.
