import { getTranslations } from 'next-intl/server';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Kontakt | salottino',
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Contact'});
  const tCommon = await getTranslations({locale, namespace: 'Common'});

  return (
    <div className="container px-4 py-12 space-y-12">
      
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-primary">{t('title')}</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-1">{tCommon('address')}</h3>
                    <p>salottino GmbH</p>
                    <p>Seestrasse 159</p>
                    <p>CH-8810 Horgen</p>
                    <a 
                        href="https://maps.google.com/?q=Seestrasse+159,+8810+Horgen" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm mt-2 inline-block"
                    >
                        {tCommon('address')} (Google Maps)
                    </a>
                </div>
            </div>

             {/* Phone/Email */}
             <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-1">{tCommon('phone')}</h3>
                    <p>+41 44 683 20 22</p>
                    <p>Mobile: +41 79 374 54 27</p>
                    <p className="text-sm text-muted-foreground mt-1">{t('emergency')}: 079 374 54 27</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-1">{tCommon('email')}</h3>
                    <a href="mailto:eva.vogel@salottino.ch" className="hover:text-primary transition-colors">eva.vogel@salottino.ch</a>
                </div>
            </div>

             {/* Opening Hours */}
             <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-1">{tCommon('openingHours')}</h3>
                     <ul className="space-y-1">
                        <li className="flex justify-between w-48"><span>{tCommon('mon')}</span> <span>{tCommon('closed')}</span></li>
                        <li className="flex justify-between w-48"><span>{tCommon('tueFri')}</span> <span>10:00–12:00 | 15:00–18:00</span></li>
                        <li className="flex justify-between w-48"><span>{tCommon('sat')}</span> <span>10:00–15:00</span></li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">{t('delivery')}</p>
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <div>
            <ContactForm />
        </div>

      </div>

    </div>
  );
}

