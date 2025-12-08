import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Common');
  const tContact = useTranslations('Contact');
  const tFooter = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="bg-muted text-muted-foreground mt-auto">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">{t('brandName')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>
                  salottino GmbH<br />
                  Seestrasse 159<br />
                  CH-8810 Horgen
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+41446832022" className="hover:text-primary transition-colors">+41 44 683 20 22</a>
              </div>
               <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:eva.vogel@salottino.ch" className="hover:text-primary transition-colors">eva.vogel@salottino.ch</a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">{t('openingHours')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between max-w-[200px]">
                <span>{t('mon')}</span>
               </li>
              <li className="flex justify-between max-w-[200px]">
                <span>{t('tueFri')}</span>
                <span>10:00–12:00 | 15:00–18:00</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>{t('sat')}</span>
                <span>10:00–15:00</span>
              </li>
            </ul>
             <p className="text-xs mt-2 italic">{tContact('delivery')}</p>
          </div>

          {/* Links & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Info</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href={`/${locale}/ueber-uns`} className="hover:text-primary transition-colors">{t('about')}</Link>
              <Link href={`/${locale}/kontakt`} className="hover:text-primary transition-colors">{t('contact')}</Link>
              <Link href={`/${locale}/impressum`} className="hover:text-primary transition-colors">{t('imprint')}</Link>
              <Link href={`/${locale}/datenschutz`} className="hover:text-primary transition-colors">{t('privacy')}</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{tFooter('rights')}</p>
        </div>
      </div>
    </footer>
  );
}

