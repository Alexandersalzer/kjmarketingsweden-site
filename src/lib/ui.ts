'use client';

/**
 * Client-boundary re-export of every @blimpify-im/ui primitive we use.
 * The UI bundle uses React hooks internally so it must cross the client boundary.
 * Importing through this one file keeps all design-system imports honest and
 * makes it impossible to "forget" the boundary.
 *
 * RULE: never import from @blimpify-im/ui directly — always go through here.
 *       And NEVER add a hand-rolled UI component to this codebase. If something
 *       is missing from the design system, add it there instead.
 */

// Typography
export {
  Heading,
  Body,
  Display,
  Label,
  Typography,
} from '@blimpify-im/ui';

// Layout primitives
export {
  VStack,
  HStack,
  Card,
  Box,
  Grid,
  GridItem,
  Spacer,
  Divider,
  Section,
  Container,
  MasonryGrid,
} from '@blimpify-im/ui';

// Actions
export {
  Button,
  IconButton,
  TextLink,
} from '@blimpify-im/ui';

// Forms
export {
  Input,
  Textarea,
  Picker,
  SegmentedControl,
} from '@blimpify-im/ui';

// Navigation
export {
  Tab,
  TabGroup,
} from '@blimpify-im/ui';

// Media
export {
  Logo,
  Image,
  Avatar,
  VideoShowcase,
} from '@blimpify-im/ui';

// Data display
export {
  Stars,
  Tag,
  NumberDisplay,
} from '@blimpify-im/ui';

// Pattern cards (production-built layouts — never hand-roll lookalikes)
export {
  PortfolioCard,
  ResultsCard,
} from '@blimpify-im/ui';

// Media
export {
  Flag,
} from '@blimpify-im/ui';

// Animations / motion
export {
  CountUp,
  CarouselAnimation,
  FadeIn,
} from '@blimpify-im/ui';

// Icons used by service cards
export {
  VideoCameraIcon,
  UsersIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
} from '@blimpify-im/ui';

// Shells (navbar/footer chrome) — only exposed via the /shells subpath,
// not the main barrel. NavbarContainer owns the fixed-overlay positioning,
// background variants, scroll transitions, and the mobile drawer.
export { NavbarContainer } from '@blimpify-im/ui/shells';

// GDPR cookie consent — /consent subpath. CookieConsent requires
// ConsentProvider as an ancestor (it reads consent state via context).
// MarketingPixels loads Meta/TikTok pixels gated by marketing consent.
export { CookieConsent, ConsentProvider, MarketingPixels } from '@blimpify-im/ui/consent';
