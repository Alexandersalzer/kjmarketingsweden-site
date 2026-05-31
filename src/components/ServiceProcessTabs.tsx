'use client';

import { useState } from 'react';
import {
  VStack,
  Grid,
  GridItem,
  Card,
  Heading,
  Body,
  SegmentedControl,
} from '@/lib/ui';
import type { ServiceProcess } from '@/data/assets';

type Props = { processes: ServiceProcess[] };

export function ServiceProcessTabs({ processes }: Props) {
  const [active, setActive] = useState(processes[0]?.service ?? '');
  const current = processes.find((p) => p.service === active) ?? processes[0];

  return (
    <VStack spacing="xl" align="stretch">
      <SegmentedControl
        value={active}
        onChange={setActive}
        options={processes.map((p) => ({ value: p.service, label: p.service }))}
        size="md"
      />

      <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="lg">
        {current.steps.map((s) => (
          <GridItem key={s.num}>
            <Card padding="lg" radius="md" variant="outlined">
              <VStack spacing="sm" align="start">
                <Body size="sm" color="accent" weight="semibold">Steg {s.num}</Body>
                <Heading level={4} weight="bold">{s.heading}</Heading>
                <Body color="secondary">{s.body}</Body>
              </VStack>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
}
