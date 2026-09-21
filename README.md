# KRE Security (Pagesmith Astro)

Black + gold rebuild of [kresecurity.com](https://www.kresecurity.com/) on the Pagesmith Astro chassis in this repo. Tim imports commits into Pagesmith — keep the Cloudflare adapter, `data-ps` attributes, and `/_pagesmith/fonts` wiring.

Layout and IA come from [the Netlify Astro design](https://kre-security.netlify.app/). The home hero uses the two-column + action-card pattern and folds in the live yellow-header content (hiring, dispatch, training, regional phones). Eastern PA Educators stays visible; its destination URL is not set yet.

## Local

```bash
pnpm install
pnpm dev -- --host 127.0.0.1 --port 43173
```

- `pnpm build` — Astro static build (Cloudflare adapter stays attached)
- `pnpm check` — `astro check`

Default `SITE_URL` is `https://www.kresecurity.com`. Override with an env var if needed.
