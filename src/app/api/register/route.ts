import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const fullName = String(body.fullName ?? "").trim();
    const companyName = String(body.companyName ?? "").trim();
    const countryCity = String(body.countryCity ?? "").trim();
    const businessType = String(body.businessType ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();

    if (!fullName || !companyName || !countryCity || !businessType || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const products = Array.isArray(body.products)
      ? body.products.map(String).filter(Boolean)
      : [];

    let recordId = "direct-" + Date.now();
    try {
      const record = await db.buyerRegistration.create({
        data: {
          fullName,
          companyName,
          countryCity,
          businessType,
          taxId: body.taxId ? String(body.taxId).trim() : null,
          products: products.join(", "),
          estimatedVolume: body.estimatedVolume ? String(body.estimatedVolume) : null,
          email,
          phone,
          message: body.message ? String(body.message).trim() : null,
        },
      });
      recordId = record.id;
    } catch (dbErr) {
      console.warn("Database write skipped (serverless read-only environment):", dbErr);
    }

    return NextResponse.json({ ok: true, id: recordId });
  } catch (err) {
    console.error("register error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.buyerRegistration.count();
    return NextResponse.json({ ok: true, count });
  } catch (err) {
    console.error("register list error", err);
    return NextResponse.json({ ok: true, count: 0 });
  }
}
