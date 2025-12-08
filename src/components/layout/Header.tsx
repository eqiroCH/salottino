'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBasket, Wine, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('Navigation');
  const tCommon = useTranslations('Common');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Helper to remove locale from path for checking active state if needed
  // or just use exact matching if the links include locale
  // Since we are using standard Link, we need to ensure href includes locale or use next-intl Link
  // For simplicity, I'll prepend locale manually here to avoid next-intl setup complexity in this file
  
  const getLink = (path: string) => `/${locale}${path}`;
  
  const navItems = [
    { href: '/spezialitaeten', label: t('specialties') },
    { href: '/geschenkkoerbe', label: t('gifts') },
    { href: '/apero-catering', label: t('catering') },
    { href: '/ueber-uns', label: t('about') },
    { href: '/kontakt', label: t('contact') },
    { href: '/news', label: tCommon('news') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image 
            src="/images/logo/salottino-logo.png" 
            alt="salottino" 
            width={140} 
            height={40} 
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={getLink(item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === getLink(item.href) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={getLink(item.href)}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}

