'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { GiftRequestSchema } from '@/lib/schemas';
import { sendGiftRequest } from '@/lib/actions';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FormData = z.infer<typeof GiftRequestSchema>;

export default function GiftForm() {
  const t = useTranslations('Forms');
  const tGift = useTranslations('GiftBaskets');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(GiftRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      budget: '',
      amount: '1',
      deliveryType: 'pickup',
      date: '',
      message: ''
    }
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
        const result = await sendGiftRequest(data);
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
            <CardTitle>{tGift('formTitle')}</CardTitle>
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
                    name="budget"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('budget')}</FormLabel>
                        <FormControl>
                            <Input placeholder="100.00" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('amount')}</FormLabel>
                        <FormControl>
                            <Input type="number" min="1" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="deliveryType"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>{t('delivery')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={t('delivery')} />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="pickup">{t('pickup')}</SelectItem>
                            <SelectItem value="delivery">{t('deliveryOption')}</SelectItem>
                            </SelectContent>
                        </Select>
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
                          placeholder="Besondere Wünsche (vegetarisch, ohne Alkohol, ...)" 
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

