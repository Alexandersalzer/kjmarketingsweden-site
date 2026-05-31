import './globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { ThemeSync } from '@blimpify-im/ui/design';
import { loadDesign } from '@/lib/design';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kjmarketingsweden.com',
  ),
  title: {
    default: 'KJ Marketing Sweden',
    template: '%s | KJ Marketing Sweden',
  },
  description:
    'UGC-byrå för video, sociala medier och annonsering. 50+ handplockade kreatörer och bevisad ROI.',
};

const attr = (v: unknown): string | undefined =>
  v === undefined || v === null ? undefined : String(v);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { snippet, tokens } = await loadDesign();

  return (
    <html
      lang="sv"
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
