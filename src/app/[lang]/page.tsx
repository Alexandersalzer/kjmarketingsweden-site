import Link from 'next/link';
import {
  Section,
  Container,
  VStack,
  HStack,
  Grid,
  GridItem,
  Box,
  Card,
  Heading,
  Body,
  Button,
  Image,
  Logo,
  VideoShowcase,
  CarouselAnimation,
  CountUp,
  ResultFigure,
  type ResponsiveRatio,
} from '@/lib/ui';
import { SectionHeader } from '@/components/SectionHeader';
import { BookCalendlyButton } from '@/components/BookCalendlyButton';
import { ContactForm } from '@/components/ContactForm';
import { TrustpilotWidget } from '@/components/TrustpilotWidget';
import { ReviewColumns } from '@/components/ReviewColumns';
import {
  heroVideo,
  heroLogos,
  portfolioCarouselItems,
  servicesPreview,
  resultsGridCells,
  testimonials,
  TRUSTPILOT_BUSINESS_UNIT_ID,
} from '@/data/assets';
import type { Metadata } from 'next';
import { t, localePath, isLang, type Lang } from '@/i18n';
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
  return pageMetadata('home', lang, '/');
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang: Lang = isLang(raw) ? raw : 'sv';
  const tr = (s: string) => t(s, lang);
  const structuredData = seo.home[lang].structuredData;

  return (
    <>
      {structuredData ? <JsonLd data={structuredData} /> : null}
      <Hero lang={lang} tr={tr} />
      <Portfolio lang={lang} tr={tr} />
      <Services lang={lang} tr={tr} />
      <Results lang={lang} tr={tr} />
      <Testimonials lang={lang} tr={tr} />
      <Contact lang={lang} tr={tr} />
    </>
  );
}

type S = { lang: Lang; tr: (s: string) => string };

function Hero({ lang, tr }: S) {
  return (
    <Section spacing="sm" applyNavbarVoid>
      <Container>
        <VStack spacing="lg" align="stretch">
          <VStack spacing="lg" align="center">
            <SectionHeader
              isHero
              heading={tr('Performance byrå för tillväxt och försäljning')}
              body={tr('Vi driver mätbar tillväxt genom Meta Ads och paid social – med ett team av 50+ handplockade kreatörer som producerar annonsmaterialet som faktiskt konverterar.')}
            />
            <HStack spacing="md" align="center" justify="center" wrap>
              <BookCalendlyButton label={tr('Boka ett möte')} size="lg" variant="accent" />
              <Link href={localePath(lang, '/kontakt')} style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="lg">{tr('Kontakta oss')}</Button>
              </Link>
            </HStack>
          </VStack>

          <VStack spacing="sm" align="center">
            <Body size="sm" color="tertiary" align="center">
              {tr('Företag vi samarbetat med')}
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
        </VStack>
      </Container>

      <Container width="media">
        <VideoShowcase
          src={heroVideo.src}
          poster={heroVideo.poster}
          aspectRatio="16-9"
          radius="md"
        />
      </Container>
    </Section>
  );
}

function Portfolio({ lang, tr }: S) {
  return (
    <Section id="portfolio" spacing="sm">
      <Container width="media">
        <VStack spacing="lg" align="stretch">
          <VStack spacing="md" align="center">
            <CountUp
              end={100000000}
              suffix="+"
              separator=" "
              duration={2500}
              enableScrollTrigger
              triggerOffset={100}
              variant="display-lg"
              weight="bold"
              align="center"
            />
            <Body size="lg" color="secondary" align="center">
              {tr('Organiska visningar 2025 – genererade av 50+ handplockade UGC-kreatörer i hela Europa')}
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
                content: item.href ? <Link href={localePath(lang, item.href)}>{img}</Link> : img,
              };
            })}
          />

          <HStack justify="center">
            <Link href={localePath(lang, '/portfolio')} style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="lg">{tr('Se Vår Kompletta Portfölj')}</Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Section>
  );
}

