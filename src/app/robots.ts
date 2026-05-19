import type { MetadataRoute } from 'next';

const BASE_URL = 'https://directive8020.top';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: 'directive8020.top',
  };
}
