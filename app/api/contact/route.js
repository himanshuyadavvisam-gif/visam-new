import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { brand } from "@/lib/content";

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const service = (body.service || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, service, and project details." },
      { status: 400 }
    );
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error("Contact form: EMAIL_USER / EMAIL_APP_PASSWORD not set in .env.local");
    return NextResponse.json(
      { error: "Email is not configured on the server yet." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name} (via visamsolutions.com)" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: brand.email,
      subject: `New project inquiry — ${service}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nService: ${service}\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #14120f;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone) || "—"}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Project Details:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email error:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}
