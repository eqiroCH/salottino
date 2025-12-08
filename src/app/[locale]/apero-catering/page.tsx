import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CateringForm from '@/components/forms/CateringForm';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Apéro Catering | salottino',
};

export default async function CateringPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Catering'});

  return (
    <div className="container px-4 pt-28 pb-16 space-y-16">
      
      {/* Hero Image */}
      <div className="relative h-[300px] rounded-2xl overflow-hidden">
        <Image 
          src="/images/catering/catering-1.jpg" 
          alt="Apéro Catering" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          <p className="text-lg text-white/90 mt-2">{t('subtitle')}</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[2, 3, 4, 5, 6, 7, 8].slice(0, 4).map((i) => (
          <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
            <Image 
              src={`/images/catering/catering-${i}.jpg`} 
              alt={`Catering Impression ${i}`} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-6">        
        <div className="grid md:grid-cols-2 gap-8 pt-8 text-left">
            <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{t('inStore')}</h3>
                <p>{t('inStoreDesc')}</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{t('atHome')}</h3>
                <p>{t('atHomeDesc')}</p>
            </div>
        </div>
      </div>

      {/* Menus */}
      <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">{t('menus')}</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>{t('menu1')}</AccordionTrigger>
                <AccordionContent>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Oliven & Taralli</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Parmigiano Reggiano Würfel</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Salami-Variation</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 1 Glas Prosecco p.P.</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>{t('menu2')}</AccordionTrigger>
                <AccordionContent>
                     <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Alles vom Piccolo Apéro</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Gegrilltes Gemüse (Antipasti)</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Bruschetta Mista</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 1 Glas Prosecco + 1 Glas Wein p.P.</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>{t('menu3')}</AccordionTrigger>
                <AccordionContent>
                     <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Grosses Buffet à discrétion</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Warme Focaccia</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Dolci (Tiramisu im Glas, Cantuccini)</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Getränke nach Verbrauch</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
      </section>

      {/* Form Section */}
      <section className="max-w-2xl mx-auto">
        <CateringForm />
      </section>

    </div>
  );
}

