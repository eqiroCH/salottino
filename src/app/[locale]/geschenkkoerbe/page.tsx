import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Gift } from 'lucide-react';
import { giftBasketOptions } from '@/content/products';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';
  
  return {
    title: isGerman ? 'Geschenkkörbe | Salottino' : 'Cesti Regalo | Salottino',
    description: isGerman
      ? 'Individuelle Geschenkkörbe mit italienischen Spezialitäten für jeden Anlass. Ab CHF 40. Perfekt für Kunden, Freunde und Familie.'
      : 'Cesti regalo personalizzati con specialità italiane per ogni occasione. Da CHF 40. Perfetti per clienti, amici e famiglia.',
  };
}

export default async function GiftBasketsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'GiftBaskets'});

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-cream">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Individuell & Persönlich
            </p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-tight">
              {t('title')}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('subtitle')}
            </p>
            
            <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
              {t('individualText')}
            </p>
          </div>
        </div>
      </section>

      {/* Size Examples */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-6">
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">Unsere Körbe</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary heading-accent heading-accent-center">
              {t('sizes')}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3 lg:gap-4 mt-6 md:mt-12 max-w-[95%] mx-auto">
            {giftBasketOptions.map((basket) => (
              <div 
                key={basket.id} 
                className="group card-elegant hover-lift overflow-hidden flex flex-col"
              >
                <div className="aspect-square relative img-zoom">
                  <Image 
                    src={basket.image} 
                    alt={basket.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/95 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5">
                    <span className="text-xs md:text-sm font-medium text-primary">{basket.size}</span>
                  </div>
                </div>
                
                <div className="p-3 md:p-8 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between mb-2 md:mb-4">
                    <h3 className="font-display text-base md:text-2xl text-primary">{basket.name}</h3>
                    <span className="text-accent font-semibold text-xs md:text-sm whitespace-nowrap">{basket.priceRange}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-3 md:mb-5 text-xs md:text-base hidden md:block">
                    {locale === 'de' ? basket.description.de : basket.description.it}
                  </p>
                  
                  <div className="pt-3 md:pt-5 border-t border-border/50 flex-1 flex flex-col">
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-6">
                      <span className="text-foreground font-medium">Inhalt: </span>
                      {locale === 'de' ? basket.examples.de : basket.examples.it}
                    </p>
                    <a 
                      href={`https://wa.me/41793745427?text=${encodeURIComponent(locale === 'de' ? `Hallo Eva, ich interessiere mich für die Grösse "${basket.name}".` : `Ciao Eva, sono interessato alla taglia "${basket.name}".`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 md:gap-2 bg-accent hover:bg-accent/90 text-white px-3 py-2 md:px-6 md:py-3 font-medium rounded-lg transition-all hover:shadow-md hover:scale-[1.02] w-full justify-center mt-auto text-xs md:text-base"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span className="hidden sm:inline">{locale === 'de' ? 'Per WhatsApp anfragen' : 'Richiedi su WhatsApp'}</span>
                      <span className="sm:hidden">Anfragen</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-secondary/30 overflow-hidden">
        <div className="marquee flex gap-4">
          {[
            '/images/geschenkkoerbe/geschenkkorb-1.jpg',
            '/images/geschenkkoerbe/geschenkkorb-2.jpg',
            '/images/geschenkkoerbe/geschenkkorb-3.jpg',
            '/images/geschenkkoerbe/geschenkkorb-4.jpg',
            '/images/geschenkkoerbe/geschenkkorb-5.jpg',
            '/images/geschenkkoerbe/geschenkkorb-6.jpg',
            '/images/geschenkkoerbe/geschenkkorb-1.jpg',
            '/images/geschenkkoerbe/geschenkkorb-2.jpg',
            '/images/geschenkkoerbe/geschenkkorb-3.jpg',
            '/images/geschenkkoerbe/geschenkkorb-4.jpg',
          ].map((src, i) => (
            <div key={i} className="relative w-56 md:w-64 aspect-square flex-shrink-0 overflow-hidden">
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

    </div>
  );
}
