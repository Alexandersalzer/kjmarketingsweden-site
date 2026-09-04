'use client';

import { useEffect, useState } from 'react';
import { VerticalCarouselAnimation } from '@/lib/ui';
import type { Testimonial } from '@/data/assets';
import { ReviewCard } from './ReviewCard';

/**
 * Reviews as slowly drifting vertical columns instead of a tall grid — three
 * columns on desktop, one on mobile, so the section stays a fixed height no
 * matter how many reviews exist. Column count is resolved client-side because
 * VerticalCarouselAnimation splits its items per column in JS, not CSS.
 */
export function ReviewColumns({ reviews }: { reviews: Testimonial[] }) {
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const apply = () => setColumnCount(mq.matches ? 1 : 3);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const perColumn = Math.ceil(reviews.length / columnCount);
  const columns = Array.from({ length: columnCount }, (_, col) => ({
    direction: col % 2 === 1 ? ('down' as const) : ('up' as const),
    speed: 180 + col * 25,
    items: reviews
      .slice(col * perColumn, (col + 1) * perColumn)
      .map((review) => ({ id: review.id, content: <ReviewCard review={review} /> })),
  }));

  return (
    <VerticalCarouselAnimation
      columns={columns}
      gap="16px"
      columnGap="16px"
      containerHeight={columnCount === 1 ? '560px' : '620px'}
      enableFadeEdges
      fadeHeight="100px"
      duplicateCount={4}
    />
  );
}
