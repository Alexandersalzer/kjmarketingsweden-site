import type { Metadata } from 'next';
import { Section, Container, VStack, HStack, Card, Body } from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { BookCalendlyButton } from '@/components/BookCalendlyButton';
import { ContactForm } from '@/components/ContactForm';
import { t, isLang, type Lang } from '@/i18n';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { seo } from '@/data/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : 'sv';
  return pageMetadata('kontakt', lang, '/kontakt');
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : 'sv';
  const tr = (s: string) => t(s, lang);
  const structuredData = seo.kontakt[lang].structuredData;

  return (
    <>
      {structuredData ? <JsonLd data={structuredData} /> : null}
      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="center">
            <SectionHeader
              isHero
              heading={tr('Låt oss skala ditt varumärke')}
              body={tr('Boka ett gratis strategimöte eller skicka ett meddelande. Vi svarar inom 24 timmar.')}
            />
            <BookCalendlyButton label={tr('Boka ett möte')} size="lg" variant="accent" />
          </VStack>
        </Container>
      </Section>

      <Section id="contact" spacing="2xl">
        <Container width="form">
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading={tr('Skicka ett meddelande')}
              body={tr('Berätta kort om ditt företag och dina mål, så hör vi av oss inom 24 timmar.')}
            />
            <ContactForm
              lang={lang}
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
                {tr('Föredrar du e-post?')}
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
