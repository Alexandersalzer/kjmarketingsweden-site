import type { Metadata } from 'next';
import { seo, type SeoRoute } from '@/data/seo';
import { localePath, type Lang } from '@/i18n';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kjmarketingsweden.com';
export const SITE_NAME = 'KJ MARKETING SWEDEN';

const CDN_FAVICON =
  'https://d2bn17anh9ekeg.cloudfront.net/members/d3c21136-9b1a-43fc-9f88-2cd1a14a7c15/favicon';

const OG_LOCALE: Record<Lang, string> = { sv: 'sv_SE', en: 'en_US' };

// The production /images/og-*.jpg share images return 403 and aren't in the
// repo, so og:image/twitter:image use the brand logo on the CDN instead (an
// accessible asset) — link previews show the brand rather than a blank box.
export const BRAND_OG_IMAGE =
  'https://d2bn17anh9ekeg.cloudfront.net/members/d3c21136-9b1a-43fc-9f88-2cd1a14a7c15/images/logos/tlogotext26d.png';

// Favicon set + manifest hosted on the CDN — identical to the production site.
export const siteIcons: Metadata['icons'] = {
  icon: [
    { url: `${CDN_FAVICON}/favicon.ico`, sizes: 'any' },
    { url: `${CDN_FAVICON}/favicon-16x16.png`, type: 'image/png', sizes: '16x16' },
    { url: `${CDN_FAVICON}/favicon-32x32.png`, type: 'image/png', sizes: '32x32' },
    { url: `${CDN_FAVICON}/android-chrome-192x192.png`, type: 'image/png', sizes: '192x192' },
    { url: `${CDN_FAVICON}/android-chrome-512x512.png`, type: 'image/png', sizes: '512x512' },
  ],
  apple: [{ url: `${CDN_FAVICON}/apple-touch-icon.png`, sizes: '180x180' }],
  shortcut: [`${CDN_FAVICON}/favicon.ico`],
};

export const siteManifest = `${CDN_FAVICON}/site.webmanifest`;

/** Per-page metadata (title/description/keywords/OG/Twitter/canonical/hreflang). */
export function pageMetadata(route: SeoRoute, lang: Lang, path: string): Metadata {
  const s = seo[route][lang];
  const url = SITE_URL + localePath(lang, path);
  const ogImages = [BRAND_OG_IMAGE];
  return {
    // Absolute so it's consistent on the home route too (Next's title.template
    // does not apply to a page in the same segment as the layout defining it).
    title: { absolute: `${s.title} | ${SITE_NAME}` },
    description: s.description,
    keywords: s.keywords,
    alternates: {
      canonical: url,
      languages: {
        'sv-SE': SITE_URL + localePath('sv', path),
        'en-US': SITE_URL + localePath('en', path),
      },
    },
    openGraph: {
      title: s.ogTitle,
      description: s.ogDescription,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      type: 'website',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: s.twitterTitle ?? s.ogTitle,
      description: s.twitterDescription ?? s.ogDescription,
      images: ogImages,
    },
  };
}
