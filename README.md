# B9TECH CONSULTS

Production Next.js website for B9TECH CONSULTS, a Nigeria-based technology consultancy and product-development business. The public website presents enterprise technology capabilities and B3: BringBackBarter.

## Public routes

- `/` — corporate homepage
- `/enterprise` — enterprise capabilities and engagement approach
- `/investors` — business direction, investment thesis and diligence baseline
- `/privacy-policy` — published privacy notice (requires review against actual practices)
- `/terms-conditions` — B3 terms (requires review against actual product behaviour)

## Local development

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
```

## Deployment

The repository is connected to the B9TECH Vercel project. Production deployment status must be checked in Vercel after changes to `main`.

## Repository structure

- `app/` — Next.js routes, metadata, sitemap and robots policy
- `components/` — reusable site sections and UI
- `public/` — static images and brand assets
- `investor-readiness/` — restricted working drafts and due-diligence preparation

## Investor-readiness materials

See [investor-readiness/README.md](./investor-readiness/README.md). All materials are internal drafts until legal identity, ownership, financials, customer evidence, product metrics and IP position have been verified.

## Content and release controls

- Do not invent customers, revenue, users, transactions, certifications, partnerships or performance claims.
- Treat product roadmap statements separately from shipped functionality.
- Do not publish draft investor documents without founder approval and supporting evidence.
- Review privacy and terms content against actual processing and product behaviour with qualified counsel.
- Keep secrets, credentials and production personal data out of this repository.
