'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CateringRequestSchema } from '@/lib/schemas';
import { z } from 'zod';
import { useTranslations, useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FormData = z.infer<typeof CateringRequestSchema>;

export default function CateringForm() {
  const t = useTranslations('Forms');
  const tCat = useTranslations('Catering');
  const locale = useLocale();

  const form = useForm<FormData>({
    resolver: zodResolver(CateringRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      persons: '',
      location: '',
      budget: '',
      message: ''
    }
  });

  function onSubmit(data: FormData) {
    // Format date nicely
    const formattedDate = data.date ? new Date(data.date).toLocaleDateString(locale === 'de' ? 'de-CH' : 'it-CH') : '-';
    
    // Build WhatsApp message
    const message = locale === 'de' 
      ? `Hallo Eva,

Ich möchte gerne eine Catering-Offerte anfragen:

*Name:* ${data.name}
*E-Mail:* ${data.email}
*Telefon:* ${data.phone}

*Datum:* ${formattedDate}
*Anzahl Personen:* ${data.persons}
*Ort:* ${data.location || '-'}
*Budget:* ${data.budget ? `CHF ${data.budget}` : '-'}

*Nachricht/Wünsche:*
${data.message || '-'}

Vielen Dank!`
      : `Ciao Eva,

Vorrei richiedere un preventivo per catering:

*Nome:* ${data.name}
*E-Mail:* ${data.email}
*Telefono:* ${data.phone}

*Data:* ${formattedDate}
*Numero persone:* ${data.persons}
*Luogo:* ${data.location || '-'}
*Budget:* ${data.budget ? `CHF ${data.budget}` : '-'}

*Messaggio/Desideri:*
${data.message || '-'}

Grazie mille!`;

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/41793745427?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle>{tCat('formTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('name')}</FormLabel>
                        <FormControl>
                            <Input placeholder="Max Muster" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('email')}</FormLabel>
                        <FormControl>
                            <Input placeholder="max@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                     <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('phone')}</FormLabel>
                        <FormControl>
                            <Input placeholder="+41 79 ..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('date')}</FormLabel>
                        <FormControl>
                            <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <FormField
                    control={form.control}
                    name="persons"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('persons')}</FormLabel>
                        <FormControl>
                            <Input type="number" min="1" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('location')}</FormLabel>
                        <FormControl>
                            <Input placeholder="z.B. Horgen" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('budget')}</FormLabel>
                        <FormControl>
                            <Input placeholder="CHF" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{t('message')}</FormLabel>
                    <FormControl>
                        <Textarea 
                          placeholder="Vegetarisch, Allergien, Weinauswahl..." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <Button type="submit" className="w-full inline-flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    {locale === 'de' ? 'Per WhatsApp anfragen' : 'Richiedi su WhatsApp'}
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
