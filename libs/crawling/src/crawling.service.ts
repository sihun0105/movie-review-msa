import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class CrawlingService {
  browser: Promise<puppeteer.Browser>;
  constructor() {
    this.browser = puppeteer.launch();
  }

  async getHtml(url: string): Promise<string> {
    const browser = await this.browser;
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    await page.close();
    return html;
  }
}
