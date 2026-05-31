'use client';

import Script from 'next/script';

/**
 * Embeds the official Trustpilot review collector widget.
 * This is a third-party iframe that Trustpilot styles itself — no design-system
 * component covers this, so we use the vendor snippet directly.
 */
export function TrustpilotWidget({
  businessUnitId,
  locale = 'sv-SE',
  stars = '5',
  templateId = '56278e9abfbbba0bdcd568bc',
  height = '52px',
  width = '100%',
}: {
  businessUnitId: string;
  locale?: string;
  stars?: string;
  templateId?: string;
  height?: string;
  width?: string;
}) {
  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />
      <div
        className="trustpilot-widget"
        data-locale={locale}
        data-template-id={templateId}
        data-businessunit-id={businessUnitId}
        data-style-height={height}
        data-style-width={width}
        data-stars={stars}
      >
        <a
          href={`https://www.trustpilot.com/review/${businessUnitId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
}
