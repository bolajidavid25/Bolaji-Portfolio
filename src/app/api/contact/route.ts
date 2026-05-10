import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;
const recipientEmail = process.env.CONTACT_EMAIL ?? "bolajidavid05@gmail.com";

if (!apiKey) {
  console.warn(
    "RESEND_API_KEY is not set. Contact form email will not be sent. Add RESEND_API_KEY to .env.local or see .env.local.example.",
  );
}

type Payload = {
  name: string;
  email: string;
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Partial<Payload>;

  if (!name || name.trim().length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name." },
      { status: 400 },
    );
  }
  if (!email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email." },
      { status: 400 },
    );
  }
  if (!message || message.trim().length < 10) {
    return NextResponse.json(
      { ok: false, error: "Message should be at least 10 characters." },
      { status: 400 },
    );
  }

  if (!resend) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email service is not configured. Please set RESEND_API_KEY in .env.local and restart the app.",
      },
      { status: 500 },
    );
  }

  const senderEmail = "onboarding@resend.dev";

  try {
    await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      subject: `New message from ${name.trim()} - bolaji-portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message.trim()}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: senderEmail,
      to: email.trim(),
      subject: "Message received - Bolaji David",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thanks for reaching out!</h2>
          <p>Hi ${name.trim()},</p>
          <p>I've received your message and will get back to you within 24-48 hours.</p>
          <p>Best regards,<br>Bolaji David</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] email error", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}

