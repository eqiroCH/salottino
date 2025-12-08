import { getTranslations } from 'next-intl/server';

export const metadata = {
  title: 'Datenschutz | salottino',
};

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Privacy'});

  return (
    <div className="container px-4 pt-28 pb-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">{t('title')}</h1>
      
      <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
        
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{t('responsibleTitle')}</h2>
          <p>
            salottino GmbH<br />
            Seestrasse 159<br />
            CH-8810 Horgen<br />
            <a href="mailto:eva.vogel@salottino.ch" className="text-primary hover:underline">
              eva.vogel@salottino.ch
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{t('analyticsTitle')}</h2>
          <p>{t('analyticsText1')}</p>
          <p>{t('analyticsText2')}</p>
          <p>{t('analyticsText3')}</p>
          <p>{t('analyticsText4')}</p>
          <p>{t('analyticsText5')}</p>
          <p>
            {t('analyticsOptOut')}{' '}
            <a 
              href="https://tools.google.com/dlpage/gaoptout" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>
          <p>
            {t('moreInfo')}{' '}
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{t('contactFormTitle')}</h2>
          <p>{t('contactFormText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{t('rightsTitle')}</h2>
          <p>{t('rightsText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{t('changesTitle')}</h2>
          <p>{t('changesText')}</p>
        </section>

      </div>
    </div>
  );
}

