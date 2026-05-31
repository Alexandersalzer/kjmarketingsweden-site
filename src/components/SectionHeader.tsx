'use client';

import { VStack, Box, Typography, Tag, FadeIn } from '@/lib/ui';

type Align = 'left' | 'center' | 'right';

type Props = {
  heading: string;
  body?: string;
  tag?: string;
  isHero?: boolean;
  align?: Align;
  maxWidth?: number | string;
  spacing?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  animationDirection?: 'up' | 'down' | 'left' | 'right';
};

const alignToStack: Record<Align, 'start' | 'center' | 'end'> = {
  left: 'start',
  center: 'center',
  right: 'end',
};

export function SectionHeader({
  heading,
  body,
  tag,
  isHero = false,
  align = 'center',
  maxWidth = 720,
  spacing = 'md',
  animate = true,
  animationDirection = 'up',
}: Props) {
  const stackAlign = alignToStack[align];
  const wrap = (node: React.ReactNode, delay = 0) =>
    animate ? (
      <FadeIn
        direction={animationDirection}
        duration={600}
        delay={delay}
        enableScrollTrigger
        triggerOffset={100}
      >
        {node}
      </FadeIn>
    ) : (
      node
    );

  return (
    <Box
      style={{
        maxWidth,
        width: '100%',
        marginInline: align === 'center' ? 'auto' : undefined,
      }}
    >
      <VStack spacing={spacing} align={stackAlign}>
        {tag
          ? wrap(
              <Box style={{ textAlign: align }}>
                <Tag size="medium" variant="accent" icon={null}>
                  {tag}
                </Tag>
              </Box>,
              0,
            )
          : null}

        {wrap(
          <Typography
            as={isHero ? 'h1' : 'h2'}
            variant="display-lg"
            color="heading"
            align={align}
          >
            {heading}
          </Typography>,
          100,
        )}

        {body
          ? wrap(
              <Typography as="p" variant="body-lg" color="body" weight="regular" align={align}>
                {body}
              </Typography>,
              200,
            )
          : null}
      </VStack>
    </Box>
  );
}
