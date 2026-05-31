'use client';

import { Button } from '@/lib/ui';
import { CALENDLY_URL } from '@/data/assets';

type Props = {
  label: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'brand';
  fullWidth?: boolean;
};

type CalendlyGlobal = {
  initPopupWidget: (opts: { url: string }) => void;
};

export function BookCalendlyButton({
  label,
  size = 'lg',
  variant = 'accent',
  fullWidth,
}: Props) {
  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={() => {
        const Calendly = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
        Calendly?.initPopupWidget({ url: CALENDLY_URL });
      }}
    >
      {label}
    </Button>
  );
}
