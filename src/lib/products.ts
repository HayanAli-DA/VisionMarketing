// Product specification data for Vision Marketing — Coorg agro-exports.
// Structured for B2B catalog / spec-sheet rendering.

export type SpecTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type SpecRow = { label: string; value: string };

export type Product = {
  key: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string; // lucide icon key
  accent: "forest" | "gold" | "coffee";
  highlights: string[];
  varieties: string[];
  grades: string[];
  specRows: SpecRow[];
  specTables: SpecTable[];
  packaging: string[];
};

export const products: Product[] = [
  // 1. ROBUSTA COFFEE -------------------------------------------------
  {
    key: "robusta-coffee",
    name: "Robusta Coffee (Grade-Wise)",
    shortName: "Robusta Coffee",
    tagline: "Precision-graded Coorg Robusta — cup-clean, export-ready",
    description:
      "Sourced direct from shade-grown Kodagu estates and cured in our Virajpet works (est. 2004). Every lot is moisture-tested, hulling-polished, size-graded and cup-evaluated to deliver consistent, defect-controlled Robusta for roasters, importers and instant-coffee manufacturers worldwide.",
    icon: "Coffee",
    accent: "coffee",
    highlights: [
      "Shade-grown Coorg Robusta — direct estate procurement",
      "Curing works commissioned in 2004 — full traceability",
      "Moisture-controlled hulling, polishing & size grading",
      "Cup-evaluated lots — defect tolerance per grade",
    ],
    varieties: ["Robusta Cherry", "Robusta Parchment"],
    grades: [
      "Robusta Parchment AB",
      "Robusta Parchment PB",
      "Robusta Parchment C",
      "Robusta Cherry AA",
      "Robusta Cherry A",
      "Robusta Cherry AB",
      "Robusta Cherry PB",
      "Robusta Cherry C",
      "Robusta Cherry Bulk",
      "Clean Black / Browns (BBB)",
    ],
    specRows: [
      { label: "Origin", value: "Virajpet, Kodagu (Coorg), Karnataka, India" },
      { label: "Species", value: "Coffea canephora (Robusta)" },
      { label: "Processing", value: "Wet (Parchment) / Dry (Cherry) — Curing Works Est. 2004" },
      { label: "Moisture Content", value: "10.5% – 12.0% max" },
      { label: "Cup Profile", value: "Strong body, low acidity, woody-nutty notes, clean cup" },
      { label: "Defect Tolerance", value: "Per grade — from <8 (AB/AA) to <25 (Bulk)" },
      { label: "Packaging", value: "50kg / 60kg new jute bags or GrainPro-lined bags" },
      { label: "Lead Time", value: "15–25 days FCL ex-Virajpet" },
    ],
    specTables: [
      {
        caption: "Robusta Parchment — Grade-wise specifications",
        headers: ["Grade", "Screen Size", "Moisture", "Defects (max)", "Cup / Notes"],
        rows: [
          ["Parchment AB", "Screen 15 & above", "≤ 12.0%", "8 / 300g", "Clean, strong body"],
          ["Parchment PB", "Screen 13–14 (peaberry)", "≤ 12.0%", "10 / 300g", "Bold, rounded cup"],
          ["Parchment C", "Screen 12–14 (triage)", "≤ 12.0%", "15 / 300g", "Acceptable, blending grade"],
        ],
      },
      {
        caption: "Robusta Cherry — Grade-wise specifications",
        headers: ["Grade", "Screen Size", "Moisture", "Defects (max)", "Cup / Notes"],
        rows: [
          ["Cherry AA", "Screen 18 & above", "≤ 12.5%", "10 / 300g", "Bold, full body"],
          ["Cherry A", "Screen 16–17", "≤ 12.5%", "13 / 300g", "Strong, clean"],
          ["Cherry AB", "Screen 15–16", "≤ 12.5%", "15 / 300g", "Standard export grade"],
          ["Cherry PB", "Screen 13–14 (peaberry)", "≤ 12.5%", "14 / 300g", "Bold peaberry cup"],
          ["Cherry C", "Screen 12–14 (triage)", "≤ 12.5%", "20 / 300g", "Blending grade"],
          ["Cherry Bulk", "Mixed screen", "≤ 13.0%", "25 / 300g", "Economical bulk grade"],
          ["Clean Black / Browns (BBB)", "Mixed", "≤ 13.0%", "—", "Separation grade — no whites"],
        ],
      },
    ],
    packaging: [
      "50 kg new A-twill jute bags",
      "60 kg new A-twill jute bags",
      "GrainPro / vacuum-lined inner bags on request",
      "Palletised & shrink-wrapped FCL loads",
    ],
  },

  // 2. BLACK PEPPER --------------------------------------------------
  {
    key: "black-pepper",
    name: "Black Pepper (Bold & Bulk)",
    shortName: "Black Pepper",
    tagline: "Bold, aromatic Tellicherry & Malabar grades from Coorg plantations",
    description:
      "Garbled and graded at our dedicated Pepper Grading Works (est. 2007). Kodagu-grown black pepper is sun-dried, mechanically garbled, size-sorted and density-graded to deliver bold, high-piperine Tellicherry and Malabar grades for spice processors, grinders and retail chains.",
    icon: "Sparkles",
    accent: "gold",
    highlights: [
      "Pepper Grading Works commissioned in 2007",
      "Sun-cured & mechanically garbled for uniform boldness",
      "Size & bulk-density graded — TGSEB to MG1 to bulk",
      "Low moisture (< 11–12%) for extended shelf life",
    ],
    varieties: ["Garbled (Tellicherry / Malabar)", "Un-garbled / Bulk"],
    grades: [
      "Tellicherry Garbled Special Extra Bold (TGSEB)",
      "Tellicherry Garbled Extra Bold (TGEB)",
      "Malabar Garbled Grade-1 (MG1)",
      "Un-garbled / Bulk Pepper",
    ],
    specRows: [
      { label: "Origin", value: "Kodagu (Coorg) plantations, Karnataka, India" },
      { label: "Type", value: "Piper nigrum — sun-dried black pepper" },
      { label: "Processing", value: "Sun-cure → Garble → Size-grade → Density-grade (Est. 2007)" },
      { label: "Bulk Density", value: "500 g/L (light) to 580+ g/L (extra bold)" },
      { label: "Size Range", value: "4.25 mm – 4.75 mm+ (TGSEB bold)" },
      { label: "Moisture", value: "< 11% (garbled) / < 12% (bulk)" },
      { label: "Piperine Content", value: "4.5% – 5.5% typical" },
      { label: "Packaging", value: "25 kg / 50 kg PP woven or jute bags; food-grade liners on request" },
    ],
    specTables: [
      {
        caption: "Black Pepper — Grade-wise specifications",
        headers: ["Grade", "Size (mm)", "Bulk Density (g/L)", "Moisture", "Character"],
        rows: [
          ["TGSEB", "4.75 mm+", "560 – 580+", "< 11%", "Largest, lightest, extra bold — premium export"],
          ["TGEB", "4.50 – 4.75 mm", "530 – 560", "< 11%", "Extra bold, high aroma"],
          ["MG1", "4.25 – 4.50 mm", "500 – 530", "< 12%", "Standard Malabar garbled grade-1"],
          ["Un-garbled / Bulk", "Mixed", "480 – 520", "< 12%", "Economical bulk for grinding / extraction"],
        ],
      },
    ],
    packaging: [
      "25 kg PP woven bags with food-grade liner",
      "50 kg PP woven / jute bags",
      "Multi-wall paper bags for retail-pack formats",
      "Palletised FCL / LCL loads on request",
    ],
  },

  // 3. COORG HONEY ---------------------------------------------------
  {
    key: "coorg-honey",
    name: "Pure Coorg Honey",
    shortName: "Coorg Honey",
    tagline: "Multi-floral wild-forest & coffee-blossom honey from Kodagu",
    description:
      "Harvested sustainably from wild forest foragers and coffee-blossom plantations across Kodagu. Our Coorg honey is raw-filtered, unadulterated and supplied in bulk food-grade drums and wholesale jars for packers, retailers and HORECA buyers.",
    icon: "Droplet",
    accent: "gold",
    highlights: [
      "Multi-floral wild-forest & coffee-blossom sources",
      "Raw-filtered — no additives, no adulteration",
      "Sustainably harvested from Kodagu plantations",
      "Bulk food-grade drums & wholesale jar formats",
    ],
    varieties: ["Wild Forest Multi-floral", "Coffee-Blossom Monofloral"],
    grades: ["Wholesale Bulk (drums)", "Retail / HORECA Jars"],
    specRows: [
      { label: "Origin", value: "Kodagu (Coorg) forests & coffee plantations" },
      { label: "Type", value: "Raw, multi-floral / coffee-blossom honey" },
      { label: "Purity", value: "100% pure — no added sugar or glucose" },
      { label: "Moisture Content", value: "< 18% (typical 16–18%)" },
      { label: "Color / Grade", value: "Amber to dark amber (Pfund 50–90 mm)" },
      { label: "Processing", value: "Cold-extracted, raw-filtered, unheated" },
      { label: "Shelf Life", value: "24 months sealed, away from sunlight" },
      { label: "Packaging", value: "25 kg / 300 kg food-grade drums; 500g / 1kg wholesale jars" },
    ],
    specTables: [
      {
        caption: "Coorg Honey — specification summary",
        headers: ["Parameter", "Wild Forest", "Coffee-Blossom"],
        rows: [
          ["Moisture", "< 18%", "< 18%"],
          ["Color (Pfund)", "60 – 90 mm (dark amber)", "50 – 70 mm (amber)"],
          ["HMF (mg/kg)", "< 25", "< 25"],
          ["Diastase No.", "≥ 8", "≥ 8"],
          ["Flavor", "Earthy, resinous, bold", "Floral, mild, sweet"],
        ],
      },
    ],
    packaging: [
      "25 kg food-grade HDPE drums",
      "300 kg food-grade steel / HDPE drums",
      "500 g & 1 kg glass / PET wholesale jars",
      "Private-label retail packing on request",
    ],
  },

  // 4. BY-PRODUCTS & PLANTATION PRODUCE ------------------------------
  {
    key: "by-products",
    name: "Coffee By-Products & Plantation Produce",
    shortName: "By-Products & Spices",
    tagline: "A-grade husk, cured by-products & seasonal Kodagu whole spices",
    description:
      "Value-added plantation output from our curing works and partner estates across Kodagu. A-grade coffee husk for organic manure and extraction, cured coffee by-products for blending, and seasonal Kodagu whole spices for spice processors and packers.",
    icon: "Leaf",
    accent: "forest",
    highlights: [
      "A-grade coffee husk — clean, low-fibre, low moisture",
      "Cured by-products for industrial blending",
      "Seasonal Kodagu whole spices (cardamom, clove, nutmeg)",
      "Bulk supply for processors & organic-input makers",
    ],
    varieties: ["Coffee Husk", "Cured Coffee By-Products", "Kodagu Whole Spices (seasonal)"],
    grades: ["A-Grade Husk", "Blending By-Products", "Seasonal Spice Lots"],
    specRows: [
      { label: "Origin", value: "Virajpet curing works & Kodagu partner estates" },
      { label: "Coffee Husk", value: "A-grade, < 12% moisture, low fibre dust" },
      { label: "Cured By-Products", value: "Triage / clean blacks / clean browns — blending grade" },
      { label: "Whole Spices", value: "Seasonal: cardamom, clove, nutmeg, mace (subject to crop)" },
      { label: "Use", value: "Organic manure, caffeine extraction, industrial blending, retail packing" },
      { label: "Packaging", value: "25 kg / 50 kg PP or jute bags; bulk as required" },
    ],
    specTables: [
      {
        caption: "By-products — indicative specifications",
        headers: ["Item", "Moisture", "Purity / Grade", "Packaging"],
        rows: [
          ["Coffee Husk (A-grade)", "< 12%", "Low dust, clean", "25 / 50 kg PP bags"],
          ["Clean Black / Brown (BBB)", "< 13%", "No whites, uniform", "50 / 60 kg jute bags"],
          ["Cardamom (seasonal)", "< 12%", "Bold 8mm+, AG1 grade", "5 / 10 kg food-grade boxes"],
          ["Clove / Nutmeg (seasonal)", "< 12%", "Hand-graded, sorted", "10 / 25 kg bags"],
        ],
      },
    ],
    packaging: [
      "25 kg / 50 kg PP woven bags",
      "50 kg / 60 kg jute bags",
      "Food-grade boxes for whole spices",
      "Custom bulk packing on request",
    ],
  },
];

export const businessTypes = [
  "Importer",
  "Roaster",
  "Wholesaler",
  "Spice Processor",
  "Retail Chain",
  "Distributor",
  "Other",
];

export function getProduct(key: string): Product | undefined {
  return products.find((p) => p.key === key);
}
