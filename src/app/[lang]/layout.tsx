import '../globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { ThemeSync } from '@blimpify-im/ui/design';
import { CookieConsent, ConsentProvider, MarketingPixels } from '@/lib/ui';
import { loadDesign } from '@/lib/design';
import { marketingPixels, OPENAI_PIXEL_ID } from '@/data/assets';
import { OpenAIPixel } from '@/components/OpenAIPixel';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LANGS, isLang, type Lang } from '@/i18n';
import { SITE_URL, SITE_NAME, siteIcons, siteManifest } from '@/lib/seo';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: '%s | KJ MARKETING SWEDEN',
  },
  icons: siteIcons,
  manifest: siteManifest,
};

const attr = (v: unknown): string | undefined =>
  v === undefined || v === null ? undefined : String(v);

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang: Lang = raw;
  const { snippet, tokens } = await loadDesign();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className="theme-pending"
      data-theme={snippet.themeMode === 'dark' ? 'dark' : 'light'}
      data-theme-mode={snippet.themeMode}
      data-theme-tone={snippet.themeTone}
      data-accent-color={snippet.accentColor}
      {...(snippet.accentColor === 'inverse' ? { 'data-accent-mode': 'inverse' } : {})}
      data-radius={attr(tokens.radius)}
      data-form-width={attr(tokens.formWidth)}
      data-layout-content={attr(tokens.layoutContent)}
      data-layout-media={attr(tokens.layoutMedia)}
      data-navbar-spacing={attr(tokens.navbarSpacing)}
      data-section-spacing={attr(tokens.sectionSpacing)}
      data-container-spacing={attr(tokens.containerSpacing)}
      data-typography-scale={attr(tokens.typographyScale)}
    >
      <head>
        {/* Load the brand font (Outfit) via a real stylesheet link — reliable
            regardless of the @import inside the injected design CSS. The design
            tokens set font-heading-family to Outfit; this guarantees it loads. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
        />
        <style id="design-css" dangerouslySetInnerHTML={{ __html: snippet.css }} />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body>
        <ThemeSync />
        <ConsentProvider>
          <Navbar lang={lang} />
          <main>{children}</main>
          <Footer lang={lang} />
          <CookieConsent locale={lang} position="bottom-left" />
          <MarketingPixels pixels={marketingPixels} />
          <OpenAIPixel pixelId={OPENAI_PIXEL_ID} />
        </ConsentProvider>
      </body>
    </html>
  );
}
