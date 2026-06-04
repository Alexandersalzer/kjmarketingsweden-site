'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import {
  Box,
  HStack,
  VStack,
  Logo,
  Button,
  TextLink,
  NavbarContainer,
} from '@/lib/ui';
import { BookCalendlyButton } from './BookCalendlyButton';
import { brand } from '@/data/assets';
import { t, localePath, type Lang } from '@/i18n';

// The design system's own navbar renderer fixes the bar to the top so it
// overlays content instead of occupying flow. NavbarContainer itself is only
// position:absolute inside a height-0 relative wrapper, so it needs this outer
// fixed element to stay pinned on scroll. This is the one place inline styles
// are unavoidable — there is no token/prop for fixed positioning.
const fixedNav: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
};

export function Navbar({ lang }: { lang: Lang }) {
  return (
    <Box as="nav" style={fixedNav}>
      <NavbarContainer
        navbarStyle="bar"
        menuAlign="right"
        mobileMenuAlign="left"
        showBorder={false}
        hideOnScroll={false}
        drawerAnimation={{
          type: 'fadeIn',
          settings: { direction: 'down', duration: 400, stagger: 50 },
        }}
        mobileMenu={<MobileMenu lang={lang} />}
      >
        <DesktopNav lang={lang} />
      </NavbarContainer>
    </Box>
  );
}

function DesktopNav({ lang }: { lang: Lang }) {
  return (
    <HStack align="center" justify="between" spacing="lg">
      <HStack align="center" spacing="sm">
        <Link href={localePath(lang, '/')} aria-label="KJ Marketing Sweden" style={{ textDecoration: 'none' }}>
          <HStack align="center" spacing="sm">
            <Logo src={brand.logoIcon} alt="KJ Marketing Sweden" width={40} height={40} display="logo" />
            <Logo src={brand.logoWordmark} alt="KJ Marketing Sweden" width={100} display="logo" />
          </HStack>
        </Link>
      </HStack>

      <HStack align="center" justify="center" spacing="md">
        <TextLink href={localePath(lang, '/portfolio')} variant="primary" size="md" skipClient>{t('Portfölj', lang)}</TextLink>
        <TextLink href={localePath(lang, '/tjanster')} variant="primary" size="md" skipClient>{t('Tjänster', lang)}</TextLink>
        <TextLink href={localePath(lang, '/resultat')} variant="primary" size="md" skipClient>{t('Resultat', lang)}</TextLink>
      </HStack>

      <HStack align="center" spacing="sm">
        <Link href={localePath(lang, '/kontakt')} style={{ textDecoration: 'none' }}>
          <Button variant="secondary" size="sm">{t('Kontakta oss', lang)}</Button>
        </Link>
        <BookCalendlyButton label={t('Boka möte', lang)} size="sm" />
      </HStack>
    </HStack>
  );
}

function MobileMenu({ lang }: { lang: Lang }) {
  return (
    <VStack spacing="lg" align="stretch">
      <VStack spacing="md" align="start">
        <TextLink href={localePath(lang, '/portfolio')} variant="primary" size="lg" skipClient>{t('Portfölj', lang)}</TextLink>
        <TextLink href={localePath(lang, '/tjanster')} variant="primary" size="lg" skipClient>{t('Tjänster', lang)}</TextLink>
        <TextLink href={localePath(lang, '/resultat')} variant="primary" size="lg" skipClient>{t('Resultat', lang)}</TextLink>
      </VStack>
      <VStack spacing="sm" align="stretch">
        <Link href={localePath(lang, '/kontakt')} style={{ textDecoration: 'none' }}>
          <Button variant="secondary" size="md" fullWidth>{t('Kontakta oss', lang)}</Button>
        </Link>
        <BookCalendlyButton label={t('Boka möte', lang)} size="md" fullWidth />
      </VStack>
    </VStack>
  );
}
