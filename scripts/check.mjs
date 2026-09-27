import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push("pageerror: " + err.message));

await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(1500);
await page.screenshot({ path: "scripts/out/hero.png" });

await page.mouse.wheel(0, 1500);
await page.waitForTimeout(800);
await page.screenshot({ path: "scripts/out/hero-scrolled.png" });

await page.mouse.wheel(0, 3000);
await page.waitForTimeout(800);
await page.screenshot({ path: "scripts/out/services.png" });

await page.mouse.wheel(0, 4000);
await page.waitForTimeout(800);
await page.screenshot({ path: "scripts/out/work.png" });

await browser.close();

console.log("ERRORS:", JSON.stringify(errors, null, 2));
