import '../globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { ThemeSync } from '@blimpify-im/ui/design';
import { CookieConsent, ConsentProvider } from '@/lib/ui';
import { loadDesign } from '@/lib/design';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LANGS, isLang, t, type Lang } from '@/i18n';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : 'sv';
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kjmarketingsweden.com',
    ),
    title: {
      default: 'KJ Marketing Sweden',
      template: '%s | KJ Marketing Sweden',
    },
    description: t(
      'UGC-byrå för video, sociala medier och annonsering. 50+ handplockade kreatörer och bevisad ROI.',
      lang,
    ),
  };
}

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
        </ConsentProvider>
      </body>
    </html>
  );
}
