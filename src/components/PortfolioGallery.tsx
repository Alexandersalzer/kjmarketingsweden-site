'use client';

import { useMemo, useState } from 'react';
import {
  VStack,
  Grid,
  GridItem,
  Card,
  Body,
  Heading,
  VideoShowcase,
  SegmentedControl,
  Tag,
  HStack,
} from '@/lib/ui';
import { PORTFOLIO_FILTERS, portfolioItems } from '@/data/assets';

export function PortfolioGallery() {
  const [filter, setFilter] = useState<string>(PORTFOLIO_FILTERS[0]);

  const visible = useMemo(() => {
    if (filter === PORTFOLIO_FILTERS[0]) return portfolioItems;
    return portfolioItems.filter((i) => i.categories.includes(filter));
  }, [filter]);

  return (
    <VStack spacing="xl" align="stretch">
      <SegmentedControl
        value={filter}
        onChange={setFilter}
        options={PORTFOLIO_FILTERS.map((c) => ({ value: c, label: c }))}
        size="md"
      />

      <Grid columns={{ base: 1, sm: 2, lg: 3 }} gap="lg">
        {visible.map((item) => (
          <GridItem key={item.id}>
            <Card padding="none" radius="md" variant="outlined">
              <VStack spacing="sm" align="stretch">
                <VideoShowcase
                  src={item.videoSrc}
                  poster={item.poster}
                  aspectRatio="9-16"
                  radius="md"
                />
                <VStack spacing="xs" align="start" style={{ padding: '0 0.75rem 0.75rem' }}>
                  <HStack spacing="xs" align="center">
                    <Tag size="small" variant="accent">{item.category}</Tag>
                    {item.flag ? (
                      <Body size="sm" color="tertiary">{item.flag}</Body>
                    ) : null}
                  </HStack>
                  <Heading level={5} weight="bold">{item.title}</Heading>
                  <Body size="sm" color="secondary">{item.description}</Body>
                </VStack>
              </VStack>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
}
