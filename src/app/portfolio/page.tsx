import type { Metadata } from 'next';
import {
  Section,
  Container,
  VStack,
  HStack,
  Card,
  Body,
  CountUp,
  Divider,
} from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { portfolioStats } from '@/data/assets';

export const metadata: Metadata = {
  title: 'Videoportfolio - 200+ Professionella UGC-videor',
  description:
    'Utforska vårt portfolio med över 200 UGC-videor. TikTok-kampanjer, Instagram Reels, intervjuer och viralt innehåll från 50+ kreatörer.',
};

function parseStat(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d.,]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseFloat(match[1].replace(',', '.')), suffix: match[2] };
}

export default function PortfolioPage() {
  return (
    <>
      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              isHero
              heading="Videoportfolio"
              body="Bläddra igenom mina bäst presterande UGC-innehåll och framgångsrika kampanjer som har genererat miljontals visningar och konverteringar."
            />

            <Card padding="lg" radius="md" variant="outlined">
              <HStack spacing="lg" justify="center" wrap>
                {portfolioStats.map((s, i) => {
                  const { num, suffix } = parseStat(s.value);
                  return (
                    <HStack key={s.label} spacing="lg" align="center">
                      <VStack spacing="xs" align="center">
                        <CountUp
                          end={num}
                          suffix={suffix}
                          duration={2}
                          enableScrollTrigger
                          triggerOffset={100}
                          variant="display-sm"
                          weight="bold"
                          align="center"
                        />
                        <Body size="sm" color="secondary" align="center">{s.label}</Body>
                      </VStack>
                      {i < portfolioStats.length - 1 ? <Divider orientation="vertical" /> : null}
                    </HStack>
                  );
                })}
              </HStack>
            </Card>
          </VStack>
        </Container>
      </Section>

      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading="Utvalda kampanjer"
              body="Klicka på en kategori för att filtrera."
            />
            <PortfolioGallery />
          </VStack>
        </Container>
      </Section>

      <Section id="contact" spacing="2xl">
        <Container width="form">
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading="Redo att Skala Ditt Varumärke?"
              body="Vi hjälper dig växa genom hela annonsresan - från strategi och brief, till att skapa innehållet, till att köra och optimera dina annonser."
            />
            <ContactForm
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
