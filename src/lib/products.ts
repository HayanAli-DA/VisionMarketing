// Product specification data for Vision Marketing: Coorg agro-exports.
// Structured for B2B catalog / spec-sheet rendering.

export type SpecTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type SpecRow = { label: string; value: string };

export type ProductImage = {
  src: string;
  alt: string;
  label: string;
  weight?: string;
};

export type Product = {
  key: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string; // lucide icon key
  accent: "forest" | "gold" | "coffee";
  image?: string;
  images?: ProductImage[];
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
    tagline: "Precision-graded Coorg Robusta, cup-clean & export-ready",
    description:
      "Sourced direct from shade-grown Kodagu estates and cured in our Virajpet works (est. 2004). Every lot is moisture-tested, hulling-polished, size-graded and cup-evaluated to deliver consistent, defect-controlled Robusta for roasters, importers and instant-coffee manufacturers worldwide.",
    icon: "Coffee",
    accent: "coffee",
    image: "/images/products/coffee-grade-wise-250g.jpg",
    images: [
      {
        src: "/images/products/coffee-grade-wise-250g.jpg",
        alt: "Vision Marketing Robusta Coffee Grade Wise 250g Stand-up Pouch",
        label: "250g Retail Pouch",
        weight: "250 g",
      },
    ],
    highlights: [
      "Shade-grown Coorg Robusta with direct estate procurement",
      "Curing works commissioned in 2004 with full traceability",
      "Moisture-controlled hulling, polishing & size grading",
      "Cup-evaluated lots with defect tolerance per grade",
      "Available in A, B & C Grades with rich aroma and bold taste",
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
      { label: "Processing", value: "Wet (Parchment) / Dry (Cherry) (Curing Works Est. 2004)" },
      { label: "Moisture Content", value: "10.5% to 12.0% max" },
      { label: "Cup Profile", value: "Strong body, low acidity, woody-nutty notes, clean cup" },
      { label: "Defect Tolerance", value: "Per grade, from <8 (AB/AA) to <25 (Bulk)" },
      { label: "Packaging", value: "250g stand-up pouch / 50kg & 60kg jute or GrainPro bags" },
      { label: "Lead Time", value: "15 to 25 days FCL ex-Virajpet" },
    ],
    specTables: [
      {
        caption: "Robusta Parchment: Grade-wise specifications",
        headers: ["Grade", "Screen Size", "Moisture", "Defects (max)", "Cup / Notes"],
        rows: [
          ["Parchment AB", "Screen 15 & above", "≤ 12.0%", "8 / 300g", "Clean, strong body"],
          ["Parchment PB", "Screen 13 to 14 (peaberry)", "≤ 12.0%", "10 / 300g", "Bold, rounded cup"],
          ["Parchment C", "Screen 12 to 14 (triage)", "≤ 12.0%", "15 / 300g", "Acceptable, blending grade"],
        ],
      },
      {
        caption: "Robusta Cherry: Grade-wise specifications",
        headers: ["Grade", "Screen Size", "Moisture", "Defects (max)", "Cup / Notes"],
        rows: [
          ["Cherry AA", "Screen 18 & above", "≤ 12.5%", "10 / 300g", "Bold, full body"],
          ["Cherry A", "Screen 16 to 17", "≤ 12.5%", "13 / 300g", "Strong, clean"],
          ["Cherry AB", "Screen 15 to 16", "≤ 12.5%", "15 / 300g", "Standard export grade"],
          ["Cherry PB", "Screen 13 to 14 (peaberry)", "≤ 12.5%", "14 / 300g", "Bold peaberry cup"],
          ["Cherry C", "Screen 12 to 14 (triage)", "≤ 12.5%", "20 / 300g", "Blending grade"],
          ["Cherry Bulk", "Mixed screen", "≤ 13.0%", "25 / 300g", "Economical bulk grade"],
          ["Clean Black / Browns (BBB)", "Mixed", "≤ 13.0%", "N/A", "Separation grade, no whites"],
        ],
      },
    ],
    packaging: [
      "250 g branded stand-up zipper pouch",
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
    image: "/images/products/pepper-bold-250g.jpg",
    images: [
      {
        src: "/images/products/pepper-bold-250g.jpg",
        alt: "Vision Marketing Black Pepper Bold Grade 250g Stand-up Pouch",
        label: "Bold Grade (250g)",
        weight: "250 g",
      },
      {
        src: "/images/products/pepper-bulk-5kg.jpg",
        alt: "Vision Marketing Black Pepper Bulk Grade 5kg Export Pack",
        label: "Bulk Grade (5kg)",
        weight: "5 kg",
      },
      {
        src: "/images/pepper-grading/pepper-grading-machine.jpg",
        alt: "SMS Industry Mechanical Pepper Grading Machine & Elevator at Vision Marketing Works",
        label: "Grading Works",
        weight: "SMS Industry Unit",
      },
    ],
    highlights: [
      "Pepper Grading Works commissioned in 2007 (SMS Industry grading line)",
      "Continuous bucket elevator feed & multi-deck vibratory screens",
      "Sun-cured & mechanically garbled for uniform boldness & density",
      "Size & bulk-density graded from TGSEB to MG1 to bulk",
      "Low moisture (< 11% to 12%) for extended shelf life",
      "Available in 250g retail, 5kg bulk packs, and export bags",
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
      { label: "Type", value: "Piper nigrum, sun-dried black pepper" },
      { label: "Processing", value: "Sun-cure → Garble → Size-grade → Density-grade (Est. 2007)" },
      { label: "Bulk Density", value: "500 g/L (light) to 580+ g/L (extra bold)" },
      { label: "Size Range", value: "4.25 mm to 4.75 mm+ (TGSEB bold)" },
      { label: "Moisture", value: "< 11% (garbled) / < 12% (bulk)" },
      { label: "Piperine Content", value: "4.5% to 5.5% typical" },
      { label: "Packaging", value: "250g pouch / 5kg bulk sack / 25kg & 50kg PP or jute bags" },
    ],
    specTables: [
      {
        caption: "Black Pepper: Grade-wise specifications",
        headers: ["Grade", "Size (mm)", "Bulk Density (g/L)", "Moisture", "Character"],
        rows: [
          ["TGSEB", "4.75 mm+", "560 to 580+", "< 11%", "Largest, lightest, extra bold premium export"],
          ["TGEB", "4.50 to 4.75 mm", "530 to 560", "< 11%", "Extra bold, high aroma"],
          ["MG1", "4.25 to 4.50 mm", "500 to 530", "< 12%", "Standard Malabar garbled grade-1"],
          ["Un-garbled / Bulk", "Mixed", "480 to 520", "< 12%", "Economical bulk for grinding / extraction"],
        ],
      },
    ],
    packaging: [
      "250 g stand-up zipper pouch (Bold Grade)",
      "5 kg heavy-duty bulk pack (Bulk Grade)",
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
      "Harvested sustainably from wild forest foragers and coffee-blossom plantations across Kodagu. Our Coorg honey is raw-filtered, unadulterated and supplied in retail stand-up pouches, wholesale jars and bulk food-grade drums for packers, retailers and HORECA buyers.",
    icon: "Droplet",
    accent: "gold",
    image: "/images/products/pure-honey-500g.jpg",
    images: [
      {
        src: "/images/products/pure-honey-500g.jpg",
        alt: "Vision Marketing Pure Natural Honey 500g Stand-up Pouch",
        label: "Pure Honey (500g)",
        weight: "500 g",
      },
    ],
    highlights: [
      "Multi-floral wild-forest & coffee-blossom sources",
      "Raw-filtered with no additives or adulteration",
      "Sustainably harvested from Kodagu plantations & trusted apiaries",
      "Available in 500g consumer pouches, jars & bulk drums",
    ],
    varieties: ["Wild Forest Multi-floral", "Coffee-Blossom Monofloral"],
    grades: ["Consumer Pack (500g)", "Wholesale Bulk (drums)", "Retail / HORECA Jars"],
    specRows: [
      { label: "Origin", value: "Kodagu (Coorg) forests & coffee plantations" },
      { label: "Type", value: "Raw, multi-floral / coffee-blossom honey" },
      { label: "Purity", value: "100% pure, no added sugar or glucose" },
      { label: "Moisture Content", value: "< 18% (typical 16% to 18%)" },
      { label: "Color / Grade", value: "Amber to dark amber (Pfund 50 to 90 mm)" },
      { label: "Processing", value: "Cold-extracted, raw-filtered, unheated" },
      { label: "Shelf Life", value: "24 months sealed, away from sunlight" },
      { label: "Packaging", value: "500g pouch / 25kg & 300kg food-grade drums / wholesale jars" },
    ],
    specTables: [
      {
        caption: "Coorg Honey: Specification summary",
        headers: ["Parameter", "Wild Forest", "Coffee-Blossom"],
        rows: [
          ["Moisture", "< 18%", "< 18%"],
          ["Color (Pfund)", "60 to 90 mm (dark amber)", "50 to 70 mm (amber)"],
          ["HMF (mg/kg)", "< 25", "< 25"],
          ["Diastase No.", "≥ 8", "≥ 8"],
          ["Flavor", "Earthy, resinous, bold", "Floral, mild, sweet"],
        ],
      },
    ],
    packaging: [
      "500 g premium stand-up pouch",
      "25 kg food-grade HDPE drums",
      "300 kg food-grade steel / HDPE drums",
      "500 g & 1 kg glass / PET wholesale jars",
      "Private-label retail packing on request",
    ],
  },

  // 4. COFFEE HUSK ------------------------------
  {
    key: "coffee-husk",
    name: "Coffee Husk",
    shortName: "Coffee Husk",
    tagline: "A-grade cured coffee husk for organic agriculture, composting & industrial extraction",
    description:
      "Clean, sun-dried and screened coffee husk direct from our Virajpet curing works. High organic matter, low moisture (< 12%), and controlled fibre content make it an exceptional organic input for commercial composting, soil conditioning, biomass fuel, and caffeine extraction.",
    icon: "Leaf",
    accent: "forest",
    highlights: [
      "A-grade cured coffee husk: clean, low-fibre, low moisture (< 12%)",
      "Rich organic content (> 85%) ideal for composting, bio-fertilizers & soil enrichment",
      "Screened and free of stones, metal and foreign plantation debris",
      "Bulk supply in 25 kg / 50 kg PP bags and truckload quantities",
    ],
    varieties: ["Robusta Cherry Husk", "Parchment Husk (Hull)"],
    grades: ["A-Grade Screened Husk", "Standard Bulk Husk"],
    specRows: [
      { label: "Origin", value: "Vision Coffee Curing Works, Virajpet, Kodagu" },
      { label: "Moisture Content", value: "< 12% (curing-grade, sun-dried)" },
      { label: "Purity / Cleanliness", value: "Clean, screened, low dust, < 1% foreign matter" },
      { label: "Organic Matter", value: "> 85% natural dry vegetable matter" },
      { label: "Primary Uses", value: "Organic composting, bio-fertilizer, mushroom substrate, biomass fuel, extraction" },
      { label: "Packaging", value: "25 kg / 50 kg PP woven bags; loose bulk / truckloads on request" },
    ],
    specTables: [
      {
        caption: "Coffee Husk: Technical & Grade Specifications",
        headers: ["Parameter", "Specification", "Grade / Standard", "Packaging"],
        rows: [
          ["Moisture Content", "< 12%", "A-Grade Cured", "25 / 50 kg PP bags"],
          ["Purity / Foreign Matter", "< 1%", "Cleaned & Screened", "25 / 50 kg PP bags"],
          ["Organic Matter Content", "> 85%", "Natural Plantation Husk", "50 kg PP / Jute bags"],
          ["Particle Consistency", "Screened flakes, low dust", "Commercial Grade", "Bagged / Loose Bulk"],
        ],
      },
    ],
    packaging: [
      "25 kg / 50 kg PP woven bags",
      "50 kg jute bags",
      "Full truckload / bulk container dispatch on request",
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
