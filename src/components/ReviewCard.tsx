import { VStack, HStack, Card, Body, Avatar, Stars } from '@/lib/ui';
import type { Testimonial } from '@/data/assets';

export function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <a
      href={review.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      <Card variant="outlined" padding="md" radius="md" className="card--clickable">
        <VStack spacing="sm" align="start">
          <HStack spacing="md" align="center">
            <Avatar name={review.author} src={review.avatarSrc} size="md" shape="full" />
            <VStack spacing="xs" align="start">
              <Body size="md" weight="semibold">{review.author}</Body>
              <Body size="sm" color="tertiary">Trustpilot</Body>
              <Stars rating={review.rating} size="sm" />
            </VStack>
          </HStack>
          <Body size="sm">{review.review}</Body>
        </VStack>
      </Card>
    </a>
  );
}
