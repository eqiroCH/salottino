import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import GiftForm from '@/components/forms/GiftForm';

export const metadata = {
  title: 'Geschenkkörbe | salottino',
};

export default async function GiftBasketsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'GiftBaskets'});

  return (
    <div className="container px-4 py-12 space-y-16">
      
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-primary">{t('title')}</h1>
        <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
        <p className="leading-relaxed">
          {t('individualText')}
        </p>
      </div>

      {/* Examples Grid */}
      <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">{t('sizes')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
              {/* Example 1 */}
              <Card className="overflow-hidden bg-muted/30 border-none">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                      <Image 
                        src="/images/geschenkkoerbe/geschenkkorb-2.jpg" 
                        alt="Piccolo Geschenkkorb" 
                        fill 
                        className="object-cover"
                      />
                  </div>
                  <CardHeader>
                      <CardTitle>Piccolo (S)</CardTitle>
                      <CardDescription>Ideal als kleine Aufmerksamkeit.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p className="text-sm">z.B. Pasta, Sugo, Kleines Öl</p>
                      <p className="font-bold mt-2">ca. CHF 30–50</p>
                  </CardContent>
              </Card>

              {/* Example 2 */}
              <Card className="overflow-hidden bg-muted/30 border-none">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                      <Image 
                        src="/images/geschenkkoerbe/geschenkkorb-3.jpg" 
                        alt="Medio Geschenkkorb" 
                        fill 
                        className="object-cover"
                      />
                  </div>
                  <CardHeader>
                      <CardTitle>Medio (M)</CardTitle>
                      <CardDescription>Der Klassiker für Freunde & Familie.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p className="text-sm">z.B. Wein, Risotto, Antipasti, Dolci</p>
                      <p className="font-bold mt-2">ca. CHF 60–90</p>
                  </CardContent>
              </Card>

              {/* Example 3 */}
              <Card className="overflow-hidden bg-muted/30 border-none">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                      <Image 
                        src="/images/geschenkkoerbe/geschenkkorb-1.jpg" 
                        alt="Grande Geschenkkorb" 
                        fill 
                        className="object-cover"
                      />
                  </div>
                  <CardHeader>
                      <CardTitle>Grande (L)</CardTitle>
                      <CardDescription>Für den grossen Genuss oder Geschäftspartner.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p className="text-sm">z.B. Prosecco, Grappa, grosse Antipasti-Auswahl, Spezialitäten</p>
                      <p className="font-bold mt-2">ab CHF 100</p>
                  </CardContent>
              </Card>
          </div>
      </section>

      {/* Form Section */}
      <section className="max-w-2xl mx-auto">
        <GiftForm />
      </section>

    </div>
  );
}

