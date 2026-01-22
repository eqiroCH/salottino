import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';
  
  return {
    title: isGerman ? 'Kontakt & Öffnungszeiten | Salottino' : 'Contatto & Orari | Salottino',
    description: isGerman
      ? 'Besuchen Sie Salottino in Horgen. Öffnungszeiten: Di-Fr 10-12 & 15-18 Uhr, Sa 10-15 Uhr. Telefon: +41 44 683 20 22. Hauslieferung in Horgen möglich.'
      : 'Visitate Salottino a Horgen. Orari: Mar-Ven 10-12 & 15-18, Sab 10-15. Telefono: +41 44 683 20 22. Consegna a domicilio a Horgen disponibile.',
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Contact'});
  const tCommon = await getTranslations({locale, namespace: 'Common'});

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-4 md:pt-32 md:pb-6 bg-cream">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">Salottino Horgen</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              {t('title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-12">
              
              {/* Address */}
              <div className="flex items-start gap-3 md:gap-5">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="grid md:grid-cols-3 gap-4 md:gap-8 items-start">
                    <div className="md:col-span-1">
                      <h3 className="font-display text-lg md:text-xl text-primary mb-3 md:mb-4">{tCommon('address')}</h3>
                      <div className="space-y-1 text-sm md:text-base">
                        <p className="text-foreground font-medium">Salottino GmbH</p>
                        <p className="text-muted-foreground">Seestrasse 159</p>
                        <p className="text-muted-foreground">CH-8810 Horgen</p>
                      </div>
                    </div>
                    <div className="relative md:col-span-2">
                      <a 
                        href="https://maps.google.com/?q=Seestrasse+159,+8810+Horgen" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block group"
                        aria-label="Auf Google Maps öffnen"
                      >
                        <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden border border-border/30 hover:border-accent/60 transition-all duration-300 shadow-sm hover:shadow-lg">
                          <iframe
                            src="https://www.google.com/maps?q=Seestrasse+159,+8810+Horgen,+Switzerland&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'saturate(0.85) contrast(1.05) brightness(0.98)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full group-hover:saturate-100 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/8 opacity-50 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-medium text-primary shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {t('viewLargerMap')} →
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 md:gap-5">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg md:text-xl text-primary mb-2 md:mb-3">{tCommon('phone')}</h3>
                  <a href="tel:+41446832022" className="text-foreground hover:text-accent transition-colors block text-sm md:text-base">
                    +41 44 683 20 22
                  </a>
                  <a href="tel:+41793745427" className="text-muted-foreground hover:text-accent transition-colors block mt-1 text-sm md:text-base">
                    Mobile: +41 79 374 54 27
                  </a>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2">{t('emergency')}</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3 md:gap-5">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div>
                  <h3 className="font-display text-lg md:text-xl text-primary mb-2 md:mb-3">WhatsApp</h3>
                  <a 
                    href="https://wa.me/41793745427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors text-sm md:text-base"
                  >
                    {locale === 'de' ? 'Chat starten' : 'Inizia chat'}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 md:gap-5">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg md:text-xl text-primary mb-2 md:mb-3">{tCommon('email')}</h3>
                  <a href="mailto:eva.vogel@salottino.ch" className="text-foreground hover:text-accent transition-colors text-sm md:text-base break-all">
                    eva.vogel@salottino.ch
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3 md:gap-5">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-lg md:text-xl text-primary mb-3 md:mb-4">{tCommon('openingHours')}</h3>
                  <div className="space-y-2 md:space-y-3 max-w-xs text-sm md:text-base">
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="text-foreground">{tCommon('mon')}</span>
                      <span className="text-muted-foreground">{tCommon('closed')}</span>
                    </div>
                    <div className="flex justify-between items-start pb-3 border-b border-border/50">
                      <span className="text-foreground">{tCommon('tueFri')}</span>
                      <span className="text-right text-muted-foreground">10–12 / 15–18 Uhr</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">{tCommon('sat')}</span>
                      <span className="text-muted-foreground">10–15 Uhr</span>
                    </div>
                  </div>
                  <p className="text-sm text-accent mt-5">{t('delivery')}</p>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
