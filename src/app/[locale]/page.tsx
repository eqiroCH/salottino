import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, MapPin, Star, ShoppingBag, Wine, UtensilsCrossed } from 'lucide-react';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Home'});
  const tCommon = await getTranslations({locale, namespace: 'Common'});

  return (
    <div className="flex flex-col gap-16 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image 
          src="/images/antipasti/antipasti-3.jpg" 
          alt="Italienische Spezialitäten" 
          fill 
          className="object-cover z-0"
          priority
        />
        
        <div className="relative z-20 container px-4 space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-none" asChild>
              <Link href={`/${locale}/geschenkkoerbe`}>
                {t('ctaGifts')}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/50 backdrop-blur-sm" asChild>
               <Link href={`/${locale}/apero-catering`}>
                {t('ctaCatering')}
               </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* OFFERING SECTIONS */}
      <section className="container px-4">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Spezialitäten */}
          <Link href={`/${locale}/spezialitaeten`} className="group">
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg border-none bg-muted/50">
              <div className="aspect-video relative overflow-hidden">
                 <Image 
                   src="/images/wein/wein-1.jpg" 
                   alt="Italienische Spezialitäten" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-300"
                 />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  {tCommon('specialties')} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>
                  Antipasti, Pasta, Dolci, Wein & mehr.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          {/* Geschenkkörbe */}
          <Link href={`/${locale}/geschenkkoerbe`} className="group">
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg border-none bg-muted/50">
               <div className="aspect-video relative overflow-hidden">
                 <Image 
                   src="/images/geschenkkoerbe/geschenkkorb-1.jpg" 
                   alt="Geschenkkörbe" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-300"
                 />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  {tCommon('giftBaskets')} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>
                  Individuell zusammengestellt für jeden Anlass.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          {/* Catering */}
          <Link href={`/${locale}/apero-catering`} className="group">
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg border-none bg-muted/50">
               <div className="aspect-video relative overflow-hidden">
                 <Image 
                   src="/images/catering/catering-1.jpg" 
                   alt="Apéro Catering" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-300"
                 />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                  {tCommon('catering')} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>
                  Italienisches Fingerfood & Prosecco für Ihr Event.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container px-4">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-primary">{t('aboutTeaserTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('aboutTeaserText')}
            </p>
             <Button variant="link" className="px-0 text-primary font-semibold" asChild>
              <Link href={`/${locale}/ueber-uns`}>
                Mehr über uns erfahren &rarr;
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-[300px] w-full rounded-xl overflow-hidden bg-muted">
             <Image 
               src="/images/hero/homepage-1.jpg" 
               alt="Eva Vogel - Inhaberin salottino" 
               fill 
               className="object-cover"
             />
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{t('visitUsTitle')}</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">salottino GmbH</p>
                  <p>Seestrasse 159</p>
                  <p>8810 Horgen</p>
                </div>
              </div>
              
               <div className="flex items-start gap-3">
                <div className="w-6 flex justify-center mt-1 font-bold text-primary">🕒</div>
                <div>
                  <p className="font-semibold">{tCommon('openingHours')}</p>
                   <ul className="text-sm mt-1 space-y-1">
                    <li className="flex gap-4"><span className="w-20">{tCommon('mon')}</span> <span>{tCommon('closed')}</span></li>
                    <li className="flex gap-4"><span className="w-20">{tCommon('tueFri')}</span> <span>10:00–12:00 & 15:00–18:00</span></li>
                    <li className="flex gap-4"><span className="w-20">{tCommon('sat')}</span> <span>10:00–15:00</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <Button asChild>
              <a href="https://maps.google.com/?q=Seestrasse+159,+8810+Horgen" target="_blank" rel="noopener noreferrer">
                {t('routeBtn')}
              </a>
            </Button>
          </div>

          <div className="h-[300px] rounded-xl overflow-hidden bg-slate-100 border relative">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-slate-100">
                <MapPin className="w-8 h-8 mb-2 opacity-50" />
                <span className="text-sm">Karte (Google Maps Embed empfohlen)</span>
             </div>
             <iframe 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               loading="lazy" 
               allowFullScreen 
               referrerPolicy="no-referrer-when-downgrade"
               src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Seestrasse+159,Horgen+CH`}
               // NOTE: User needs to provide API Key or use a simple iframe embed code. 
               // For now I will comment this out or use a static image approach to avoid API key errors.
               className="hidden" // Hiding for now until configured
            ></iframe>
            {/* Fallback frame using openstreetmap or similar if possible, but for professional use Google is better */}
            <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://www.openstreetmap.org/export/embed.html?bbox=8.5900,47.2500,8.6100,47.2700&amp;layer=mapnik&amp;marker=47.2600,8.6000" 
                className="w-full h-full grayscale opacity-70 hover:opacity-100 transition-opacity"
            ></iframe>
            <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 text-xs rounded pointer-events-none">
                Horgen
            </div>
          </div>

        </div>
      </section>

      {/* TRUST / TESTIMONIALS (Placeholder) */}
      <section className="bg-muted/30 py-16">
         <div className="container px-4 text-center">
            <h3 className="text-xl font-semibold mb-8">Das sagen unsere Kunden</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-white border-none shadow-sm">
                        <CardContent className="pt-6">
                            <div className="flex justify-center mb-4 text-yellow-400">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                            <p className="italic text-muted-foreground mb-4">"Wundervolle Auswahl und sehr persönliche Beratung. Mein Geschenkkorb kam super an!"</p>
                            <p className="font-semibold text-sm">– Kunde {i}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
         </div>
      </section>
    </div>
  );
}
