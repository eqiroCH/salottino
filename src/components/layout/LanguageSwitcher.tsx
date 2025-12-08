'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { startTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Basic replacement for now. For robust path handling, use next-intl/navigation
    // Assuming pathname starts with /de or /it or is just /
    const segments = pathname.split('/');
    if (segments[1] === 'de' || segments[1] === 'it') {
        segments[1] = newLocale;
    } else {
        segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/');
    
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant={locale === 'de' ? 'default' : 'ghost'} 
        size="sm" 
        onClick={() => switchLocale('de')}
        className="w-10 px-0"
      >
        DE
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button 
        variant={locale === 'it' ? 'default' : 'ghost'} 
        size="sm" 
        onClick={() => switchLocale('it')}
        className="w-10 px-0"
      >
        IT
      </Button>
    </div>
  );
}

