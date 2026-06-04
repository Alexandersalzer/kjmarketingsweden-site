import type { Metadata } from 'next';
import {
  Section,
  Container,
  VStack,
  HStack,
  Body,
  CountUp,
  Divider,
} from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { portfolioStats } from '@/data/assets';
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
  return pageMetadata('portfolio', lang, '/portfolio');
}

function parseStat(value: string): { num: number; suffix: string; decimals: number } {
  const match = value.match(/^([\d.,]+)(.*)$/);
  if (!match) return { num: 0, suffix: value, decimals: 0 };
  const raw = match[1].replace(',', '.');
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
  return { num: parseFloat(raw), suffix: match[2], decimals };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : 'sv';
  const tr = (s: string) => t(s, lang);
  const structuredData = seo.portfolio[lang].structuredData;

  return (
    <>
      {structuredData ? <JsonLd data={structuredData} /> : null}
      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              isHero
              heading={tr('Videoportfolio')}
              body={tr('Bläddra igenom mina bäst presterande UGC-innehåll och framgångsrika kampanjer som har genererat miljontals visningar och konverteringar.')}
            />

            <HStack spacing="lg" justify="center" wrap>
              {portfolioStats.map((s, i) => {
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
                    {i < portfolioStats.length - 1 ? <Divider orientation="vertical" /> : null}
                  </HStack>
                );
              })}
            </HStack>

            <PortfolioGallery lang={lang} />
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
                  content_name: 'Kontaktformulär - Portfolio',
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
