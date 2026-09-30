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

  const destination = process.env.PROPOSAL_TO_EMAIL?.trim();
  if (!destination) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const payload = {
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
    _subject: `Vulture Events Oman proposal — ${name}`,
    _template: "table",
    _captcha: "false",
  };

  const delivered = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(destination)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  }).catch(() => null);

  if (!delivered || !delivered.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
