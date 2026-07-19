# BrandFace Media — Sales Page

React + Vite implementation of the BrandFace Media sales page, built from the Claude Design handoff bundle in the repo root (`README.md`, `chats/`, `project/`).

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs a static site to `dist/`.

## Deploy on Vercel

This app lives in the `web/` subdirectory of the repo, not the repo root.

1. Import the GitHub repo into Vercel.
2. In the project's **Settings → General → Root Directory**, set it to `web`.
3. Framework Preset should auto-detect as **Vite** (build command `npm run build`, output `dist`) — `vercel.json` in this folder pins that explicitly.
4. No environment variables are required; the Calendly embed and Formspree endpoint are public URLs baked into the code (`src/siteConfig.js`).

Deploying via the Vercel CLI from this folder works the same way without the Root Directory step:

```
cd web
vercel
```
