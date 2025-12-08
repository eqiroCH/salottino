'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactSchema } from '@/lib/schemas';
import { sendContactForm } from '@/lib/actions';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearchParams } from 'next/navigation';

type FormData = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const t = useTranslations('Forms');
  const tContact = useTranslations('Contact');
  const searchParams = useSearchParams();
  const defaultSubject = searchParams.get('subject') || '';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: defaultSubject,
      message: ''
    }
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
        const result = await sendContactForm(data);
        if (result.success) {
            setSuccess(true);
            form.reset();
        } else {
            alert(t('error'));
        }
    } catch (e) {
        alert(t('error'));
    } finally {
        setIsSubmitting(false);
    }
  }

  if (success) {
      return (
          <Card className="bg-green-50 border-green-200 h-full flex flex-col justify-center">
              <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{t('success')}</h3>
                  <Button onClick={() => setSuccess(false)} variant="outline">{t('submit')}</Button>
              </CardContent>
          </Card>
      )
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle>{tContact('formTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
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

                <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{tContact('subject')}</FormLabel>
                    <FormControl>
                        <Input placeholder="..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{t('message')}</FormLabel>
                    <FormControl>
                        <Textarea 
                          placeholder="..." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? t('sending') : t('submit')}
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}

