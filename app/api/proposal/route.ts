import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(data: Record<string, unknown>, key: string) {
  const value = data[key];
  if (Array.isArray(value)) return value.map(String).filter(Boolean).join(", ");
  return String(value ?? "").trim();
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const data = body as Record<string, unknown>;
  if (String(data.company_website || "").trim()) {
    return NextResponse.json({ ok: true });
  }
  const name = field(data, "name");
  const email = field(data, "email");
  if (!name || !EMAIL.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const record = {
    receivedAt: new Date().toISOString(),
    name,
    email,
    phone: field(data, "phone"),
    company: field(data, "company"),
    eventType: field(data, "eventType"),
    eventDate: field(data, "eventDate"),
    eventLocation: field(data, "eventLocation"),
    guests: field(data, "guests"),
    services: field(data, "services"),
    budget: field(data, "budget"),
    message: field(data, "message"),
  };

  try {
    await put(`proposals/${Date.now()}.json`, JSON.stringify(record, null, 2), {
      access: "private",
      addRandomSuffix: true,
      contentType: "application/json",
      token,
    });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  const destination = process.env.PROPOSAL_TO_EMAIL?.trim();
  if (destination) {
    await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(destination)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...record,
        _subject: `Vulture Events Oman proposal — ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    }).catch(() => null);
  }

  return NextResponse.json({ ok: true });
}
