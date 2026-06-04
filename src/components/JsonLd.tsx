// Renders a schema.org JSON-LD <script>, matching the production site's
// structured data. Server component — emitted into the document, not hydrated.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', ...data });
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
