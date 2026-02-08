import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  subject: z.string().min(1).max(160),
  message: z.string().min(1).max(3000),
  company: z.string().optional(),
});

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const payload = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[Portfolio] ${parsed.data.subject}`,
      replyTo: parsed.data.email,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        "",
        parsed.data.message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}
