import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.goto('file://' + path.join(__dirname, 'music-quiz-slides.html'), { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise(r => setTimeout(r, 3000));
await page.pdf({
  path: path.join(__dirname, 'music-quiz-slides.pdf'),
  format: 'A4',
  landscape: true,
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();
console.log('PDF 생성 완료');
