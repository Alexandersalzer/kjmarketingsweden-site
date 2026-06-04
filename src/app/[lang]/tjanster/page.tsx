import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Section,
  Container,
  VStack,
  HStack,
  Grid,
  Card,
  Heading,
  Body,
  Button,
  VideoCameraIcon,
  UsersIcon,
  ChartBarIcon,
} from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { BookCalendlyButton } from '@/components/BookCalendlyButton';
import { ContactForm } from '@/components/ContactForm';
import { ServiceProcess } from '@/components/ServiceProcess';
import { serviceHighlights, tjansterProcesses } from '@/data/assets';
import { t, localePath, isLang, type Lang } from '@/i18n';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : 'sv';
  return pageMetadata('tjanster', lang, '/tjanster');
}

const HIGHLIGHT_ICONS = [VideoCameraIcon, UsersIcon, ChartBarIcon];

export default async function TjansterPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : 'sv';
  const tr = (s: string) => t(s, lang);

  return (
    <>
      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <VStack spacing="2xl" align="center">
              <SectionHeader
                isHero
                heading={tr('UGC-byrå för video, sociala medier och annonsering')}
                body={tr('Vi är en UGC-byrå som producerar högpresterande videos och tar ansvar för hela kedjan – från kreatör och produktion till annonsering och optimering.')}
              />
              <BookCalendlyButton label={tr('Boka strategimöte')} size="lg" variant="accent" />
            </VStack>

            <Grid columns={{ base: 1, md: 3 }} gap="lg">
              {serviceHighlights.map((s, i) => {
                const Icon = HIGHLIGHT_ICONS[i];
                return (
                  <Card key={s.title} variant="raised" padding="lg" radius="md">
                    <VStack spacing="sm" align="center">
                      <Icon width={36} height={36} />
                      <Heading level={3} weight="bold" align="center">{tr(s.title)}</Heading>
                      <Body align="center" color="secondary">{tr(s.subtitle)}</Body>
                    </VStack>
                  </Card>
                );
              })}
            </Grid>
          </VStack>
        </Container>
      </Section>

      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading={tr('Vår Process – Från Första Kontakt Till Resultat')}
              body={tr('Vi tar ansvar för hela kedjan. Från strategisk planering och produktion till aktivering och optimering – varje steg är designat för att maximera ditt resultat.')}
            />

            <ServiceProcess processes={tjansterProcesses} lang={lang} />
          </VStack>
        </Container>
      </Section>

      <Section spacing="2xl" background='raised'>
        <Container>
          <VStack spacing="lg" align="center">
            <SectionHeader
              heading={tr('Redo att skala med UGC som faktiskt konverterar?')}
              body={tr('Boka ett gratis strategimöte och upptäck hur våra processer, kreatörer och performance-fokus kan driva resultat för ditt varumärke.')}
            />
            <HStack spacing="md" justify="center" wrap>
              <BookCalendlyButton label={tr('Boka strategimöte')} size="lg" variant="accent" />
              <Link href={localePath(lang, '/kontakt')} style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="lg">{tr('Skicka meddelande')}</Button>
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Section>

      <Section id="contact" spacing="2xl">
        <Container width="form">
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading={tr('Redo att Skala Ditt Varumärke?')}
              body={tr('Vi hjälper dig växa genom hela annonsresan - från strategi och brief, till att skapa innehållet, till att köra och optimera dina annonser.')}
            />
            <ContactForm
              lang={lang}
              pixelEvent={{
                event: 'Lead',
                parameters: {
                  content_name: 'Kontaktformulär - Tjänster',
                  content_category: 'Lead Generation',
                },
              }}
            />
          </VStack>
        </Container>
      </Section>
    </>
  );
}
