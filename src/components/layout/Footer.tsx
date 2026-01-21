import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Common');
  const tContact = useTranslations('Contact');
  const tFooter = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="bg-elegant-dark text-white mt-auto">
      
      {/* Main Footer Content */}
      <div className="container mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          
          {/* Brand & Address */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-6">
              <Image 
                src="/images/logo/salottino-logo.png" 
                alt="Salottino - Italienische Spezialitäten" 
                width={150}
                height={42}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 mt-1 shrink-0 text-accent" />
              <div className="text-white/70">
                <p>Salottino GmbH</p>
                <p>Seestrasse 159</p>
                <p>CH-8810 Horgen</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Clock className="w-4 h-4 text-accent" />
              <h3 className="font-display text-lg">{t('openingHours')}</h3>
            </div>
            <div className="space-y-2.5 text-sm text-white/70">
              <div className="flex justify-between max-w-[200px]">
                <span>{t('mon')}</span>
                <span className="text-white/40">{t('closed')}</span>
              </div>
              <div className="flex justify-between max-w-[220px]">
                <span>{t('tueFri')}</span>
                <span>10–12 / 15–18 Uhr</span>
              </div>
              <div className="flex justify-between max-w-[220px]">
                <span>{t('sat')}</span>
                <span>10–15 Uhr</span>
              </div>
            </div>
            <p className="text-xs text-white/40 mt-4">{tContact('delivery')}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-5">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+41446832022" 
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                +41 44 683 20 22
              </a>
              <a 
                href="mailto:eva.vogel@salottino.ch" 
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                eva.vogel@salottino.ch
              </a>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://www.instagram.com/evasalottino/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/salottinoeva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@evasalottino" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a 
                href="https://share.google/DNlXwww8amSrrdPpw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-lg mb-5">Navigation</h3>
            <nav className="flex flex-col space-y-2.5 text-sm">
              <Link 
                href={`/${locale}/spezialitaeten`} 
                className="text-white/70 hover:text-accent transition-colors"
              >
                Spezialitäten
              </Link>
              <Link 
                href={`/${locale}/geschenkkoerbe`} 
                className="text-white/70 hover:text-accent transition-colors"
              >
                Geschenkkörbe
              </Link>
              <Link 
                href={`/${locale}/apero-catering`} 
                className="text-white/70 hover:text-accent transition-colors"
              >
                Apéro-Catering
              </Link>
              <Link 
                href={`/${locale}/ueber-uns`} 
                className="text-white/70 hover:text-accent transition-colors"
              >
                {t('about')}
              </Link>
              <Link 
                href={`/${locale}/kontakt`} 
                className="text-white/70 hover:text-accent transition-colors"
              >
                {t('contact')}
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>{tFooter('rights').replace('salottino', 'Salottino')}</p>
            <div className="flex items-center gap-6">
              <Link 
                href={`/${locale}/impressum`} 
                className="hover:text-accent transition-colors"
              >
                {t('imprint')}
              </Link>
              <Link 
                href={`/${locale}/datenschutz`} 
                className="hover:text-accent transition-colors"
              >
                {t('privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
