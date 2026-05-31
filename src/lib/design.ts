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

export async function loadDesign(): Promise<{
  snippet: DesignSnippet;
  tokens: Record<string, unknown>;
}> {
  const [snippet, config] = await Promise.all([
    designSnippet(),
    getDesignConfig(),
  ]);
  return {
    snippet,
    tokens: (config?.globalStyles ?? {}) as Record<string, unknown>,
  };
}
