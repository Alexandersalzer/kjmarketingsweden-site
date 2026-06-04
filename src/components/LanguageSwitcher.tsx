'use client';

import { useRouter, usePathname } from 'next/navigation';
import { SegmentedControl } from '@/lib/ui';
import { basePath, localePath, type Lang } from '@/i18n';

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SegmentedControl
      value={lang}
      onChange={(v) => router.push(localePath(v as Lang, basePath(pathname)))}
      options={[
        { value: 'sv', label: 'Svenska' },
        { value: 'en', label: 'English' },
      ]}
      size="sm"
    />
  );
}
