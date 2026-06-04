'use client';

import { useMemo, useState } from 'react';
import {
  VStack,
  Grid,
  Heading,
  Body,
  VideoShowcase,
  Tab,
  TabGroup,
} from '@/lib/ui';
import { PORTFOLIO_FILTERS, portfolioItems } from '@/data/assets';
import { t, type Lang } from '@/i18n';

export function PortfolioGallery({ lang }: { lang: Lang }) {
  // Filter values stay Swedish (they match item.categories); only labels translate.
  const [filter, setFilter] = useState<string>(PORTFOLIO_FILTERS[0]);

  const visible = useMemo(() => {
    if (filter === PORTFOLIO_FILTERS[0]) return portfolioItems;
    return portfolioItems.filter((i) => i.categories.includes(filter));
  }, [filter]);

  return (
    <VStack spacing="xl" align="stretch">
      <TabGroup variant="subtle" isAccent justify="center">
        {PORTFOLIO_FILTERS.map((c) => (
          <Tab
            key={c}
            variant="subtle"
            isAccent
            size="md"
            fontWeight="medium"
            isActive={filter === c}
            onClick={() => setFilter(c)}
          >
            {t(c, lang)}
          </Tab>
        ))}
      </TabGroup>

      <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="lg" alignItems="start">
        {visible.map((item) => (
          <VStack key={item.id} spacing="sm" align="start">
            <VideoShowcase
              src={item.videoSrc}
              poster={item.poster}
              aspectRatio="9-16"
              objectFit="cover"
              radius="md"
              variant="elevated"
              size="full"
              showPlayButton
              controls
              muted
              loop={false}
              flagCountry={item.flag}
            />
            <Body size="sm" weight="medium" color="secondary">{t(item.category, lang)}</Body>
            <Heading level={4} weight="bold">{t(item.title, lang)}</Heading>
            <Body size="sm">{t(item.description, lang)}</Body>
          </VStack>
        ))}
      </Grid>
    </VStack>
  );
}
