'use client';

import { useState } from 'react';
import { VStack, Grid, GridItem, Input, Textarea, Button, Body } from '@/lib/ui';
import { t, type Lang } from '@/i18n';
import { trackOpenAI } from './OpenAIPixel';

type FbqFn = (event: string, name: string, params?: Record<string, unknown>) => void;
type TtqFn = { track: (event: string, params?: Record<string, unknown>) => void };

type ContactFormProps = {
  lang?: Lang;
  submitLabel?: string;
  pixelEvent?: {
    event: string;
    parameters?: Record<string, string>;
  };
};

export function ContactForm({
  lang = 'sv',
  submitLabel,
  pixelEvent,
}: ContactFormProps) {
  const tr = (s: string) => t(s, lang);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Bad response');
      setStatus('success');
      if (pixelEvent && typeof window !== 'undefined') {
        const w = window as unknown as { fbq?: FbqFn; ttq?: TtqFn };
        if (w.fbq) w.fbq('track', pixelEvent.event, pixelEvent.parameters);
        if (w.ttq) w.ttq.track('SubmitForm', pixelEvent.parameters);
        trackOpenAI('lead_created', { type: 'customer_action' });
      }
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing="md" align="stretch">
        <Grid columns={{ base: 1, md: 2, lg: 2 }} gap="md">
          <GridItem>
            <Input
              type="text"
              name="name"
              label={tr('Namn')}
              placeholder={tr('Förnamn')}
              variant="bordered"
              radius="md"
              size="md"
              fullWidth
              required
            />
          </GridItem>
          <GridItem>
            <Input
              type="text"
              name="business"
              label={tr('Företag')}
              placeholder={tr('Företagsnamn')}
              variant="bordered"
              radius="md"
              size="md"
              fullWidth
              required
            />
          </GridItem>
        </Grid>
        <Input
          type="email"
          name="email"
          label={tr('E-post')}
          placeholder="din@email.com"
          variant="bordered"
          radius="md"
          size="md"
          fullWidth
          required
        />
        <Input
          type="tel"
          name="phone"
          label={tr('Telefon')}
          placeholder={tr('Telefonnummer')}
          variant="bordered"
          radius="md"
          size="md"
          fullWidth
        />
        <Textarea
          name="message"
          label={tr('Meddelande')}
          placeholder={tr('Vad vill du FÅ ut av detta?')}
          variant="bordered"
          size="md"
          minRows={4}
          required
        />
        <Button
          type="submit"
          variant="accent"
          size="lg"
          radius="md"
          fullWidth
          loading={status === 'sending'}
        >
          {status === 'sending' ? tr('Skickar…') : (submitLabel ?? tr('Skicka'))}
        </Button>
        {status === 'success' ? (
          <Body color="success" role="status">
            {tr('Tack! Vi hör av oss inom 24 timmar.')}
          </Body>
        ) : null}
        {status === 'error' ? (
          <Body color="error" role="alert">
            {tr('Något gick fel. Försök igen eller maila oss direkt.')}
          </Body>
        ) : null}
      </VStack>
    </form>
  );
}
