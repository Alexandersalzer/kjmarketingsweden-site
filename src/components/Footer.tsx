import Link from 'next/link';
import {
  Box,
  VStack,
  HStack,
  Grid,
  GridItem,
  Logo,
  Body,
  Button,
  TextLink,
  Divider,
  Container,
} from '@/lib/ui';
import { BookCalendlyButton } from './BookCalendlyButton';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AwardSeal } from './AwardSeal';
import { award, brand } from '@/data/assets';
import { t, localePath, type Lang } from '@/i18n';

export function Footer({ lang }: { lang: Lang }) {
  return (
    <Container width="content">
      <Divider weight="default" spacing="md" />

      <Grid columns={{ base: 1, md: 2, lg: 6 }} gap="xl" alignItems="start">
        <GridItem colSpan={{ base: 1, md: 1, lg: 3 }}>
          <VStack spacing="md" align="start">
            <HStack align="center" spacing="sm">
              <Logo src={brand.logoIcon} alt="" width={40} height={40} />
              <Logo src={brand.logoWordmark} alt="KJ Marketing Sweden" width={100} />
            </HStack>
            <Body size="sm" color="tertiary">
              {t('Perfomance byrå med fokus på annonsering, UGC och content.', lang)}
            </Body>
            <HStack align="center" spacing="xl" wrap>
              <Logo
                src={brand.metaPartnerBadge}
                alt="Meta Business Partner"
                width={100}
                height={34}
                color='inverse'
              />
              <a
                href={award.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', maxWidth: 160 }}
              >
                <AwardSeal title={t('Årets Award 2026', lang)} />
              </a>
            </HStack>
          </VStack>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1, lg: 1 }}>
          <VStack spacing="sm" align="start">
            <Body size="md" weight="semibold" color="secondary">{t('Sidor', lang)}</Body>
            <TextLink skipClient href={localePath(lang, '/')} variant="ghost" size="sm">{t('Hem', lang)}</TextLink>
            <TextLink skipClient href={localePath(lang, '/tjanster')} variant="ghost" size="sm">{t('Tjänster', lang)}</TextLink>
            <TextLink skipClient href={localePath(lang, '/portfolio')} variant="ghost" size="sm">{t('Portfölj', lang)}</TextLink>
            <TextLink skipClient href={localePath(lang, '/kontakt')} variant="ghost" size="sm">{t('Kontakt', lang)}</TextLink>
          </VStack>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1, lg: 1 }}>
          <VStack spacing="sm" align="start">
            <Body size="md" weight="semibold" color="secondary">{t('Tjänster', lang)}</Body>
            <TextLink skipClient href={localePath(lang, '/tjanster')} variant="ghost" size="sm">UGC Videos</TextLink>
            <TextLink skipClient href={localePath(lang, '/tjanster')} variant="ghost" size="sm">Social Media Management</TextLink>
            <TextLink skipClient href={localePath(lang, '/tjanster')} variant="ghost" size="sm">Paid Advertising</TextLink>
          </VStack>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1, lg: 1 }}>
          <VStack spacing="md" align="stretch">
            <Body size="md" weight="semibold" color="secondary">{t('Kontakt', lang)}</Body>
            <Body size="sm" color="tertiary">info@kjmarketingsweden.com</Body>
            <BookCalendlyButton label={t('Boka möte', lang)} size="sm" fullWidth />
            <Link href={localePath(lang, '/kontakt')} style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="sm" fullWidth>{t('Kontakta oss', lang)}</Button>
            </Link>
          </VStack>
        </GridItem>
      </Grid>

      <Box padding="md" />
      <Divider weight="default" spacing="md" />

      <HStack align="center" justify="between" spacing="md" wrap>
        <Body size="sm" color="tertiary">
          {t('© 2026 KJ Marketing Sweden AB 559528-9629. Alla rättigheter förbehållna.', lang)}
        </Body>
        <LanguageSwitcher lang={lang} />
      </HStack>
    </Container>
  );
}
