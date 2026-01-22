import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Star, Users } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';
  
  return {
    title: isGerman ? 'Über uns | Salottino' : 'Chi siamo | Salottino',
    description: isGerman
      ? 'Eva Vogel-Degli Esposti, gebürtige Mailänderin, importiert authentische italienische Spezialitäten direkt nach Horgen. Mit Leidenschaft und Sorgfalt ausgewählt.'
      : 'Eva Vogel-Degli Esposti, milanese di nascita, importa specialità italiane autentiche direttamente a Horgen. Selezionate con passione e cura.',
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'About'});

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-cream">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">Salottino Horgen</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              {t('title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
            
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden">
                <Image 
                  src="/images/hero/image.png" 
                  alt="Eva Vogel - Inhaberin Salottino" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="hidden md:block absolute -bottom-6 -left-6 w-48 h-48 border border-accent/20 -z-10" />
            </div>
            
            {/* Text */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl md:text-4xl text-primary mb-4 md:mb-8 heading-accent">
                {t('storyTitle')}
              </h2>
              
              <div className="space-y-4 md:space-y-5 text-muted-foreground leading-relaxed mt-6 md:mt-10 text-sm md:text-base">
                <p>{t('storyText1')}</p>
                <p>{t('storyText2')}</p>
              </div>
              
              <div className="mt-6 md:mt-10 p-4 md:p-6 bg-secondary/50 border-l-2 border-accent">
                <p className="font-display text-lg md:text-xl text-primary italic">
                  {t('signature')}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">Was uns ausmacht</p>
            <h2 className="font-display text-3xl md:text-4xl text-primary heading-accent heading-accent-center">
              {t('valuesTitle')}
            </h2>
          </div>
          
          <div className="grid grid-cols-3 gap-2 md:gap-10 mt-8 md:mt-12 max-w-5xl mx-auto">
            
            {/* Value 1 */}
            <div className="card-elegant p-3 md:p-10 text-center">
              <div className="mx-auto w-8 h-8 md:w-16 md:h-16 bg-secondary flex items-center justify-center mb-2 md:mb-6">
                <Star className="w-4 h-4 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="font-display text-xs md:text-xl text-primary mb-2 md:mb-4">{t('value1Title')}</h3>
              <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed hidden md:block">{t('value1Text')}</p>
            </div>
            
            {/* Value 2 */}
            <div className="card-elegant p-3 md:p-10 text-center">
              <div className="mx-auto w-8 h-8 md:w-16 md:h-16 bg-secondary flex items-center justify-center mb-2 md:mb-6">
                <Heart className="w-4 h-4 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="font-display text-xs md:text-xl text-primary mb-2 md:mb-4">{t('value2Title')}</h3>
              <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed hidden md:block">{t('value2Text')}</p>
            </div>
            
            {/* Value 3 */}
            <div className="card-elegant p-3 md:p-10 text-center">
              <div className="mx-auto w-8 h-8 md:w-16 md:h-16 bg-secondary flex items-center justify-center mb-2 md:mb-6">
                <Users className="w-4 h-4 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="font-display text-xs md:text-xl text-primary mb-2 md:mb-4">{t('value3Title')}</h3>
              <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed hidden md:block">{t('value3Text')}</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="marquee flex gap-4">
          {[
            '/images/geschenkkoerbe/geschenkkorb-1.jpg',
            '/images/wein/wein-1.jpg',
            '/images/catering/catering-2.jpg',
            '/images/antipasti/antipasti-1.jpg',
            '/images/geschenkkoerbe/geschenkkorb-3.jpg',
            '/images/wein/wein-2.jpg',
            '/images/geschenkkoerbe/geschenkkorb-1.jpg',
            '/images/wein/wein-1.jpg',
            '/images/catering/catering-2.jpg',
            '/images/antipasti/antipasti-1.jpg',
          ].map((src, i) => (
            <div key={i} className="relative w-52 md:w-60 aspect-square flex-shrink-0 overflow-hidden">
              <Image 
                src={src} 
                alt="" 
                fill 
                className="object-cover grayscale-[20%]"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
