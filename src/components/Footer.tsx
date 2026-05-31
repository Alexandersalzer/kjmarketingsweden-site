import Link from 'next/link';
import {
  Box,
  VStack,
  HStack,
  Grid,
  Logo,
  Body,
  Button,
  TextLink,
  Divider,
  Container,
} from '@/lib/ui';
import { BookCalendlyButton } from './BookCalendlyButton';
import { brand } from '@/data/assets';

export function Footer() {
  return (
    <Container width="content">
      <Grid columns={{ base: 1, md: 2, lg: 4 }} gap="xl">
        <VStack spacing="md" align="start">
          <HStack align="center" spacing="sm">
            <Logo src={brand.logoIcon} alt="" width={40} height={40} />
            <Logo src={brand.logoWordmark} alt="KJ Marketing Sweden" width={100} />
          </HStack>
          <Body size="sm" color="tertiary">
            UGC-byrå för video, sociala medier och annonsering
          </Body>
          <Logo
            src={brand.metaPartnerBadge}
            alt="Meta Business Partner"
            width={140}
            height={48}
          />
        </VStack>

        <VStack spacing="sm" align="start">
          <Body size="md" weight="semibold" color="secondary">Sidor</Body>
          <TextLink skipClient href="/" variant="ghost" size="sm">Hem</TextLink>
          <TextLink skipClient href="/tjanster" variant="ghost" size="sm">Tjänster</TextLink>
          <TextLink skipClient href="/portfolio" variant="ghost" size="sm">Portfölj</TextLink>
          <TextLink skipClient href="/kontakt" variant="ghost" size="sm">Kontakt</TextLink>
        </VStack>

        <VStack spacing="sm" align="start">
          <Body size="md" weight="semibold" color="secondary">Tjänster</Body>
          <TextLink skipClient href="/tjanster" variant="ghost" size="sm">UGC Videos</TextLink>
          <TextLink skipClient href="/tjanster" variant="ghost" size="sm">Social Media Management</TextLink>
          <TextLink skipClient href="/tjanster" variant="ghost" size="sm">Paid Advertising</TextLink>
        </VStack>

        <VStack spacing="md" align="stretch">
          <Body size="md" weight="semibold" color="secondary">Kontakt</Body>
          <Body size="sm" color="tertiary">info@kjmarketingsweden.com</Body>
          <BookCalendlyButton label="Boka möte" size="sm" fullWidth />
          <Link href="/kontakt" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm" fullWidth>Kontakta oss</Button>
          </Link>
        </VStack>
      </Grid>

      <Box padding="md" />
      <Divider weight="default" spacing="md" />

      <HStack align="center" justify="center" spacing="md" wrap>
        <Body size="sm" color="tertiary">
          © 2026 KJ Marketing Sweden AB 559528-9629. Alla rättigheter förbehållna.
        </Body>
      </HStack>
    </Container>
  );
}
