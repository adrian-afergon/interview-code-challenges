import puppeteer from 'puppeteer';
import {Config} from './config'

describe('Application', () => {

    let browser: puppeteer.Browser;
    let page: puppeteer.Page;
    let skippedTest = false;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
        });
        page = await browser.newPage();

        await page.emulate({
            viewport: {
                width: 500,
                height: 2400,
            },
            userAgent: '',
        });

        try {
            await page.goto(Config.API_URL);
        } catch (error) {
            console.error('Application is down and could not be started');
            skippedTest = true;
            throw new Error('Application is down and could not be started');
        }
        await page.waitForSelector('.App');
    });
    afterEach(async () => {
        await browser.close();
    });

    xit('should display the phones', async () => {
        const html = await page.$eval('.Phones', (e: any) => e.innerHTML);
        expect(html).toBe('List of phones');
    });

    xit('should display the selected phone', function () {

    });

});
