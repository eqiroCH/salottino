'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CateringRequestSchema } from '@/lib/schemas';
import { sendCateringRequest } from '@/lib/actions';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FormData = z.infer<typeof CateringRequestSchema>;

export default function CateringForm() {
  const t = useTranslations('Forms');
  const tCat = useTranslations('Catering');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
        const result = await sendCateringRequest(data);
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
          <Card className="bg-green-50 border-green-200">
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

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? t('sending') : t('submit')}
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}

