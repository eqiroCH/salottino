import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Phone, Mail } from 'lucide-react';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Home'});
  const tCommon = await getTranslations({locale, namespace: 'Common'});

  return (
    <div className="flex flex-col">
      
      {/* ══════════════════════════════════════════════════════════════════
          HERO - Elegant, sophisticated full-screen
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/hero-homepage.jpg" 
            alt="" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-4xl mx-auto">
          <p className="fade-in-up text-xs md:text-sm tracking-[0.35em] uppercase text-white/70 mb-4 md:mb-8 font-light">
            Italienische Spezialitäten · Horgen
          </p>
          
          <h1 className="fade-in-up delay-1 font-display text-4xl md:text-7xl lg:text-8xl font-semibold mb-4 md:mb-8">
            Salottino
          </h1>
          
          <p className="fade-in-up delay-2 text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-6 md:mb-12 leading-relaxed font-light px-2">
            {t('heroSubtitle')}
          </p>
          
          <div className="fade-in-up delay-3 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link 
              href={`/${locale}/geschenkkoerbe`}
              className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-white text-primary px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium tracking-wide hover:bg-white/95 transition-all duration-300"
            >
              {t('ctaGifts')}
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={`/${locale}/apero-catering`}
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
            >
              {t('ctaCatering')}
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          INTRO - Elegant text section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container px-6 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-4 leading-snug heading-accent heading-accent-center">
            {t('aboutTeaserTitle')}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            {t('aboutTeaserText')}
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          OFFERINGS - Three elegant cards
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container px-6">
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">Unser Angebot</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              Entdecken Sie Salottino
            </h2>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-10 lg:gap-14">
            
            {/* Card 1 - Spezialitäten */}
            <Link href={`/${locale}/spezialitaeten`} className="group">
              <div className="card-elegant hover-lift overflow-hidden h-full">
                <div className="aspect-[3/4] relative img-zoom">
                  <Image 
                    src="/images/wein/wein-1.jpg" 
                    alt="Spezialitäten" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-3 md:p-8">
                  <h3 className="font-display text-sm md:text-2xl text-primary mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
                    {tCommon('specialties')}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-5 hidden md:block">
                    Olivenöl, Pasta, Weine, Prosecco, Dolci und mehr – direkt aus Italien.
                  </p>
                  <span className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm text-accent font-medium">
                    Entdecken <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 2 - Geschenkkörbe */}
            <Link href={`/${locale}/geschenkkoerbe`} className="group">
              <div className="card-elegant hover-lift overflow-hidden h-full">
                <div className="aspect-[3/4] relative img-zoom">
                  <Image 
                    src="/images/geschenkkoerbe/geschenkkorb-1.jpg" 
                    alt="Geschenkkörbe" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-accent text-white text-[10px] md:text-xs font-medium px-2 py-1 md:px-3 md:py-1.5 tracking-wide">
                    Ab CHF 40
                  </div>
                </div>
                <div className="p-3 md:p-8">
                  <h3 className="font-display text-sm md:text-2xl text-primary mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
                    {tCommon('giftBaskets')}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-5 hidden md:block">
                    Individuell zusammengestellt für jeden Anlass und jedes Budget.
                  </p>
                  <span className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm text-accent font-medium">
                    Konfigurieren <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 3 - Catering */}
            <Link href={`/${locale}/apero-catering`} className="group">
              <div className="card-elegant hover-lift overflow-hidden h-full">
                <div className="aspect-[3/4] relative img-zoom">
                  <Image 
                    src="/images/catering/catering-1.jpg" 
                    alt="Apéro Catering" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-3 md:p-8">
                  <h3 className="font-display text-sm md:text-2xl text-primary mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
                    {tCommon('catering')}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-5 hidden md:block">
                    Italienisches Fingerfood und Getränke für Ihren Event.
                  </p>
                  <span className="inline-flex items-center gap-1 md:gap-2 text-xs md:text-sm text-accent font-medium">
                    Anfragen <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          ABOUT - Image + Text side by side
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
            
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden">
                <Image 
                  src="/images/hero/herobildirgendwas.png" 
                  alt="Eva Vogel" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="hidden md:block absolute -bottom-6 -right-6 w-48 h-48 border border-accent/20 -z-10" />
            </div>
            
            {/* Text */}
            <div>
              <p className="text-accent text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-3 md:mb-4">Über uns</p>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-8 leading-tight heading-accent">
                Mit Liebe<br className="hidden md:block" /> aus Italien
              </h2>
              <div className="space-y-4 md:space-y-5 text-muted-foreground leading-relaxed mt-6 md:mt-10 text-sm md:text-base">
                <p>
                  Als gebürtige Mailänderin bringe ich die Aromen meiner Heimat nach Horgen. 
                  Jedes Produkt wird sorgfältig ausgewählt und direkt von kleinen 
                  Familienbetrieben importiert.
                </p>
                <blockquote className="font-display text-primary text-lg md:text-xl italic pl-4 md:pl-6 border-l-2 border-accent/40 my-4 md:my-8">
                  «La dolce vita – das süsse Leben teilen wir gerne mit Ihnen.»
                </blockquote>
              </div>
              
              <Link 
                href={`/${locale}/ueber-uns`}
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all mt-4 text-sm md:text-base"
              >
                Mehr erfahren <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          GALLERY - Horizontal scroll marquee
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="marquee flex gap-4">
          {[
            '/images/antipasti/antipasti-1.jpg',
            '/images/wein/wein-2.jpg',
            '/images/catering/catering-2.jpg',
            '/images/geschenkkoerbe/geschenkkorb-2.jpg',
            '/images/antipasti/antipasti-2.jpg',
            '/images/wein/wein-3.jpg',
            '/images/catering/catering-3.jpg',
            '/images/geschenkkoerbe/geschenkkorb-4.jpg',
            '/images/antipasti/antipasti-1.jpg',
            '/images/wein/wein-2.jpg',
            '/images/catering/catering-2.jpg',
            '/images/geschenkkoerbe/geschenkkorb-2.jpg',
          ].map((src, i) => (
            <div key={i} className="relative w-52 md:w-64 aspect-[4/3] flex-shrink-0 overflow-hidden">
              <Image 
                src={src} 
                alt="" 
                fill 
                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          CONTACT - Elegant dark section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-elegant-dark text-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">
            
            {/* Left - Title & CTA */}
            <div>
              <p className="text-accent text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-3 md:mb-4">
                {t('visitUsTitle')}
              </p>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-10 leading-tight">
                Besuchen<br className="hidden md:block" /> Sie uns
              </h2>
              
              <Link 
                href={`/${locale}/kontakt`}
                className="group inline-flex items-center gap-2 md:gap-3 bg-white text-primary px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium tracking-wide hover:bg-accent hover:text-white transition-all duration-300"
              >
                Kontakt aufnehmen 
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right - Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
              
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-xs tracking-[0.15em] uppercase text-white/60 font-medium">Adresse</span>
                </div>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Salottino GmbH<br />
                  Seestrasse 159<br />
                  8810 Horgen
                </p>
                <a 
                  href="https://maps.google.com/?q=Seestrasse+159,+8810+Horgen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 md:mt-3 text-xs md:text-sm text-accent hover:text-white transition-colors"
                >
                  {t('routeBtn')} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-xs tracking-[0.15em] uppercase text-white/60 font-medium">{tCommon('openingHours')}</span>
                </div>
                <div className="text-white/80 space-y-1.5 md:space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between max-w-[220px]">
                    <span>{tCommon('mon')}</span>
                    <span className="text-white/50">{tCommon('closed')}</span>
                  </div>
                  <div className="flex justify-between max-w-[220px]">
                    <span>{tCommon('tueFri')}</span>
                    <span>10–12 / 15–18 Uhr</span>
                  </div>
                  <div className="flex justify-between max-w-[220px]">
                    <span>{tCommon('sat')}</span>
                    <span>10–15 Uhr</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-xs tracking-[0.15em] uppercase text-white/60 font-medium">Telefon</span>
                </div>
                <a href="tel:+41446832022" className="text-white/80 hover:text-accent transition-colors text-sm md:text-base">
                  +41 44 683 20 22
                </a>
              </div>
              
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-xs tracking-[0.15em] uppercase text-white/60 font-medium">E-Mail</span>
                </div>
                <a href="mailto:eva.vogel@salottino.ch" className="text-white/80 hover:text-accent transition-colors text-sm md:text-base break-all">
                  eva.vogel@salottino.ch
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          FINAL CTA - Minimal and elegant
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-cream text-center">
        <div className="container px-6 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Lust auf Italien?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Entdecken Sie unser Sortiment oder kontaktieren Sie uns für eine persönliche Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/spezialitaeten`}
              className="btn-primary"
            >
              Sortiment entdecken
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href={`/${locale}/kontakt`}
              className="btn-outline"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
