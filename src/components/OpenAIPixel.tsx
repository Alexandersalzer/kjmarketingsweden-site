'use client';

import { useEffect, useRef } from 'react';
import { useConsent } from '@blimpify-im/ui/consent';

/**
 * OpenAI pixel loader. @blimpify-im/ui's MarketingPixels only whitelists
 * meta/tiktok/snapchat/google, so this mirrors its contract for OpenAI:
 * the script is injected only after the visitor has accepted marketing
 * cookies, never on first paint.
 */
export function OpenAIPixel({ pixelId }: { pixelId: string }) {
  const { consent, isLoading } = useConsent();
  const loadedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isLoading || !consent.marketing) return;
    if (loadedRef.current) return;
    if (!/^[a-zA-Z0-9_-]+$/.test(pixelId)) return;

    const w = window as unknown as { oaiq?: OaiqFn };
    if (w.oaiq) {
      loadedRef.current = true;
      return;
    }

    const queue = function (...args: unknown[]) {
      queue.q.push(args);
    } as OaiqFn;
    queue.q = [];
    w.oaiq = queue;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';
    script.onerror = () => {};
    document.head.appendChild(script);

    queue('init', { pixelId });
    loadedRef.current = true;
  }, [consent.marketing, isLoading, pixelId]);

  return null;
}

type OaiqFn = ((...args: unknown[]) => void) & { q: unknown[][] };

/** Fire an OpenAI pixel event; no-op when the pixel was never consented to. */
export function trackOpenAI(event: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { oaiq?: (...args: unknown[]) => void };
  if (w.oaiq) w.oaiq('measure', event, data);
}
