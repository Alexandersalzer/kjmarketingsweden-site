import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { localePath } from '@/i18n';

const PATHS = ['/', '/portfolio', '/tjanster', '/resultat', '/kontakt'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: SITE_URL + localePath('sv', path),
    alternates: {
      languages: {
        'sv-SE': SITE_URL + localePath('sv', path),
        'en-US': SITE_URL + localePath('en', path),
      },
    },
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
