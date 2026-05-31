import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Section,
  Container,
  VStack,
  HStack,
  Grid,
  GridItem,
  Card,
  Heading,
  Body,
  Button,
  Image,
} from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { BookCalendlyButton } from '@/components/BookCalendlyButton';
import { ContactForm } from '@/components/ContactForm';
import { ServiceProcessTabs } from '@/components/ServiceProcessTabs';
import { servicesPreview, tjansterProcesses } from '@/data/assets';

export const metadata: Metadata = {
  title: 'Våra Tjänster',
  description:
    'UGC Videos, Social Media Management och Paid Advertising. Skräddarsydda upplägg från strategi till skalning.',
};

export default function TjansterPage() {
  return (
    <>
      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="center">
            <SectionHeader
              isHero
              heading="UGC-byrå för video, sociala medier och annonsering"
              body="Vi är en UGC-byrå som producerar högpresterande videos och tar ansvar för hela kedjan – från kreatör och produktion till annonsering och optimering."
            />
            <BookCalendlyButton label="Boka strategimöte" size="lg" variant="accent" />
          </VStack>
        </Container>
      </Section>

      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading="Tre tjänster, ett mål"
              body="Vi formar paketen efter ditt nuläge. Ta dem enskilt eller som en helhet."
            />

            {servicesPreview.map((row, i) => {
              const imageCell = (
                <GridItem key="img" colSpan={1}>
                  <Card padding="none" radius="md">
                    <Image
                      src={row.image}
                      alt={row.imageAlt}
                      aspectRatio="1/1"
                      radius="md"
                      objectFit="cover"
                      objectPosition="top left"
                    />
                  </Card>
                </GridItem>
              );
              const textCell = (
                <GridItem key="text" colSpan={1}>
                  <VStack spacing="sm" align="start" justify="center" style={{ height: '100%' }}>
                    <Body size="sm" color="secondary" weight="semibold">{row.subhead}</Body>
                    <Heading level={3} weight="bold">{row.heading}</Heading>
                    <Body>{row.description}</Body>
                  </VStack>
                </GridItem>
              );
              return (
                <Grid key={i} columns={{ base: 1, md: 2, lg: 2 }} gap="xl">
                  {row.reverse ? [textCell, imageCell] : [imageCell, textCell]}
                </Grid>
              );
            })}
          </VStack>
        </Container>
      </Section>

      <Section spacing="2xl">
        <Container>
          <VStack spacing="2xl" align="stretch">
            <SectionHeader
              heading="Vår Process – Från Första Kontakt Till Resultat"
              body="Vi tar ansvar för hela kedjan. Från strategisk planering och produktion till aktivering och optimering – varje steg är designat för att maximera ditt resultat."
            />

            <ServiceProcessTabs processes={tjansterProcesses} />
          </VStack>
        </Container>
      </Section>

      <Section spacing="2xl">
        <Container>
          <VStack spacing="lg" align="center">
            <SectionHeader
              heading="Redo att skala med UGC som faktiskt konverterar?"
              body="Boka ett gratis strategimöte och upptäck hur våra processer, kreatörer och performance-fokus kan driva resultat för ditt varumärke."
            />
            <HStack spacing="md" justify="center" wrap>
              <BookCalendlyButton label="Boka strategimöte" size="lg" variant="accent" />
              <Link href="/kontakt" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="lg">Skicka meddelande</Button>
              </Link>
            </HStack>
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
