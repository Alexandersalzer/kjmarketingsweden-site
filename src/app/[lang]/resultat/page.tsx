import type { Metadata } from 'next';
import {
  Section,
  Container,
  VStack,
  HStack,
  Grid,
  Card,
  Heading,
  Body,
  Image,
  CountUp,
  Divider,
} from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';
import { resultsItems, resultsStats } from '@/data/assets';
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
  return pageMetadata('resultat', lang, '/resultat');
}

function parseStat(value: string): { num: number; suffix: string; decimals: number } {
  const match = value.match(/^([\d.,]+)(.*)$/);
  if (!match) return { num: 0, suffix: value, decimals: 0 };
  const raw = match[1].replace(',', '.');
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
  return { num: parseFloat(raw), suffix: match[2], decimals };
}

export default async function ResultatPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : 'sv';
  const tr = (s: string) => t(s, lang);
  const structuredData = seo.resultat[lang].structuredData;

  return (
    <>
      {structuredData ? <JsonLd data={structuredData} /> : null}
      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              isHero
              heading={tr('Våra Resultat')}
              body={tr('Utforska våra bäst presterande kampanjer och se hur vi har hjälpt företag att växa med UGC-videos, social media management och paid advertising.')}
            />

            <HStack spacing="lg" justify="center" wrap>
              {resultsStats.map((s, i) => {
                const { num, suffix, decimals } = parseStat(s.value);
                return (
                  <HStack key={s.label} spacing="lg" align="center">
                    <VStack spacing="xs" align="center">
                      <CountUp
                        end={num}
                        suffix={suffix}
                        decimals={decimals}
                        duration={2500}
                        enableScrollTrigger
                        triggerOffset={100}
                        variant="display-md"
                        weight="bold"
                        align="center"
                      />
                      <Body size="sm" color="secondary" align="center">{tr(s.label)}</Body>
                    </VStack>
                    {i < resultsStats.length - 1 ? <Divider orientation="vertical" /> : null}
                  </HStack>
                );
              })}
            </HStack>

            <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="lg" alignItems="start">
              {resultsItems.map((r) => (
                <VStack key={r.id} spacing="md" align="stretch">
                  <Card padding="sm" radius="lg" variant="elevated">
                    <Image
                      src={r.image}
                      alt={r.heading}
                      aspectRatio="2/3"
                      radius="md"
                      objectFit="cover"
                      width="full"
                    />
                  </Card>
                  <VStack spacing="sm" align="start">
                    <Heading level={4} weight="bold">{tr(r.heading)}</Heading>
                    <Body color="secondary" weight="semibold">{tr(r.subhead)}</Body>
                    <Body>{tr(r.body)}</Body>
                  </VStack>
                </VStack>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Section>

      <Section id="contact" spacing="2xl">
        <Container width="form">
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading={tr('Redo att Uppnå Liknande Resultat?')}
              body={tr('Boka ett gratis strategimöte och upptäck hur våra UGC-kreatörer och social media-expertis kan hjälpa ditt varumärke uppnå liknande tillväxt.')}
            />
            <ContactForm
              lang={lang}
              pixelEvent={{
                event: 'Lead',
                parameters: {
                  content_name: 'Kontaktformulär - Resultat',
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
