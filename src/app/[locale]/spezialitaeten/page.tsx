import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products, categories, Category } from '@/content/products';

export const metadata = {
  title: 'Spezialitäten | salottino',
};

export default async function SpecialtiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Specialties'});

  return (
    <div className="container px-4 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-primary">{t('title')}</h1>
        <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
      </div>

      <Tabs defaultValue="antipasti" className="w-full">
        <div className="flex justify-center mb-8 overflow-x-auto pb-4">
           <TabsList className="h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
             {categories.map((cat) => (
               <TabsTrigger 
                 key={cat} 
                 value={cat}
                 className="data-[state=active]:bg-primary data-[state=active]:text-white border border-transparent data-[state=active]:border-primary hover:border-primary/20 rounded-full px-6 py-2 transition-all"
               >
                 {t(`categories.${cat}` as any)}
               </TabsTrigger>
             ))}
           </TabsList>
        </div>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products[cat].map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 bg-muted relative overflow-hidden">
                        {product.image && (
                          <Image 
                            src={product.image} 
                            alt={product.name} 
                            fill 
                            className="object-cover"
                          />
                        )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full text-secondary-foreground whitespace-nowrap">
                          {product.origin}
                        </span>
                      </div>
                      <CardDescription>
                        {locale === 'de' ? product.descDE : product.descIT}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/${locale}/kontakt?subject=Anfrage: ${product.name}`}>
                           {t('ctaAvailability')}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
             </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

