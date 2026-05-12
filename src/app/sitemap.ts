import type { MetadataRoute } from 'next';

const BASE_URL = 'https://directive8020.top';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changefreq: string }[] = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/walkthrough/', priority: 0.9, changefreq: 'daily' },
    { path: '/all-endings/', priority: 0.9, changefreq: 'weekly' },
    { path: '/choices-consequences/', priority: 0.9, changefreq: 'weekly' },
    { path: '/save-everyone/', priority: 0.9, changefreq: 'weekly' },
    { path: '/trophy-guide/', priority: 0.9, changefreq: 'weekly' },
    { path: '/system-requirements/', priority: 0.7, changefreq: 'monthly' },
    { path: '/crashing-fix/', priority: 0.8, changefreq: 'daily' },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: page.priority,
  }));
}
