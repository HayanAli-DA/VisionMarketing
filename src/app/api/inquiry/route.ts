import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const record = await db.productInquiry.create({
      data: {
        product: body.product ? String(body.product) : "general",
        productName: body.productName ? String(body.productName) : "General inquiry",
        name,
        email,
        phone: body.phone ? String(body.phone).trim() : null,
        company: body.company ? String(body.company).trim() : null,
        country: body.country ? String(body.country).trim() : null,
        volume: body.volume ? String(body.volume).trim() : null,
        message: body.message ? String(body.message).trim() : null,
      },
    });

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error("inquiry error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.productInquiry.count();
    return NextResponse.json({ ok: true, count });
  } catch (err) {
    console.error("inquiry list error", err);
    return NextResponse.json({ ok: true, count: 0 });
  }
}
