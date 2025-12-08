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
          HERO - Clean, full-screen with subtle animation
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/homepage-2.jpg" 
            alt="" 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="fade-in-up text-sm tracking-[0.3em] uppercase text-white/70 mb-6">
            Italienische Spezialitäten
          </p>
          
          <h1 className="fade-in-up delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-6">
            salottino
          </h1>
          
          <p className="fade-in-up delay-2 text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          <div className="fade-in-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/geschenkkoerbe`}
              className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
            >
              {t('ctaGifts')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={`/${locale}/apero-catering`}
              className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
            >
              {t('ctaCatering')}
            </Link>
          </div>
        </div>
        
        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-white/20 animate-pulse" />
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          INTRO - Simple text section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-snug">
            {t('aboutTeaserTitle')}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('aboutTeaserText')}
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          OFFERINGS - Three clean cards
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Card 1 - Spezialitäten */}
            <Link href={`/${locale}/spezialitaeten`} className="group hover-lift">
              <div className="img-zoom aspect-[4/5] relative mb-6">
                <Image 
                  src="/images/wein/wein-1.jpg" 
                  alt="Spezialitäten" 
                  fill 
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-primary mb-2 group-hover:text-accent transition-colors">
                {tCommon('specialties')}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Antipasti, Pasta, Weine, Dolci und mehr – direkt aus Italien.
              </p>
              <span className="link-underline inline-flex items-center gap-2 text-sm text-primary">
                Entdecken <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Card 2 - Geschenkkörbe */}
            <Link href={`/${locale}/geschenkkoerbe`} className="group hover-lift">
              <div className="img-zoom aspect-[4/5] relative mb-6">
                <Image 
                  src="/images/geschenkkoerbe/geschenkkorb-1.jpg" 
                  alt="Geschenkkörbe" 
                  fill 
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-primary mb-2 group-hover:text-accent transition-colors">
                {tCommon('giftBaskets')}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Individuell zusammengestellt für jeden Anlass und jedes Budget.
              </p>
              <span className="link-underline inline-flex items-center gap-2 text-sm text-primary">
                Konfigurieren <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Card 3 - Catering */}
            <Link href={`/${locale}/apero-catering`} className="group hover-lift">
              <div className="img-zoom aspect-[4/5] relative mb-6">
                <Image 
                  src="/images/catering/catering-1.jpg" 
                  alt="Apéro Catering" 
                  fill 
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-primary mb-2 group-hover:text-accent transition-colors">
                {tCommon('catering')}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Italienisches Fingerfood und Getränke für Ihren Event.
              </p>
              <span className="link-underline inline-flex items-center gap-2 text-sm text-primary">
                Anfragen <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          ABOUT - Image + Text side by side
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image */}
            <div className="img-zoom aspect-[4/5] lg:aspect-square relative">
              <Image 
                src="/images/hero/homepage-1.jpg" 
                alt="Eva Vogel" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Text */}
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
                Über uns
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">
                Mit Liebe<br />aus Italien
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Als gebürtige Mailänderin bringe ich die Aromen meiner Heimat nach Horgen. 
                  Jedes Produkt wird sorgfältig ausgewählt und direkt von kleinen 
                  Familienbetrieben importiert.
                </p>
                <p className="font-display text-primary italic text-lg">
                  «La dolce vita – das süsse Leben teilen wir gerne mit Ihnen.»
                </p>
              </div>
              
              <Link 
                href={`/${locale}/ueber-uns`}
                className="link-underline inline-flex items-center gap-2 text-primary"
              >
                Mehr erfahren <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          GALLERY - Horizontal scroll
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-primary/5 overflow-hidden">
        <div className="marquee flex gap-4">
          {[
            '/images/antipasti/antipasti-1.jpg',
            '/images/wein/wein-2.jpg',
            '/images/catering/catering-2.jpg',
            '/images/geschenkkoerbe/geschenkkorb-2.jpg',
            '/images/antipasti/antipasti-2.jpg',
            '/images/wein/wein-3.jpg',
            '/images/antipasti/antipasti-1.jpg',
            '/images/wein/wein-2.jpg',
            '/images/catering/catering-2.jpg',
            '/images/geschenkkoerbe/geschenkkorb-2.jpg',
            '/images/antipasti/antipasti-2.jpg',
            '/images/wein/wein-3.jpg',
          ].map((src, i) => (
            <div key={i} className="relative w-64 md:w-80 aspect-[4/3] flex-shrink-0">
              <Image 
                src={src} 
                alt="" 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          CONTACT - Clean info section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left - Title & CTA */}
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-white/50 mb-4">
                {t('visitUsTitle')}
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-8">
                Besuchen<br />Sie uns
              </h2>
              
              <Link 
                href={`/${locale}/kontakt`}
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
              >
                Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Right - Info */}
            <div className="grid sm:grid-cols-2 gap-8">
              
              <div>
                <div className="flex items-center gap-2 text-accent mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs tracking-[0.15em] uppercase">Adresse</span>
                </div>
                <p className="text-white/80 leading-relaxed">
                  salottino GmbH<br />
                  Seestrasse 159<br />
                  8810 Horgen
                </p>
                <a 
                  href="https://maps.google.com/?q=Seestrasse+159,+8810+Horgen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-block mt-3 text-sm text-white/60 hover:text-white"
                >
                  {t('routeBtn')}
                </a>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-accent mb-3">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs tracking-[0.15em] uppercase">{tCommon('openingHours')}</span>
                </div>
                <div className="text-white/80 space-y-1 text-sm">
                  <p>{tCommon('mon')}: {tCommon('closed')}</p>
                  <p>{tCommon('tueFri')}: 10–12 & 15–18</p>
                  <p>{tCommon('sat')}: 10–15</p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-accent mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs tracking-[0.15em] uppercase">Telefon</span>
                </div>
                <a href="tel:+41446832022" className="text-white/80 hover:text-white transition-colors">
                  +41 44 683 20 22
                </a>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-accent mb-3">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs tracking-[0.15em] uppercase">E-Mail</span>
                </div>
                <a href="mailto:eva.vogel@salottino.ch" className="text-white/80 hover:text-white transition-colors">
                  eva.vogel@salottino.ch
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          FINAL CTA - Minimal
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background text-center">
        <div className="container px-6 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
            Lust auf Italien?
          </h2>
          <p className="text-muted-foreground mb-10">
            Entdecken Sie unser Sortiment oder kontaktieren Sie uns für eine persönliche Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/spezialitaeten`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
            >
              Sortiment entdecken
            </Link>
            <Link 
              href={`/${locale}/kontakt`}
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 text-sm tracking-wide hover:bg-primary/5 transition-all duration-300"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
