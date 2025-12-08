import { getTranslations } from 'next-intl/server';

export const metadata = {
  title: 'Impressum | salottino',
};

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Impressum'});

  return (
    <div className="container px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">{t('title')}</h1>
      
      <div className="prose prose-lg max-w-none space-y-8">
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('companyTitle')}</h2>
          <p className="text-lg">
            salottino GmbH<br />
            Seestrasse 159<br />
            CH-8810 Horgen
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('contactTitle')}</h2>
          <p>
            <strong>{t('phone')}:</strong> +41 44 683 20 22<br />
            <strong>{t('mobile')}:</strong> +41 79 374 54 27<br />
            <strong>{t('email')}:</strong>{' '}
            <a href="mailto:eva.vogel@salottino.ch" className="text-primary hover:underline">
              eva.vogel@salottino.ch
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('ownerTitle')}</h2>
          <p>Eva Vogel-Degli Esposti</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('uidTitle')}</h2>
          <p>{t('uidNote')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('disclaimerTitle')}</h2>
          <p className="text-muted-foreground">{t('disclaimerText')}</p>
        </section>

      </div>
    </div>
  );
}

