import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CateringForm from '@/components/forms/CateringForm';
import { Check, Store, Truck, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === 'de';
  
  return {
    title: isGerman ? 'Apéro-Catering | Salottino' : 'Catering Aperitivo | Salottino',
    description: isGerman
      ? 'Italienisches Apéro-Catering für Ihren Event. Fingerfood, Prosecco & Wein. Bei Ihnen vor Ort oder im Salottino. Für Firmenfeiern, Geburtstage und mehr.'
      : 'Catering aperitivo italiano per il vostro evento. Finger food, prosecco e vino. Da voi in loco o al Salottino. Per feste aziendali, compleanni e altro.',
  };
}

export default async function CateringPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Catering'});

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/catering/catering-1.jpg" 
            alt="Apéro Catering" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        
        <div className="container px-6 relative">
          <div className="max-w-5xl">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Dolce Vita für Ihren Event
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                {t('title')}
              </h1>
              
              <a 
                href="#catering-form"
                className="inline-flex items-center gap-2 border-2 border-white text-white bg-transparent px-8 py-4 text-base font-medium tracking-wide hover:bg-white/10 transition-all duration-300 shrink-0"
              >
                {t('ctaButton')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            
            {/* Option 1 */}
            <div className="card-elegant p-10">
              <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-6">
                <Store className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">{t('inStore')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('inStoreDesc')}</p>
            </div>
            
            {/* Option 2 */}
            <div className="card-elegant p-10">
              <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">{t('atHome')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('atHomeDesc')}</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Menus */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">Unsere Angebote</p>
              <h2 className="font-display text-3xl md:text-4xl text-primary heading-accent heading-accent-center">
                {t('menus')}
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4 mt-6">
              <AccordionItem value="item-1" className="border border-border/50 px-6 data-[state=open]:border-accent/30">
                <AccordionTrigger className="text-lg font-display text-primary hover:no-underline py-6">
                  {t('menu1')}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="space-y-3">
                    {['Oliven & Taralli', 'Parmigiano Reggiano Würfel', 'Salami-Variation', '1 Glas Prosecco p.P.'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-border/50 px-6 data-[state=open]:border-accent/30">
                <AccordionTrigger className="text-lg font-display text-primary hover:no-underline py-6">
                  {t('menu2')}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="space-y-3">
                    {['Alles vom Piccolo Apéro', 'Gegrilltes Gemüse (Antipasti)', 'Bruschetta Mista', '1 Glas Prosecco + 1 Glas Wein p.P.'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-border/50 px-6 data-[state=open]:border-accent/30">
                <AccordionTrigger className="text-lg font-display text-primary hover:no-underline py-6">
                  {t('menu3')}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="space-y-3">
                    {['Grosses Buffet à discrétion', 'Warme Focaccia', 'Dolci (Tiramisu im Glas, Cantuccini)', 'Getränke nach Verbrauch'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 bg-white">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[2, 3, 4, 5].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image 
                  src={`/images/catering/catering-${i}.jpg`} 
                  alt={`Catering Impression ${i}`} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="catering-form" className="py-12 md:py-16 bg-cream">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">Jetzt anfragen</p>
              <h2 className="font-display text-3xl md:text-4xl text-primary heading-accent heading-accent-center">
                {t('formTitle')}
              </h2>
              <p className="text-muted-foreground mt-6">
                Teilen Sie uns Ihre Wünsche mit – wir erstellen Ihnen gerne eine individuelle Offerte.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 border border-border/50">
              <CateringForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
