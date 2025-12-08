import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Users } from 'lucide-react';

export const metadata = {
  title: 'Über uns | salottino',
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'About'});

  return (
    <div className="container px-4 py-12 space-y-16">
      
      {/* Hero / Intro */}
      <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-primary">{t('title')}</h1>
              <h2 className="text-2xl font-semibold">{t('storyTitle')}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t('storyText1')}</p>
                  <p>{t('storyText2')}</p>
                  <p className="font-medium text-primary italic pt-2">{t('signature')}</p>
              </div>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full bg-muted rounded-xl overflow-hidden shadow-lg">
             <Image 
               src="/images/hero/homepage-1.jpg" 
               alt="Eva Vogel - Inhaberin salottino" 
               fill 
               className="object-cover"
             />
          </div>
      </div>

      {/* Values */}
      <section>
          <h2 className="text-2xl font-semibold text-center mb-8">{t('valuesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
              <Card>
                  <CardContent className="pt-6 text-center space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <Star className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-lg">{t('value1Title')}</h3>
                      <p className="text-sm text-muted-foreground">{t('value1Text')}</p>
                  </CardContent>
              </Card>
               <Card>
                  <CardContent className="pt-6 text-center space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <Users className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-lg">{t('value3Title')}</h3>
                      <p className="text-sm text-muted-foreground">{t('value3Text')}</p>
                  </CardContent>
              </Card>
               <Card>
                  <CardContent className="pt-6 text-center space-y-4">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <Heart className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-lg">{t('value2Title')}</h3>
                      <p className="text-sm text-muted-foreground">{t('value2Text')}</p>
                  </CardContent>
              </Card>
          </div>
      </section>

    </div>
  );
}

