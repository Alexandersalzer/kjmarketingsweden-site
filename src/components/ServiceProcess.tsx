import {
  VStack,
  Grid,
  GridItem,
  Card,
  Heading,
  Body,
  NumberDisplay,
} from '@/lib/ui';
import type { ServiceProcess as ServiceProcessData } from '@/data/assets';
import { t, type Lang } from '@/i18n';

type Props = { processes: ServiceProcessData[]; lang: Lang };

export function ServiceProcess({ processes, lang }: Props) {
  return (
    <VStack spacing="2xl" align="stretch">
      {processes.map((p) => (
        <Grid key={p.service} columns={{ base: 1, md: 3 }} gap="md" alignItems="start">
          <GridItem colSpan={1} sticky top="100px">
            <VStack spacing="sm" align="start">
              <Heading level={3} weight="bold">{t(p.service, lang)}</Heading>
              <Body color="secondary">{t(p.description, lang)}</Body>
            </VStack>
          </GridItem>

          <Grid columns={{ base: 1, md: 2 }} gap="sm" colSpan={{ base: 1, md: 2 }}>
            {p.steps.map((s) => (
              <Card key={s.num} variant="raised" padding="sm" radius="md">
                <VStack spacing="sm" align="start">
                  <NumberDisplay value={s.num} size="md" variant="raised" shape="circle" />
                  <Heading level={4} weight="bold">{t(s.heading, lang)}</Heading>
                  <Body color="secondary">{t(s.body, lang)}</Body>
                </VStack>
              </Card>
            ))}
          </Grid>
        </Grid>
      ))}
    </VStack>
  );
}
