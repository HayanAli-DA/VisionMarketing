// Client-side printable spec-sheet generator.
// Builds a clean, print-optimized HTML document and opens it in a new
// window with an auto-triggered print dialog (browser "Save as PDF").

import { products, type Product } from "@/lib/products";

const BRAND = {
  forest: "#1B3B2B",
  coffee: "#3E2723",
  ivory: "#F8F7F4",
  gold: "#C8963E",
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tableHtml(table: Product["specTables"][number]): string {
  const head = table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("");
  const body = table.rows
    .map(
      (r) =>
        `<tr>${r.map((c) => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`
    )
    .join("");
  return `
    ${table.caption ? `<div class="cap">${escapeHtml(table.caption)}</div>` : ""}
    <table>
      <thead><tr>${head}</tr></thead>
      <tbody>${body}</tbody>
    </table>`;
}

export function buildSpecSheetHtml(productKey: string): string | null {
  const product = products.find((p) => p.key === productKey);
  if (!product) return null;

  const specRows = product.specRows
    .map(
      (r) =>
        `<tr><th>${escapeHtml(r.label)}</th><td>${escapeHtml(r.value)}</td></tr>`
    )
    .join("");

  const tables = product.specTables.map(tableHtml).join("");

  const grades = product.grades.map((g) => `<li>${escapeHtml(g)}</li>`).join("");
  const varieties = product.varieties
    .map((v) => `<li>${escapeHtml(v)}</li></li>`)
    .join("");
  const packaging = product.packaging
    .map((p) => `<li>${escapeHtml(p)}</li>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(product.name)} — Spec Sheet | Vision Marketing</title>
<style>
  * { box-sizing: border-box; }
  body {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: ${BRAND.coffee};
    background: #fff;
    margin: 0; padding: 32px 36px;
    font-size: 12px; line-height: 1.5;
  }
  .head {
    display: flex; justify-content: space-between; align-items: flex-start;
    border-bottom: 3px solid ${BRAND.gold}; padding-bottom: 14px; margin-bottom: 20px;
  }
  .brand { font-family: 'Playfair Display', Georgia, serif; }
  .brand .name { font-size: 22px; font-weight: 800; color: ${BRAND.forest}; letter-spacing: -0.5px; }
  .brand .tag { font-size: 9.5px; letter-spacing: 1px; color: ${BRAND.coffee}; text-transform: uppercase; margin-top: 2px; }
  .brand .co { font-size: 10px; color: ${BRAND.gold}; font-weight: 700; margin-top: 6px; }
  .doc { text-align: right; }
  .doc h1 { font-family: 'Playfair Display', Georgia, serif; font-size: 17px; margin: 0 0 4px; color: ${BRAND.coffee}; }
  .doc .meta { font-size: 10px; color: #6b5d52; }
  .doc .pill { display: inline-block; background: ${BRAND.forest}; color: ${BRAND.ivory}; padding: 3px 10px; border-radius: 999px; font-size: 9px; letter-spacing: 1px; margin-top: 6px; }
  h2 { font-family: 'Playfair Display', Georgia, serif; font-size: 14px; color: ${BRAND.forest}; margin: 22px 0 8px; padding-bottom: 5px; border-bottom: 1px solid #e2dbcd; }
  p.lead { font-size: 12px; color: ${BRAND.coffee}; margin: 6px 0 12px; }
  table { width: 100%; border-collapse: collapse; margin: 6px 0 14px; font-size: 11px; }
  .cap { font-size: 10.5px; font-weight: 700; color: ${BRAND.coffee}; margin: 4px 0 2px; font-style: italic; }
  th, td { border: 1px solid #e2dbcd; padding: 6px 9px; text-align: left; vertical-align: top; }
  thead th { background: ${BRAND.forest}; color: ${BRAND.ivory}; font-weight: 600; letter-spacing: 0.3px; }
  tbody tr:nth-child(even) { background: ${BRAND.ivory}; }
  table.kv th { width: 38%; background: ${BRAND.ivory}; color: ${BRAND.coffee}; }
  ul { margin: 4px 0 10px 18px; padding: 0; }
  li { margin: 2px 0; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .col h2 { margin-top: 0; }
  .foot { margin-top: 26px; border-top: 2px solid ${BRAND.gold}; padding-top: 10px; font-size: 9.5px; color: #6b5d52; display: flex; justify-content: space-between; }
  .cta { background: ${BRAND.ivory}; border: 1px solid ${BRAND.gold}; padding: 10px 14px; border-radius: 8px; margin: 16px 0; font-size: 11px; }
  .cta strong { color: ${BRAND.forest}; }
  @media print {
    body { padding: 18px; }
    .noprint { display: none; }
  }
</style>
</head>
<body>
  <div class="head">
    <div class="brand">
      <div class="name">VISION MARKETING</div>
      <div class="tag">Buyer &amp; Exporter of Coorg Agricultural Products</div>
      <div class="co">Virajpet, Kodagu (Coorg), Karnataka — Since 2001</div>
    </div>
    <div class="doc">
      <h1>Technical Specification Sheet</h1>
      <div class="meta">Document: VM-SPEC-${product.shortName.replace(/\s+/g, "")}<br/>Issued: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</div>
      <div class="pill">${escapeHtml(product.shortName.toUpperCase())}</div>
    </div>
  </div>

  <h2>Product Overview</h2>
  <p class="lead">${escapeHtml(product.description)}</p>

  <div class="grid">
    <div class="col">
      <h2>Core Specifications</h2>
      <table class="kv">
        ${specRows}
      </table>
      <h2>Grades Available</h2>
      <ul>${grades}</ul>
    </div>
    <div class="col">
      <h2>Varieties</h2>
      <ul>${varieties}</ul>
      <h2>Standard Packaging</h2>
      <ul>${packaging}</ul>
    </div>
  </div>

  <h2>Detailed Grade-wise Specifications</h2>
  ${tables}

  <div class="cta">
    <strong>Request a quote or sample for this product:</strong> Email <u>sales@visionmarketing.in</u> with the document reference above, or register as a trade partner at visionmarketing.in#buyer-portal for weekly crop reports and bulk contract pricing.
  </div>

  <div class="foot">
    <div>Vision Marketing • Proprietor: Duddiyanda Fakrudhin Ashrafali • GSTIN 29AFEPA6566L1Z3<br/>Near KSRTC Bus Stand, Chockcity, Bilugunda, Hattur Road, Virajpet, Coorg (Kodagu), Karnataka – 571218, India</div>
    <div>Generated from visionmarketing.in</div>
  </div>

  <script>
    window.onload = function(){ setTimeout(function(){ window.print(); }, 350); };
  </script>
</body>
</html>`;
}

/** Open a printable spec sheet for the given product in a new window. */
export function downloadSpecSheet(productKey: string): void {
  const html = buildSpecSheetHtml(productKey);
  if (!html) return;
  const w = window.open("", "_blank", "width=900,height=1000");
  if (!w) {
    alert("Please allow pop-ups to download the spec sheet.");
    return;
  }
  w.document.open();
  w.document.write(html);
  w.document.close();
}
