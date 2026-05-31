import Link from 'next/link';
import {
  Section,
  Container,
  VStack,
  HStack,
  Grid,
  GridItem,
  MasonryGrid,
  Box,
  Card,
  Heading,
  Body,
  Button,
  Image,
  Logo,
  Avatar,
  Stars,
  VideoShowcase,
  CarouselAnimation,
  CountUp,
} from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { BookCalendlyButton } from '@/components/BookCalendlyButton';
import { ContactForm } from '@/components/ContactForm';
import { TrustpilotWidget } from '@/components/TrustpilotWidget';
import {
  heroVideo,
  heroLogos,
  portfolioCarouselItems,
  servicesPreview,
  resultsGridCells,
  testimonials,
  TRUSTPILOT_BUSINESS_UNIT_ID,
} from '@/data/assets';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <Results />
      <Testimonials />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <Section spacing="2xl">
      <Container>
        <VStack spacing="2xl" align="stretch">
          <VStack spacing="lg" align="center">
            <SectionHeader
              isHero
              heading="Performance byrå för tillväxt och försäljning"
              body="Vi driver mätbar tillväxt genom Meta Ads och paid social – med ett team av 50+ handplockade kreatörer som producerar annonsmaterialet som faktiskt konverterar."
            />
            <BookCalendlyButton label="Boka ett möte" size="lg" variant="accent" />
          </VStack>

          <VStack spacing="sm" align="center">
            <Body size="sm" color="tertiary" align="center">
              Företag vi samarbetat med
            </Body>
            <Box width="full">
              <CarouselAnimation
                speed={60}
                direction="left"
                duplicateCount={3}
                enableFadeEdges
                fadeWidth="100px"
                gap="3rem"
                items={heroLogos.map((logo, i) => ({
                  id: `hero-logo-${i}`,
                  content: (
                    <Logo
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                    />
                  ),
                }))}
              />
            </Box>
          </VStack>

          <Container width="form" noPadding>
            <VideoShowcase
              src={heroVideo.src}
              poster={heroVideo.poster}
              aspectRatio="2-3"
              radius="md"
            />
          </Container>
        </VStack>
      </Container>
    </Section>
  );
}

function Portfolio() {
  return (
    <Section id="portfolio" spacing="2xl">
      <Container>
        <VStack spacing="2xl" align="stretch">
          <VStack spacing="md" align="center">
            <CountUp
              end={100000000}
              suffix="+"
              separator=" "
              duration={2.5}
              enableScrollTrigger
              triggerOffset={100}
              variant="display-md"
              weight="bold"
              align="center"
            />
            <Body size="lg" color="secondary" align="center">
              Organiska visningar 2025 – genererade av 50+ handplockade UGC-kreatörer i hela Europa
            </Body>
          </VStack>

          <CarouselAnimation
            speed={50}
            direction="left"
            duplicateCount={2}
            enableFadeEdges
            fadeWidth="100px"
            itemWidth="280px"
            gap="1rem"
            items={portfolioCarouselItems.map((item, i) => {
              const img = (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={280}
                  height={420}
                  radius="md"
                  objectFit="cover"
                />
              );
              return {
                id: `portfolio-${i}`,
                content: item.href ? <Link href={item.href}>{img}</Link> : img,
              };
            })}
          />

          <HStack justify="center">
            <Link href="/portfolio" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="lg">Se Vår Kompletta Portfölj</Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Section>
  );
}

function Services() {
  return (
    <Section spacing="2xl">
      <Container>
        <VStack spacing="2xl" align="stretch">
          <SectionHeader
            heading="Våra Tjänster"
            body="Från autentiska UGC-videos till strategisk social media-hantering – vi hjälper e-handel och varumärken att växa med content som konverterar."
          />

          <VStack spacing="2xl" align="stretch">
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
                    <Body size="sm" color="secondary" weight="semibold">
                      {row.subhead}
                    </Body>
                    <Heading level={3} weight="bold">
                      {row.heading}
                    </Heading>
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

          <HStack justify="center">
            <Link href="/tjanster" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="lg">Se Alla Tjänster</Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Section>
  );
}

function Results() {
  return (
    <Section spacing="2xl">
      <Container>
        <VStack spacing="2xl" align="stretch">
          <SectionHeader
            heading="Bevisad tillväxt med Meta ads, creators och strategi"
            body="Tack vare vårt starka kreativa team av ledande experter."
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

          <HStack justify="center">
            <Link href="/resultat" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="lg">Visa Mer Resultat</Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section spacing="2xl">
      <Container>
        <VStack spacing="2xl" align="stretch">
          <SectionHeader
            tag="Recensioner"
            heading="Betrodd av Ledande Varumärken"
            body="Sedan 2018 har våra kreatörer byggt förtroende hos miljontals tittare. Vårt nätverk av handplockade UGC-kreatörer ger ditt varumärke autenticitet och trovärdighet som driver konverteringar."
          />

          <MasonryGrid columns={{ base: 1, md: 2, lg: 3 }} gap="lg">
            {testimonials.map((t) => (
              <a
                key={t.id}
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card variant="outlined" padding="md" radius="md">
                  <VStack spacing="md" align="start">
                    <HStack spacing="md" align="center">
                      <Avatar name={t.author} src={t.avatarSrc} size="md" shape="full" />
                      <VStack spacing="xs" align="start">
                        <Body size="md" weight="semibold">{t.author}</Body>
                        <Body size="sm" color="tertiary">Trustpilot</Body>
                        <Stars rating={t.rating} size="sm" />
                      </VStack>
                    </HStack>
                    <Body size="md">{t.review}</Body>
                  </VStack>
                </Card>
              </a>
            ))}
          </MasonryGrid>

          <TrustpilotWidget businessUnitId={TRUSTPILOT_BUSINESS_UNIT_ID} locale="sv-SE" />
        </VStack>
      </Container>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" spacing="2xl">
      <Container width="form">
        <VStack spacing="2xl" align="stretch">
          <SectionHeader
            heading="Redo att Skala Ditt Varumärke?"
            body="Vi hjälper dig växa genom hela annonsresan - från strategi och brief, till att skapa innehållet, till att köra och optimera dina annonser. Du fokuserar på ditt varumärke. Vi fixar resten."
          />
          <ContactForm
            pixelEvent={{
              event: 'Lead',
              parameters: {
                content_name: 'Kontaktformulär - Hem',
                content_category: 'Lead Generation',
              },
            }}
          />
        </VStack>
      </Container>
    </Section>
  );
}
