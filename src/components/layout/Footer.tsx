import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Common');
  const tContact = useTranslations('Contact');
  const tFooter = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Brand & Address */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-medium">Salottino</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                <div className="space-y-1">
                  <p className="font-medium">Salottino GmbH</p>
                  <p className="text-white/80">Seestrasse 159</p>
                  <p className="text-white/80">CH-8810 Horgen</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <a href="tel:+41446832022" className="hover:text-accent transition-colors">+41 44 683 20 22</a>
              </div>
               <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <a href="mailto:eva.vogel@salottino.ch" className="hover:text-accent transition-colors break-all">eva.vogel@salottino.ch</a>
              </div>
            </div>
          </div>

          {/* Opening Hours - Verbessert */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-accent" />
              <h3 className="font-display text-xl font-medium">{t('openingHours')}</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start justify-between gap-4 pb-3 border-b border-white/10">
                <span className="font-medium">{t('mon')}</span>
                <span className="text-white/70">{t('closed')}</span>
              </div>
              <div className="flex items-start justify-between gap-4 pb-3 border-b border-white/10">
                <span className="font-medium">{t('tueFri')}</span>
                <span className="text-white/80">10:00–12:00<br />15:00–18:00</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="font-medium">{t('sat')}</span>
                <span className="text-white/80">10:00–15:00</span>
              </div>
            </div>
            <p className="text-xs text-white/60 mt-4 italic">{tContact('delivery')}</p>
          </div>

          {/* Links & Legal */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-medium">Info</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link href={`/${locale}/ueber-uns`} className="hover:text-accent transition-colors">{t('about')}</Link>
              <Link href={`/${locale}/kontakt`} className="hover:text-accent transition-colors">{t('contact')}</Link>
              <Link href={`/${locale}/impressum`} className="hover:text-accent transition-colors">{t('imprint')}</Link>
              <Link href={`/${locale}/datenschutz`} className="hover:text-accent transition-colors">{t('privacy')}</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-xs text-center text-white/60">
          <p>{tFooter('rights').replace('salottino', 'Salottino')}</p>
        </div>
      </div>
    </footer>
  );
}
