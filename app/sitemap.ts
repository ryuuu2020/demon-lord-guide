import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

function getRoutes(): string[] {
  const appDir = path.join(process.cwd(), 'app');
  const routes: string[] = [];

  function walk(dir: string, prefix: string = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith('(') && entry.name.endsWith(')')) continue;
      if (entry.name.startsWith('_')) continue;
      if (entry.name === 'api') continue;

      const fullPath = path.join(dir, entry.name);
      const pagePath = path.join(fullPath, 'page.tsx');
      const route = prefix === '' ? `/${entry.name}` : `${prefix}/${entry.name}`;

      if (fs.existsSync(pagePath) || fs.existsSync(path.join(fullPath, 'page.jsx'))) {
        routes.push(route);
      }

      walk(fullPath, route);
    }
  }

  walk(appDir);
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://demon-lord-guide.vercel.app';
  const routes = getRoutes();
  const allRoutes = routes.includes('') ? routes : ['', ...routes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-06-28'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/beginners-guide' || route === '/builds' ? 0.9 : 0.7,
  }));
}
