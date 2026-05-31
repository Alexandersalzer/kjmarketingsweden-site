'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  HStack,
  VStack,
  Logo,
  Button,
  TextLink,
  IconButton,
  Bars3Icon,
  XMarkIcon,
  Container,
} from '@/lib/ui';
import { BookCalendlyButton } from './BookCalendlyButton';
import { brand } from '@/data/assets';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Box
      as="header"
      bg="base"
      width="full"
      border="light"
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      <Container width="content">
        <HStack align="center" justify="between" spacing="lg">
          <Link href="/" aria-label="KJ Marketing Sweden" style={{ textDecoration: 'none' }}>
            <HStack align="center" spacing="sm">
              <Logo src={brand.logoIcon} alt="KJ Marketing Sweden" width={40} height={40} display="logo" />
              <Logo src={brand.logoWordmark} alt="KJ Marketing Sweden" width={100} display="logo" />
            </HStack>
          </Link>

          <Box className="navbar-links-desktop">
            <HStack align="center" spacing="md">
              <TextLink href="/portfolio" variant="primary" size="md" skipClient>Portfölj</TextLink>
              <TextLink href="/tjanster" variant="primary" size="md" skipClient>Tjänster</TextLink>
              <TextLink href="/resultat" variant="primary" size="md" skipClient>Resultat</TextLink>
            </HStack>
          </Box>

          <Box className="navbar-actions-desktop">
            <HStack align="center" spacing="sm">
              <Link href="/kontakt" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="sm">Kontakta oss</Button>
              </Link>
              <BookCalendlyButton label="Boka möte" size="sm" />
            </HStack>
          </Box>

          <Box className="navbar-toggle-mobile">
            <IconButton
              icon={open ? <XMarkIcon width={24} height={24} /> : <Bars3Icon width={24} height={24} />}
              variant="ghost"
              size="md"
              aria-label={open ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            />
          </Box>
        </HStack>
      </Container>

      {open ? (
        <Container width="content">
          <VStack spacing="md" align="stretch">
            <TextLink href="/portfolio" variant="primary" size="lg" onClick={close} skipClient>Portfölj</TextLink>
            <TextLink href="/tjanster" variant="primary" size="lg" onClick={close} skipClient>Tjänster</TextLink>
            <TextLink href="/resultat" variant="primary" size="lg" onClick={close} skipClient>Resultat</TextLink>
            <Link href="/kontakt" onClick={close} style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="md" fullWidth>Kontakta oss</Button>
            </Link>
            <BookCalendlyButton label="Boka möte" size="md" fullWidth />
          </VStack>
        </Container>
      ) : null}

      <style>{`
        @media (max-width: 768px) {
          .navbar-links-desktop, .navbar-actions-desktop { display: none !important; }
        }
        @media (min-width: 769px) {
          .navbar-toggle-mobile { display: none !important; }
        }
      `}</style>
    </Box>
  );
}
