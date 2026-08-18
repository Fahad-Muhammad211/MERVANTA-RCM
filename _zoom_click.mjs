import { chromium } from "playwright";
const [, , url, outPath, vw, vh, ...selectors] = process.argv;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: Number(vw) || 390, height: Number(vh) || 900 } });
await page.goto(url, { waitUntil: "networkidle" });
for (const sel of selectors) {
  await page.locator(sel).first().click();
  await page.waitForTimeout(300);
}
await page.waitForTimeout(300);
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
