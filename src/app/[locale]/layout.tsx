import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const isGerman = locale === 'de';
  
  return {
    title: {
      default: 'Salottino – Italienische Spezialitäten in Horgen',
      template: '%s | Salottino'
    },
    description: isGerman
      ? 'Authentische italienische Spezialitäten, individuelle Geschenkkörbe und Apéro-Catering in Horgen am Zürichsee. Direkt importiert aus Italien.'
      : 'Specialità italiane autentiche, cesti regalo personalizzati e catering per aperitivi a Horgen sul Lago di Zurigo. Importato direttamente dall\'Italia.',
    keywords: isGerman
      ? ['italienische spezialitäten', 'horgen', 'geschenkkörbe', 'catering', 'italienische lebensmittel', 'feinkost horgen', 'prosecco', 'antipasti', 'italienischer wein']
      : ['specialità italiane', 'horgen', 'cesti regalo', 'catering', 'cibo italiano', 'prosecco', 'antipasti', 'vino italiano'],
    authors: [{ name: 'Eva Vogel-Degli Esposti', url: 'https://salottino.ch' }],
    creator: 'Salottino GmbH',
    publisher: 'Salottino GmbH',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://salottino.ch'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'de': '/de',
        'it': '/it',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'de' ? 'de_CH' : 'it_CH',
      url: `https://salottino.ch/${locale}`,
      siteName: 'Salottino',
      title: 'Salottino – Italienische Spezialitäten in Horgen',
      description: isGerman
        ? 'Authentische italienische Spezialitäten, individuelle Geschenkkörbe und Apéro-Catering in Horgen am Zürichsee.'
        : 'Specialità italiane autentiche, cesti regalo personalizzati e catering per aperitivi a Horgen sul Lago di Zurigo.',
      images: [
        {
          url: '/images/hero/homepage-2.jpg',
          width: 1200,
          height: 630,
          alt: 'Salottino – Italienische Spezialitäten',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Salottino – Italienische Spezialitäten',
      description: isGerman
        ? 'Authentische italienische Spezialitäten in Horgen'
        : 'Specialità italiane autentiche a Horgen',
      images: ['/images/hero/homepage-2.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Google Search Console verification kann hier hinzugefügt werden
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!['de', 'it'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  // Structured Data (JSON-LD) für SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Salottino',
    alternateName: 'Salottino – Italienische Spezialitäten',
    description: locale === 'de' 
      ? 'Italienische Feinkost, Geschenkkörbe und Apéro-Catering in Horgen'
      : 'Specialità italiane, cesti regalo e catering per aperitivi a Horgen',
    url: `https://salottino.ch/${locale}`,
    logo: 'https://salottino.ch/images/logo/salottino-logo1.png',
    image: 'https://salottino.ch/images/hero/homepage-2.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Seestrasse 159',
      addressLocality: 'Horgen',
      postalCode: '8810',
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.2600,
      longitude: 8.6000,
    },
    telephone: '+41446832022',
    email: 'eva.vogel@salottino.ch',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday'],
        opens: null,
        closes: null,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '12:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '15:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '15:00',
      },
    ],
    priceRange: '$$',
    servesCuisine: 'Italian',
    areaServed: {
      '@type': 'City',
      name: 'Horgen',
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header locale={locale} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
