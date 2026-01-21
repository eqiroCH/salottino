import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products, categories, categoryImages } from '@/content/products';

import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';
  
  return {
    title: isGerman ? 'Spezialitäten | Salottino' : 'Specialità | Salottino',
    description: isGerman
      ? 'Entdecken Sie unsere italienischen Spezialitäten: Olivenöl, Pasta, Weine, Prosecco, Franciacorta, Dolci und mehr. Direkt importiert aus Italien.'
      : 'Scoprite le nostre specialità italiane: olio d\'oliva, pasta, vini, prosecco, Franciacorta, dolci e altro ancora. Importato direttamente dall\'Italia.',
  };
}

export default async function SpecialtiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Specialties'});
  const whatsappBase = 'https://wa.me/41793745427';

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-cream">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Direkt aus Italien
            </p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-tight">
              {t('title')}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-6">
          <Tabs defaultValue="olio" className="w-full">
            
            {/* Category Tabs */}
            <div className="flex justify-center mb-10">
              <TabsList className="h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=inactive]:bg-secondary data-[state=inactive]:text-foreground border-0 px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-secondary/80"
                  >
                    {t(`categories.${cat}` as any)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Category Content */}
            {categories.map((cat) => (
              <TabsContent 
                key={cat} 
                value={cat} 
                className="animate-in fade-in duration-500 mt-0"
              >
                {/* Category Header with Image */}
                <div className="relative h-56 md:h-72 overflow-hidden mb-10">
                  <Image 
                    src={categoryImages[cat]} 
                    alt={t(`categories.${cat}` as any)} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/70" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="font-display text-3xl md:text-5xl text-white">
                      {t(`categories.${cat}` as any)}
                    </h2>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {products[cat].map((product) => (
                    <div 
                      key={product.id} 
                      className="group card-elegant hover-lift overflow-hidden flex flex-col"
                    >
                      {/* Product Image */}
                      <div className="aspect-[4/3] relative img-zoom bg-secondary/30">
                        {product.image && (
                          <Image 
                            src={product.image} 
                            alt={product.name} 
                            fill 
                            className="object-cover"
                          />
                        )}
                        {product.price && (
                          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1.5 text-sm font-medium">
                            {product.price}
                          </div>
                        )}
                      </div>
                      
                      {/* Product Info */}
                      <div className="p-7 flex flex-col flex-1">
                        <h3 className="font-display text-xl text-primary mb-3 leading-tight">
                          {product.name}
                        </h3>
                        
                        <span className="inline-block text-xs font-medium px-2.5 py-1 bg-secondary text-primary/70 mb-4 self-start">
                          {product.origin}
                        </span>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                          {locale === 'de' ? product.descDE : product.descIT}
                        </p>
                        
                        <a
                          href={`${whatsappBase}?text=${encodeURIComponent(
                            locale === 'de'
                              ? `Hallo Eva, ich interessiere mich für ${product.name}. Ist es verfügbar?`
                              : `Ciao Eva, sono interessato a ${product.name}. È disponibile?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-primary transition-colors mt-auto"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          {t('ctaAvailability')}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-secondary/50">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl text-primary mb-5">
              Noch mehr Auswahl im Laden
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unser Sortiment wechselt regelmässig und umfasst noch viele weitere Produkte. 
              Besuchen Sie uns im Laden oder kontaktieren Sie uns für spezielle Wünsche.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
