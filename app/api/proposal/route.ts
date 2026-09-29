import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const data = body as Record<string, unknown>;
  if (String(data.company_website || "").trim()) {
    return NextResponse.json({ ok: true });
  }
  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  if (!name || !EMAIL.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
