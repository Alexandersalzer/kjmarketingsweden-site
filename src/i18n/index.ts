import { SV_TO_EN } from './translations';

export type Lang = 'sv' | 'en';
export const LANGS: Lang[] = ['sv', 'en'];
export const DEFAULT_LANG: Lang = 'sv';

export function isLang(v: string | undefined): v is Lang {
  return v === 'sv' || v === 'en';
}

/**
 * Manual translations for strings not present in the production content export
 * (custom copy, form messages, metadata, and the extra "Resultat" nav link /
 * "Kontakta oss" button that the production navbar doesn't have).
 * These take precedence over the auto-generated map.
 */
const OVERRIDES: Record<string, string> = {
  // nav / buttons
  'Resultat': 'Results',
  'Kontakta oss': 'Contact us',
  'Skicka meddelande': 'Send message',
  'Kontakta Oss': 'Contact Us',
  // portfolio page
  'Bläddra igenom mina bäst presterande UGC-innehåll och framgångsrika kampanjer som har genererat miljontals visningar och konverteringar.':
    'Browse through my best-performing UGC content and successful campaigns that have generated millions of views and conversions.',
  // tjänster hero (our variant differs slightly from production copy)
  'Vi är en UGC-byrå som producerar högpresterande videos och tar ansvar för hela kedjan – från kreatör och produktion till annonsering och optimering.':
    "We're a UGC agency that produces high-performing videos and takes responsibility for the entire chain – from creator and production to advertising and optimization.",
  // kontakt page
  'Låt oss skala ditt varumärke': "Let's scale your brand",
  'Boka ett gratis strategimöte eller skicka ett meddelande. Vi svarar inom 24 timmar.':
    'Book a free strategy meeting or send a message. We reply within 24 hours.',
  'Föredrar du e-post?': 'Prefer email?',
  // contact form messages
  'Tack! Vi hör av oss inom 24 timmar.': "Thank you! We'll be in touch within 24 hours.",
  'Något gick fel. Försök igen eller maila oss direkt.':
    'Something went wrong. Please try again or email us directly.',
  // metadata
  'UGC-byrå för video, sociala medier och annonsering. 50+ handplockade kreatörer och bevisad ROI.':
    'UGC agency for video, social media and advertising. 50+ handpicked creators and proven ROI.',
  'Videoportfolio - 200+ Professionella UGC-videor':
    'Video portfolio - 200+ professional UGC videos',
  'Utforska vårt portfolio med över 200 UGC-videor. TikTok-kampanjer, Instagram Reels, intervjuer och viralt innehåll från 50+ kreatörer.':
    'Explore our portfolio of 200+ UGC videos. TikTok campaigns, Instagram Reels, interviews and viral content from 50+ creators.',
  'Se konkreta resultat från våra UGC-kampanjer. 100M+ visningar, 200+ kampanjer, upp till 35X ROAS.':
    'See concrete results from our UGC campaigns. 100M+ views, 200+ campaigns, up to 35X ROAS.',
  'UGC Videos, Social Media Management och Paid Advertising. Skräddarsydda upplägg från strategi till skalning.':
    'UGC Videos, Social Media Management and Paid Advertising. Tailored setups from strategy to scaling.',
  'Redo att skala ditt varumärke? Boka ett gratis strategimöte eller skicka ett meddelande. Vi svarar inom 24 timmar.':
    'Ready to scale your brand? Book a free strategy meeting or send a message. We reply within 24 hours.',
  // footer
  '© 2026 KJ Marketing Sweden AB 559528-9629. Alla rättigheter förbehållna.':
    '© 2026 KJ Marketing Sweden AB 559528-9629. All rights reserved.',
  // contact form
  'Namn': 'Name',
  'Förnamn': 'First name',
  'Företag': 'Company',
  'Företagsnamn': 'Company name',
  'E-post': 'Email',
  'Telefon': 'Phone',
  'Telefonnummer': 'Phone number',
  'Meddelande': 'Message',
  'Vad vill du FÅ ut av detta?': 'What do you want to GET out of this?',
  'Skickar…': 'Sending…',
  // awards
  'Årets Award 2026': 'Award of the Year 2026',
  'Utmärkelse': 'Award',
  'Tilldelad av Star Business Awards för sund ekonomi, lönsamhet och tydlig riktning framåt.':
    'Awarded by Star Business Awards for sound finances, profitability and a clear direction forward.',
  'Verifiera utmärkelsen': 'Verify the award',
  // masonry grid show more/less
  'Visa mer': 'Show more',
  'Visa färre': 'Show less',
  // kontakt page
  'Skicka ett meddelande': 'Send a message',
  'Berätta kort om ditt företag och dina mål, så hör vi av oss inom 24 timmar.':
    "Tell us briefly about your company and goals, and we'll be in touch within 24 hours.",
};

const MAP: Record<string, string> = { ...SV_TO_EN, ...OVERRIDES };

/**
 * Translate a Swedish source string. For Swedish, returns the input unchanged
 * (so Swedish output is byte-identical); for English, returns the mapped
 * translation, falling back to the Swedish string if none exists.
 */
export function t(sv: string, lang: Lang): string {
  if (lang === 'sv') return sv;
  return MAP[sv] ?? sv;
}

/** Prefix a root-relative path with the locale base ('' for sv, '/en' for en). */
export function localePath(lang: Lang, path: string): string {
  if (lang === 'sv') return path;
  return path === '/' ? '/en' : `/en${path}`;
}

/** Strip the locale prefix from a pathname to get the Swedish (base) path. */
export function basePath(pathname: string): string {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname;
}
