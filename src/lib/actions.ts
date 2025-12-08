'use server'

import { z } from 'zod';
import { Resend } from 'resend';
import { GiftRequestSchema, CateringRequestSchema, ContactSchema } from './schemas';

// --- ACTIONS ---

async function sendEmail({ subject, html, replyTo }: { subject: string, html: string, replyTo: string }) {
    if (!process.env.RESEND_API_KEY) {
        console.log("--- MOCK EMAIL ---");
        console.log("Subject:", subject);
        console.log("To: eva.vogel@salottino.ch");
        console.log("Reply-To:", replyTo);
        console.log("Content:", html);
        console.log("------------------");
        await new Promise(r => setTimeout(r, 800)); // Simulate latency
        return { success: true, message: "Mock email sent" };
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'salottino Web <website@salottino.ch>', // Ensure this domain is verified in Resend or use 'onboarding@resend.dev' for testing
            to: ['eva.vogel@salottino.ch'],
            replyTo: replyTo,
            subject: subject,
            html: html
        });
        return { success: true };
    } catch (error) {
        console.error("Resend Error:", error);
        return { success: false, error: "Email sending failed" };
    }
}

export async function sendGiftRequest(data: z.infer<typeof GiftRequestSchema>) {
    const result = GiftRequestSchema.safeParse(data);
    if (!result.success) return { success: false, error: "Validation Error" };
    
    const d = result.data;
    const html = `
      <h2>Neue Geschenkkorb-Anfrage</h2>
      <p><strong>Name:</strong> ${d.name}</p>
      <p><strong>Email:</strong> ${d.email}</p>
      <p><strong>Tel:</strong> ${d.phone}</p>
      <hr/>
      <p><strong>Budget pro Korb:</strong> ${d.budget}</p>
      <p><strong>Anzahl:</strong> ${d.amount}</p>
      <p><strong>Lieferung:</strong> ${d.deliveryType}</p>
      <p><strong>Wunschdatum:</strong> ${d.date || '-'}</p>
      <p><strong>Nachricht:</strong><br/>${d.message || '-'}</p>
    `;

    return await sendEmail({ subject: `Geschenkkorb Anfrage: ${d.name}`, html, replyTo: d.email });
}

export async function sendCateringRequest(data: z.infer<typeof CateringRequestSchema>) {
    const result = CateringRequestSchema.safeParse(data);
    if (!result.success) return { success: false, error: "Validation Error" };

    const d = result.data;
    const html = `
      <h2>Neue Catering-Anfrage</h2>
      <p><strong>Name:</strong> ${d.name}</p>
      <p><strong>Email:</strong> ${d.email}</p>
      <p><strong>Tel:</strong> ${d.phone}</p>
      <hr/>
      <p><strong>Datum:</strong> ${d.date}</p>
      <p><strong>Personen:</strong> ${d.persons}</p>
      <p><strong>Ort:</strong> ${d.location || '-'}</p>
      <p><strong>Budget:</strong> ${d.budget || '-'}</p>
      <p><strong>Nachricht:</strong><br/>${d.message || '-'}</p>
    `;

    return await sendEmail({ subject: `Catering Anfrage: ${d.name}`, html, replyTo: d.email });
}

export async function sendContactForm(data: z.infer<typeof ContactSchema>) {
    const result = ContactSchema.safeParse(data);
    if (!result.success) return { success: false, error: "Validation Error" };

    const d = result.data;
    const html = `
      <h2>Neue Kontakt-Nachricht</h2>
      <p><strong>Name:</strong> ${d.name}</p>
      <p><strong>Email:</strong> ${d.email}</p>
      <hr/>
      <p><strong>Betreff:</strong> ${d.subject}</p>
      <p><strong>Nachricht:</strong><br/>${d.message}</p>
    `;

    return await sendEmail({ subject: `Kontakt: ${d.subject}`, html, replyTo: d.email });
}
