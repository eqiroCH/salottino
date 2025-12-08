import { z } from 'zod';

// --- SCHEMAS ---

export const GiftRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  budget: z.string().min(1),
  amount: z.string().min(1),
  deliveryType: z.enum(["pickup", "delivery"]),
  date: z.string().optional(),
  message: z.string().optional(),
});

export const CateringRequestSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(5),
    date: z.string().min(1),
    persons: z.string().min(1),
    location: z.string().optional(),
    budget: z.string().optional(),
    message: z.string().optional()
});

export const ContactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(2),
    message: z.string().min(10)
});

