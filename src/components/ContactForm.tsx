'use client';

import { useState } from 'react';
import { VStack, Grid, GridItem, Input, Textarea, Button, Body } from '@/lib/ui';

type FbqFn = (event: string, name: string, params?: Record<string, unknown>) => void;

type ContactFormProps = {
  submitLabel?: string;
  pixelEvent?: {
    event: string;
    parameters?: Record<string, string>;
  };
};

export function ContactForm({
  submitLabel = 'Skicka',
  pixelEvent,
}: ContactFormProps) {
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
        const fbq = (window as unknown as { fbq?: FbqFn }).fbq;
        if (fbq) fbq('track', pixelEvent.event, pixelEvent.parameters);
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
              label="Namn"
              placeholder="Förnamn"
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
              label="Företag"
              placeholder="Företagsnamn"
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
          label="E-post"
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
          label="Telefon"
          placeholder="Telefonnummer"
          variant="bordered"
          radius="md"
          size="md"
          fullWidth
        />
        <Textarea
          name="message"
          label="Meddelande"
          placeholder="Vad vill du FÅ ut av detta?"
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
          {status === 'sending' ? 'Skickar…' : submitLabel}
        </Button>
        {status === 'success' ? (
          <Body color="success" role="status">
            Tack! Vi hör av oss inom 24 timmar.
          </Body>
        ) : null}
        {status === 'error' ? (
          <Body color="error" role="alert">
            Något gick fel. Försök igen eller maila oss direkt.
          </Body>
        ) : null}
      </VStack>
    </form>
  );
}
