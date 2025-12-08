'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { cn } from '@/lib/utils';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const getLink = (path: string) => `/${locale}${path}`;
  
  const navItems = [
    { href: '/spezialitaeten', label: t('specialties') },
    { href: '/geschenkkoerbe', label: t('gifts') },
    { href: '/apero-catering', label: t('catering') },
    { href: '/ueber-uns', label: t('about') },
    { href: '/kontakt', label: t('contact') },
  ];

  const isLight = isHome && !isScrolled;

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || !isHome
            ? "bg-background/95 backdrop-blur-md border-b border-border/50" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href={`/${locale}`} className="relative z-10">
            <Image 
              src="/images/logo/salottino-logo.png" 
              alt="salottino" 
              width={140} 
              height={45} 
              className={cn(
                "h-9 w-auto transition-all duration-300",
                isLight && "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={getLink(item.href)}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-300 link-underline py-1",
                  pathname === getLink(item.href) 
                    ? isLight ? "text-white" : "text-primary"
                    : isLight ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <div className={cn("w-px h-4", isLight ? "bg-white/20" : "bg-border")} />
            
            <LanguageSwitcher isLight={isLight} />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden relative z-10 p-2 -mr-2 transition-colors",
              isOpen ? "text-white" : isLight ? "text-white" : "text-primary"
            )}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-primary transition-all duration-500 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="h-full flex flex-col justify-center items-center px-6">
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={getLink(item.href)}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-display text-3xl text-white/80 hover:text-white transition-all duration-300",
                  isOpen && "animate-fadeIn",
                  pathname === getLink(item.href) && "text-white"
                )}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-12">
            <LanguageSwitcher isLight />
          </div>
          
          <div className="absolute bottom-10 text-center text-white/50 text-sm">
            <p>+41 44 683 20 22</p>
            <p>eva.vogel@salottino.ch</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
