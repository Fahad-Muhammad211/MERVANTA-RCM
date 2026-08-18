import { chromium } from "playwright";
import fs from "node:fs";

const outDir = process.argv[2];
const width = Number(process.argv[3] || 390);
const height = 844;

const routes = [
  "/", "/about", "/global-presence", "/revenue-cycle-management", "/services",
  "/services/medical-billing", "/specialties", "/specialties/cardiology",
  "/who-we-serve", "/enterprise-solutions", "/technology", "/client-portal",
  "/security-compliance", "/quality-assurance", "/people", "/training",
  "/client-success", "/client-success/multi-location-orthopedic-group",
  "/performance", "/insights", "/insights/reducing-first-pass-denials",
  "/resources", "/leadership", "/careers", "/careers/certified-medical-coder-multispecialty",
  "/careers/apply", "/locations", "/partnerships", "/newsroom",
  "/newsroom/global-delivery-expansion", "/corporate-responsibility", "/contact",
  "/privacy-policy", "/terms-of-use", "/cookie-policy", "/accessibility",
];

const browser = await chromium.launch();
const results = [];

for (const route of routes) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });

  try {
    await page.goto(`http://localhost:3411${route}`, { waitUntil: "networkidle", timeout: 30000 });
    const h = await page.evaluate(() => document.body.scrollHeight);
    const step = height;
    for (let y = 0; y < h; y += step) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(120);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(200);

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 2;
    });

    const fname = route === "/" ? "home" : route.replace(/\//g, "_").replace(/^_/, "");
    await page.screenshot({ path: `${outDir}/m-${fname}.png`, fullPage: true });

    results.push({ route, errors, hasHorizontalOverflow });
  } catch (e) {
    results.push({ route, errors: [String(e)], hasHorizontalOverflow: null });
  }
  await page.close();
}

await browser.close();

fs.writeFileSync(`${outDir}/mobile-audit-results.json`, JSON.stringify(results, null, 2));

console.log("\n=== SUMMARY ===");
for (const r of results) {
  const flags = [];
  if (r.hasHorizontalOverflow) flags.push("HORIZONTAL OVERFLOW");
  if (r.errors.length) flags.push(`ERRORS: ${r.errors.join(" | ")}`);
  console.log(`${flags.length ? "⚠ " : "OK "}${r.route}${flags.length ? " -> " + flags.join("; ") : ""}`);
}
