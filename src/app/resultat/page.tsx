import type { Metadata } from 'next';
import {
  Section,
  Container,
  VStack,
  HStack,
  Grid,
  GridItem,
  Card,
  Box,
  Heading,
  Body,
  Image,
  CountUp,
  Divider,
} from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';
import {
  resultsGridCells,
  resultsCards,
  tiktokThumbnails,
  resultsStats,
} from '@/data/assets';

export const metadata: Metadata = {
  title: 'Våra Resultat',
  description:
    'Se konkreta resultat från våra UGC-kampanjer. 100M+ visningar, 200+ kampanjer, upp till 35X ROAS.',
};

function parseStat(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d.,]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseFloat(match[1].replace(',', '.')), suffix: match[2] };
}

export default function ResultatPage() {
  return (
    <>
      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              isHero
              heading="Våra Resultat"
              body="Utforska våra bäst presterande kampanjer och se hur vi har hjälpt företag att växa med UGC-videos, social media management och paid advertising."
            />

            <Card padding="lg" radius="md" variant="outlined">
              <HStack spacing="lg" justify="center" wrap>
                {resultsStats.map((s, i) => {
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
                      {i < resultsStats.length - 1 ? <Divider orientation="vertical" /> : null}
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
              heading="Utvalda kampanjresultat"
              body="Tre konkreta exempel på vad rätt strategi + rätt creatives kan göra."
            />

            <Box
              display="grid"
              gap="lg"
              style={{
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridAutoRows: '450px',
              }}
            >
              {resultsGridCells.map((cell, i) => (
                <Box
                  key={i}
                  display="flex"
                  direction="column"
                  gap="sm"
                  style={{
                    gridColumn: `span ${cell.colSpan}`,
                    gridRow: `span ${cell.rowSpan}`,
                    minHeight: 0,
                  }}
                >
                  <Box
                    grow
                    style={{
                      minHeight: 0,
                      overflow: 'hidden',
                      borderRadius: 'var(--radius-md, 12px)',
                    }}
                  >
                    <Image
                      src={cell.image}
                      alt={cell.imageAlt}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                    />
                  </Box>
                  <Heading level={4} weight="bold">{cell.heading}</Heading>
                  <Body size="sm" color="secondary">{cell.body}</Body>
                </Box>
              ))}
            </Box>
          </VStack>
        </Container>
      </Section>

      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading="Fler resultat från riktiga kampanjer"
              body="Varje case nedan är från ett samarbete vi kört. Klicka för fler detaljer på kontaktsidan."
            />
            <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="lg">
              {resultsCards.map((r) => (
                <GridItem key={r.id}>
                  <Card padding="none" radius="md" variant="outlined">
                    <VStack spacing="sm" align="stretch">
                      <Image
                        src={r.image}
                        alt={r.heading}
                        aspectRatio="16/10"
                        radius="md"
                        objectFit="cover"
                      />
                      <VStack spacing="xs" align="start" style={{ padding: '0 0.75rem 0.75rem' }}>
                        <Body size="sm" color="accent" weight="semibold">{r.subhead}</Body>
                        <Heading level={5} weight="bold">{r.heading}</Heading>
                        <Body size="sm" color="secondary">{r.body}</Body>
                      </VStack>
                    </VStack>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Section>

      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading="TikTok-takeovers vi kört"
              body="Skräddarsytt TikTok-innehåll för att öka kundens följare och engagemang."
            />
            <Grid columns={{ base: 2, md: 3, lg: 5 }} gap="md">
              {tiktokThumbnails.map((t) => (
                <GridItem key={t.id}>
                  <Card padding="none" radius="md" variant="outlined">
                    <VStack spacing="sm" align="stretch">
                      <Image
                        src={t.image}
                        alt={t.heading}
                        aspectRatio="9/16"
                        radius="md"
                        objectFit="cover"
                      />
                      <VStack spacing="xs" align="start" style={{ padding: '0 0.5rem 0.5rem' }}>
                        <Body size="sm" color="accent" weight="semibold">TikTok</Body>
                        <Body size="sm" weight="semibold">{t.heading}</Body>
                      </VStack>
                    </VStack>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Section>

      <Section id="contact" spacing="2xl">
        <Container width="form">
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading="Redo att Uppnå Liknande Resultat?"
              body="Boka ett gratis strategimöte och upptäck hur våra UGC-kreatörer och social media-expertis kan hjälpa ditt varumärke uppnå liknande tillväxt."
            />
            <ContactForm
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
