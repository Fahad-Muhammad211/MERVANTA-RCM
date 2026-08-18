import { chromium } from "playwright";
const [,, url, outPath, scrollY, vw, vh] = process.argv;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: Number(vw) || 390, height: Number(vh) || 900 } });
await page.goto(url, { waitUntil: "networkidle" });
if (scrollY) {
  await page.evaluate((y) => window.scrollTo(0, y), Number(scrollY));
  await page.waitForTimeout(200);
  await page.evaluate((y) => window.scrollTo(0, y), Number(scrollY));
}
await page.waitForTimeout(400);
await page.screenshot({ path: outPath });
await browser.close();
