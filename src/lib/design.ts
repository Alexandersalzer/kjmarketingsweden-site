/**
 * Resolves design tokens by reading public/design/design.json via
 * @blimpify-im/ui's getDesignConfig() and building the CSS snippet
 * that defines every --token variable the design system relies on.
 *
 * Used by the root layout to:
 *   1. Inject the generated CSS into <head>
 *   2. Set data-* attributes on <html> so token rules in dist/index.css match
 */
import { designSnippet, getDesignConfig } from '@blimpify-im/ui/design';

export type DesignSnippet = Awaited<ReturnType<typeof designSnippet>>;

type Design = {
  snippet: DesignSnippet;
  tokens: Record<string, unknown>;
};

// designSnippet() calls the Google Fonts metadata API (per font) with no
// timeout and does not cache failures, so without this memo it re-runs and
// blocks every request — which offline takes ~5s and keeps the dev HMR client
// refetching layout.css in a 404 loop. The design config is static (design.json
// doesn't change at runtime), so compute it once per process.
let designPromise: Promise<Design> | null = null;

async function computeDesign(): Promise<Design> {
  const [snippet, config] = await Promise.all([
    designSnippet(),
    getDesignConfig(),
  ]);
  return {
    snippet,
    tokens: (config?.globalStyles ?? {}) as Record<string, unknown>,
  };
}

export function loadDesign(): Promise<Design> {
  if (!designPromise) {
    designPromise = computeDesign().catch((err) => {
      designPromise = null;
      throw err;
    });
  }
  return designPromise;
}