function Services({ lang, tr }: S) {
  return (
    <Section spacing="sm">
      <Container>
        <VStack spacing="lg" align="stretch">
          <SectionHeader
            heading={tr('Våra Tjänster')}
            body={tr('Från autentiska UGC-videos till strategisk social media-hantering – vi hjälper e-handel och varumärken att växa med content som konverterar.')}
          />

          <VStack spacing="2xl" align="stretch">
            {servicesPreview.map((row, i) => (
              <HStack
                key={i}
                spacing="xl"
                align="center"
                mobileDirection="column"
                direction={row.reverse ? 'row-reverse' : 'row'}
              >
                <Box grow width="full">
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
                </Box>
                <Box grow width="full">
                  <VStack spacing="sm" align="start">
                    <Body size="sm" color="secondary" weight="semibold">
                      {tr(row.subhead)}
                    </Body>
                    <Heading level={3} weight="bold">
                      {tr(row.heading)}
                    </Heading>
                    <Body>{tr(row.description)}</Body>
                  </VStack>
                </Box>
              </HStack>
            ))}
          </VStack>

          <HStack justify="center">
            <Link href={localePath(lang, '/tjanster')} style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="lg">{tr('Se Alla Tjänster')}</Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Section>
  );
}

function Results({ lang, tr }: S) {
  const [hero, tiktok, meta] = resultsGridCells;

  const figure = (
    cell: (typeof resultsGridCells)[number],
    sizing: {
      ratio?: ResponsiveRatio;
      fill?: boolean;
      imageObjectPosition?: string;
    },
  ) => (
    <ResultFigure
      heading={tr(cell.heading)}
      metric={tr(cell.body)}
      imageSrc={lang === 'en' && cell.imageEn ? cell.imageEn : cell.image}
      imageAlt={cell.imageAlt}
      {...sizing}
    />
  );

  return (
    <Section spacing="sm">
      <Container>
        <VStack spacing="lg" align="stretch">
          <SectionHeader
            heading={tr('Bevisad tillväxt med Meta ads, creators och strategi')}
            body={tr('Tack vare vårt starka kreativa team av ledande experter.')}
          />

          <Grid columns={{ base: 1, md: 3 }} gap="lg" alignItems="stretch">
            <GridItem colSpan={{ base: 1, md: 2 }} height="full">
              {figure(hero, { ratio: { base: '16/10', md: '16/9' }, imageObjectPosition: 'center center' })}
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }} height="full">
              {figure(meta, { ratio: { base: '16/10', md: '3/1' } })}
            </GridItem>
            <GridItem height="full" className="result-figure-aside">
              {figure(tiktok, { fill: true, ratio: { base: '16/10' } })}
            </GridItem>
          </Grid>

          <HStack justify="center">
            <Link href={localePath(lang, '/resultat')} style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="lg">{tr('Visa mer resultat')}</Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Section>
  );
}

function Testimonials({ lang, tr }: S) {
  return (
    <Section spacing="sm">
      <Container>
        <VStack spacing="lg" align="stretch">
          <SectionHeader
            tag={tr('Recensioner')}
            heading={tr('Betrodd av Ledande Varum\u00e4rken')}
            body={tr('Sedan 2018 har v\u00e5ra kreat\u00f6rer byggt f\u00f6rtroende hos miljontals tittare. V\u00e5rt n\u00e4tverk av handplockade UGC-kreat\u00f6rer ger ditt varum\u00e4rke autenticitet och trov\u00e4rdighet som driver konverteringar.')}
          />

          <ReviewColumns reviews={testimonials} />

          <TrustpilotWidget
            businessUnitId={TRUSTPILOT_BUSINESS_UNIT_ID}
            locale={lang === 'en' ? 'en-GB' : 'sv-SE'}
          />
        </VStack>
      </Container>
    </Section>
  );
}

function Contact({ lang, tr }: S) {
  return (
    <Section id="contact" spacing="sm">
      <Container width="form">
        <VStack spacing="lg" align="stretch">
          <SectionHeader
            heading={tr('Redo att Skala Ditt Varumärke?')}
            body={tr('Vi hjälper dig växa genom hela annonsresan - från strategi och brief, till att skapa innehållet, till att köra och optimera dina annonser. Du fokuserar på ditt varumärke. Vi fixar resten.')}
          />
          <ContactForm
            lang={lang}
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
