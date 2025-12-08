import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Home'});
  const tCommon = await getTranslations({locale, namespace: 'Common'});

  const products = [
    'Antipasti', 'Pasta', 'Olivenöl', 'Prosecco', 'Grappa', 'Dolci', 'Risotto', 
    'Parmigiano', 'Prosciutto', 'Taralli', 'Cantuccini', 'Limoncello'
  ];

  return (
    <div className="flex flex-col">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION - Full screen, dramatic
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/homepage-2.jpg" 
            alt="Italienische Spezialitäten" 
            fill 
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          {/* Warm color tint */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/30 via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container px-6 py-20 text-center text-white stagger-children">
          {/* Tagline */}
          <p className="font-accent text-xl md:text-2xl text-white/80 mb-4">
            Italienische Spezialitäten in Horgen
          </p>
          
          {/* Main Heading - Large & Dramatic */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight mb-6 leading-[0.9]">
            <span className="block">Sapori</span>
            <span className="block font-accent text-[0.7em] text-white/90">d&apos;Italia</span>
          </h1>
          
          {/* Subtitle */}
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/geschenkkoerbe`}
              className="group inline-flex items-center gap-3 bg-white text-primary px-8 py-4 font-display text-lg tracking-wide hover:bg-white/90 transition-colors"
            >
              {t('ctaGifts')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={`/${locale}/apero-catering`}
              className="inline-flex items-center gap-3 border-2 border-white/50 text-white px-8 py-4 font-display text-lg tracking-wide hover:bg-white/10 backdrop-blur-sm transition-colors"
            >
              {t('ctaCatering')}
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-pulse" />
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          PRODUCT MARQUEE - Endless scroll of products
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-6 bg-primary text-primary-foreground overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...products, ...products].map((product, i) => (
            <span key={i} className="mx-8 font-display text-xl md:text-2xl flex items-center gap-4">
              {product}
              <span className="text-accent opacity-60">✦</span>
            </span>
          ))}
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          THREE PILLARS - Asymmetric layout
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background relative noise-overlay">
        <div className="container px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-16 md:mb-24">
            <p className="font-accent text-accent text-lg mb-2">Was wir bieten</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              Drei Wege zum<br />
              <span className="font-accent">italienischen Genuss</span>
            </h2>
          </div>

          {/* Grid with asymmetric cards */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            
            {/* Spezialitäten - Large card */}
            <Link 
              href={`/${locale}/spezialitaeten`} 
              className="md:col-span-7 group relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-primary/5"
            >
              <Image 
                src="/images/wein/wein-1.jpg" 
                alt="Italienische Spezialitäten" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="font-accent text-white/70 text-lg mb-2">Entdecken</p>
                <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
                  {tCommon('specialties')}
                </h3>
                <p className="text-white/70 max-w-md mb-4">
                  Antipasti, handgemachte Pasta, edle Weine und süsse Verführungen – direkt aus Italien.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                  Sortiment entdecken <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            
            {/* Right column - two stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
              
              {/* Geschenkkörbe */}
              <Link 
                href={`/${locale}/geschenkkoerbe`} 
                className="group relative aspect-[4/3] md:aspect-auto md:flex-1 overflow-hidden bg-secondary"
              >
                <Image 
                  src="/images/geschenkkoerbe/geschenkkorb-1.jpg" 
                  alt="Geschenkkörbe" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-accent text-white/70 mb-1">Verschenken</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                    {tCommon('giftBaskets')}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-white/80 text-sm group-hover:gap-3 transition-all">
                    Individuell zusammenstellen <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              
              {/* Catering */}
              <Link 
                href={`/${locale}/apero-catering`} 
                className="group relative aspect-[4/3] md:aspect-auto md:flex-1 overflow-hidden bg-muted"
              >
                <Image 
                  src="/images/catering/catering-1.jpg" 
                  alt="Apéro Catering" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-accent text-white/70 mb-1">Feiern</p>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                    {tCommon('catering')}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-white/80 text-sm group-hover:gap-3 transition-all">
                    Event planen <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          ABOUT / PERSONAL SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        <div className="container px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image 
                  src="/images/hero/homepage-1.jpg" 
                  alt="Eva Vogel - Inhaberin salottino" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 -z-10" />
              {/* Floating quote */}
              <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 shadow-xl max-w-xs">
                <p className="font-accent text-lg text-primary italic">
                  &ldquo;La dolce vita – das süsse Leben teilen wir gerne mit Ihnen.&rdquo;
                </p>
              </div>
            </div>
            
            {/* Text */}
            <div className="lg:pl-8">
              <p className="font-accent text-accent text-lg mb-2">{t('aboutTeaserTitle')}</p>
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
                Mit Leidenschaft<br />
                <span className="font-accent">importiert</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  {t('aboutTeaserText')}
                </p>
                <p>
                  Als gebürtige Mailänderin bringe ich die Aromen meiner Heimat nach Horgen – 
                  von handverlesenen Antipasti bis hin zu edlen Weinen aus kleinen Familienbetrieben.
                </p>
              </div>
              
              <Link 
                href={`/${locale}/ueber-uns`}
                className="inline-flex items-center gap-3 text-primary font-display text-lg group"
              >
                Mehr über uns
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          GALLERY STRIP - Product impressions
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-4 bg-primary/5">
        <div className="flex gap-4 overflow-hidden">
          {[
            '/images/antipasti/antipasti-1.jpg',
            '/images/wein/wein-2.jpg',
            '/images/catering/catering-2.jpg',
            '/images/geschenkkoerbe/geschenkkorb-2.jpg',
            '/images/antipasti/antipasti-2.jpg',
            '/images/wein/wein-3.jpg',
          ].map((src, i) => (
            <div key={i} className="relative w-48 md:w-64 aspect-square flex-shrink-0 overflow-hidden">
              <Image 
                src={src} 
                alt={`Impression ${i + 1}`} 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          VISIT US - Location & Hours with style
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border border-white/20 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text content */}
            <div>
              <p className="font-accent text-white/60 text-lg mb-2">Besuchen Sie uns</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
                {t('visitUsTitle')}
              </h2>
              
              <div className="space-y-6 mb-10">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">salottino GmbH</p>
                    <p className="text-white/70">Seestrasse 159</p>
                    <p className="text-white/70">8810 Horgen</p>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-2">{tCommon('openingHours')}</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-white/70">
                      <span>{tCommon('mon')}</span>
                      <span>{tCommon('closed')}</span>
                      <span>{tCommon('tueFri')}</span>
                      <span>10–12 & 15–18 Uhr</span>
                      <span>{tCommon('sat')}</span>
                      <span>10–15 Uhr</span>
                    </div>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Telefon</p>
                    <a href="tel:+41446832022" className="text-white/70 hover:text-white transition-colors">
                      +41 44 683 20 22
                    </a>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com/?q=Seestrasse+159,+8810+Horgen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 font-display text-lg hover:bg-white/90 transition-colors"
              >
                {t('routeBtn')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            {/* Map */}
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-white/10">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.5950,47.2550,8.6050,47.2650&amp;layer=mapnik&amp;marker=47.2600,8.6000" 
                  className="w-full h-full"
                  title="Standort salottino"
                />
              </div>
              {/* Label */}
              <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2 font-display">
                Horgen am Zürichsee
              </div>
            </div>
            
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background text-center">
        <div className="container px-6 max-w-3xl">
          <p className="font-accent text-accent text-lg mb-4">Lust auf Italien?</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Wir freuen uns<br />
            <span className="font-accent">auf Sie</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Ob Geschenkkorb, Catering oder einfach nur zum Stöbern – 
            kommen Sie vorbei oder kontaktieren Sie uns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/kontakt`}
              className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 font-display text-lg hover:bg-primary/90 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <Link 
              href={`/${locale}/spezialitaeten`}
              className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary px-8 py-4 font-display text-lg hover:bg-primary/5 transition-colors"
            >
              Sortiment entdecken
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
