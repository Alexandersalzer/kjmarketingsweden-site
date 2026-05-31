import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  business: z.string().min(1).max(200),
  email: z.string().email().max(200),
  phone: z.string().max(50).optional().or(z.literal('')),
  message: z.string().min(1).max(5000),
});

const OWNER_RECIPIENTS = ['info@kjmarketingsweden.com', 'jacob@kjmarketingsweden.com'];
const FROM_ADDRESS = 'KJ Marketing Sweden <info@mail.kjmarketingsweden.com>';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const { name, business, email, phone, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log('[send-email] new submission (no RESEND_API_KEY set):', parsed.data);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: OWNER_RECIPIENTS,
      replyTo: email,
      subject: `Ny kontaktförfrågan från ${name} (${business})`,
      text: [
        `Namn: ${name}`,
        `Företag: ${business}`,
        `E-post: ${email}`,
        `Telefon: ${phone || '-'}`,
        '',
        message,
      ].join('\n'),
    });
  } catch (err) {
    console.error('[send-email] owner notification failed', err);
    return NextResponse.json({ error: 'Send failed' }, { status: 502 });
  }

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: [email],
      subject: 'Tack för ditt meddelande',
      text: `Hej ${name},\n\nTack för ditt meddelande! Vi återkommer inom 24 timmar.\n\nVänliga hälsningar,\nKJ Marketing Sweden`,
    });
  } catch (err) {
    console.error('[send-email] confirmation to submitter failed (non-blocking)', err);
  }

  return NextResponse.json({ ok: true, delivered: true });
}
