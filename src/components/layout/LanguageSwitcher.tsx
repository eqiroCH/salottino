'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { startTransition } from 'react';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  isLight?: boolean;
}

export default function LanguageSwitcher({ isLight = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
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
    <div className="flex items-center gap-1">
      <button 
        onClick={() => switchLocale('de')}
        className={cn(
          "px-2 py-1 font-display text-sm tracking-wide transition-colors",
          locale === 'de' 
            ? isLight ? "text-white" : "text-primary"
            : isLight ? "text-white/50 hover:text-white" : "text-muted-foreground hover:text-primary"
        )}
      >
        DE
      </button>
      <span className={isLight ? "text-white/30" : "text-border"}>|</span>
      <button 
        onClick={() => switchLocale('it')}
        className={cn(
          "px-2 py-1 font-display text-sm tracking-wide transition-colors",
          locale === 'it' 
            ? isLight ? "text-white" : "text-primary"
            : isLight ? "text-white/50 hover:text-white" : "text-muted-foreground hover:text-primary"
        )}
      >
        IT
      </button>
    </div>
  );
}
