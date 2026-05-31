import type { Metadata } from 'next';
import { Section, Container, VStack, HStack, Card, Body } from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { BookCalendlyButton } from '@/components/BookCalendlyButton';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakta Oss',
  description:
    'Redo att skala ditt varumärke? Boka ett gratis strategimöte eller skicka ett meddelande. Vi svarar inom 24 timmar.',
};

export default function KontaktPage() {
  return (
    <>
      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="center">
            <SectionHeader
              isHero
              heading="Låt oss skala ditt varumärke"
              body="Boka ett gratis strategimöte eller skicka ett meddelande. Vi svarar inom 24 timmar."
            />
            <BookCalendlyButton label="Boka ett möte" size="lg" variant="accent" />
          </VStack>
        </Container>
      </Section>

      <Section id="contact" spacing="2xl">
        <Container width="form">
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading="Skicka ett meddelande"
              body="Berätta kort om ditt företag och dina mål, så hör vi av oss inom 24 timmar."
            />
            <ContactForm
              pixelEvent={{
                event: 'Lead',
                parameters: {
                  content_name: 'Kontaktformulär - Kontakt',
                  content_category: 'Lead Generation',
                },
              }}
            />
          </VStack>
        </Container>
      </Section>

      <Section spacing="2xl">
        <Container>
          <Card padding="lg" radius="md" variant="outlined">
            <VStack spacing="md" align="center">
              <Body size="md" color="secondary" align="center">
                Föredrar du e-post?
              </Body>
              <HStack spacing="md" justify="center" wrap>
                <Body size="lg" weight="semibold">info@kjmarketingsweden.com</Body>
              </HStack>
            </VStack>
          </Card>
        </Container>
      </Section>
    </>
  );
}
