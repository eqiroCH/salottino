'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('Navigation');
  const tCommon = useTranslations('Common');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroPage, setIsHeroPage] = useState(false);

  // Check if we're on the homepage (which has a full-screen hero)
  useEffect(() => {
    setIsHeroPage(pathname === `/${locale}` || pathname === `/${locale}/`);
  }, [pathname, locale]);

  // Handle scroll for transparent header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLink = (path: string) => `/${locale}${path}`;
  
  const navItems = [
    { href: '/spezialitaeten', label: t('specialties') },
    { href: '/geschenkkoerbe', label: t('gifts') },
    { href: '/apero-catering', label: t('catering') },
    { href: '/ueber-uns', label: t('about') },
    { href: '/kontakt', label: t('contact') },
  ];

  // Determine header style based on scroll and page type
  const isTransparent = isHeroPage && !isScrolled;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent 
          ? "bg-transparent" 
          : "bg-background/95 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center group">
          <Image 
            src="/images/logo/salottino-logo.png" 
            alt="salottino" 
            width={160} 
            height={50} 
            className={cn(
              "h-10 w-auto transition-all duration-300",
              isTransparent && "brightness-0 invert"
            )}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={getLink(item.href)}
              className={cn(
                "font-display text-sm tracking-wide transition-colors relative py-2",
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
                "after:bg-current after:scale-x-0 after:origin-right after:transition-transform",
                "hover:after:scale-x-100 hover:after:origin-left",
                pathname === getLink(item.href) 
                  ? isTransparent ? "text-white after:scale-x-100" : "text-primary after:scale-x-100"
                  : isTransparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Divider */}
          <div className={cn(
            "w-px h-6",
            isTransparent ? "bg-white/30" : "bg-border"
          )} />
          
          <LanguageSwitcher isLight={isTransparent} />
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher isLight={isTransparent} />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "shrink-0",
                  isTransparent && "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-primary text-primary-foreground border-none">
              <div className="flex flex-col h-full pt-12">
                {/* Mobile Logo */}
                <Link href={`/${locale}`} onClick={() => setIsOpen(false)} className="mb-12">
                  <Image 
                    src="/images/logo/salottino-logo.png" 
                    alt="salottino" 
                    width={140} 
                    height={45} 
                    className="h-10 w-auto brightness-0 invert"
                  />
                </Link>
                
                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={getLink(item.href)}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "font-display text-2xl py-3 border-b border-white/10 transition-colors",
                        pathname === getLink(item.href) 
                          ? "text-white" 
                          : "text-white/70 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                
                {/* Mobile Contact Info */}
                <div className="mt-auto pt-8 border-t border-white/10">
                  <p className="text-white/50 text-sm mb-2">Kontakt</p>
                  <a href="tel:+41446832022" className="text-white hover:underline block mb-1">
                    +41 44 683 20 22
                  </a>
                  <a href="mailto:eva.vogel@salottino.ch" className="text-white/70 hover:text-white text-sm">
                    eva.vogel@salottino.ch
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
