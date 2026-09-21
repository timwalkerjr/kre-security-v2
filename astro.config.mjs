// @ts-check
import cloudflare from '@astrojs/cloudflare';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { sessionDrivers } from 'astro/config';
import { globSync } from 'glob';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import remarkGfm from 'remark-gfm';

import remarkToc from './src/plugins/remark-toc.mjs';

const siteUrl = process.env.SITE_URL || 'https://www.kresecurity.com';
const projectRoot = dirname(fileURLToPath(import.meta.url));

function collectNoIndexPaths() {
  const files = globSync('src/pages/**/*.astro', { cwd: projectRoot });
  const paths = new Set();
  for (const file of files) {
    if (/\[.*\]/.test(file)) continue;
    const content = readFileSync(join(projectRoot, file), 'utf-8');
    if (!/noIndex\s*=\s*\{\s*true\s*\}/.test(content)) continue;
    let route = file.replace(/^src\/pages/, '').replace(/\.astro$/, '');
    if (route.endsWith('/index')) route = route.slice(0, -'index'.length);
    if (route === '') route = '/';
    if (!route.endsWith('/')) route += '/';
    paths.add(route);
  }
  return paths;
}

const noIndexPaths = collectNoIndexPaths();

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  adapter: cloudflare({
    imageService: 'passthrough',
    prerenderEnvironment: 'node',
  }),
  session: {
    driver: sessionDrivers.lruCache(),
  },
  site: siteUrl,
  security: {
    checkOrigin: true,
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
        return !noIndexPaths.has(normalized);
      },
    }),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
    },
    processor: unified({ remarkPlugins: [remarkGfm, remarkToc] }),
  },
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
