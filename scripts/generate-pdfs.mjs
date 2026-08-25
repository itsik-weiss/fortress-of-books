import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const OUT = "/workspace/public/pdfs";
const BASE = "http://127.0.0.1:43141";

const jobs = [
  { route: "/pdf/students", file: "kartisiyot-talmidim.pdf" },
  { route: "/pdf/teacher", file: "maphteach-moreh.pdf" },
  { route: "/pdf/sheets", file: "dapey-teud.pdf" },
  { route: "/pdf/lesson", file: "maarach-shiur.pdf" },
  { route: "/pdf/review/students", file: "kartisiyot-hazarah.pdf" },
  { route: "/pdf/review/teacher", file: "maphteach-hazarah.pdf" },
  { route: "/pdf/review/sheets", file: "darkon-hazarah.pdf" },
  { route: "/pdf/review/lesson", file: "maarach-hazarah.pdf" },
];

fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome-stable",
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--font-render-hinting=none",
    `--user-data-dir=/tmp/chrome-pdf-profile`,
  ],
});

const page = await browser.newPage();
await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });
await page.emulateMediaType("print");

for (const job of jobs) {
  const url = `${BASE}${job.route}`;
  console.log("printing", url);
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => !document.querySelector("header"));
  await new Promise((r) => setTimeout(r, 400));
  const dest = path.join(OUT, job.file);
  await page.pdf({
    path: dest,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "12mm", bottom: "12mm", left: "10mm", right: "10mm" },
  });
  console.log("wrote", dest, fs.statSync(dest).size);
}

await browser.close();
console.log("done");
