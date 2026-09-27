import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const errors = [];

const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
page.on("pageerror", e => errors.push("PAGEERROR: " + e.message));
page.on("console", m => { if (m.type()==='error') errors.push("CONSOLE: " + m.text()); });

await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.waitForTimeout(300);
await page.screenshot({ path: "scripts/out/final-load.png" }); // check no FOUC flash of menu
await page.click('button[aria-label="Toggle menu"]');
await page.waitForTimeout(700);
await page.screenshot({ path: "scripts/out/final-open.png" });
await page.click('button[aria-label="Toggle menu"]');
await page.waitForTimeout(700);
await page.screenshot({ path: "scripts/out/final-closed.png" });

console.log("ERRORS", errors);
await browser.close();
