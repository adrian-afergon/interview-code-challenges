import puppeteer from 'puppeteer';

describe('Application', () => {

    let browser: puppeteer.Browser;
    let page: puppeteer.Page;
    let skippedTest = false;

    const e2eTest = (fn: any) => {
        return skippedTest ? () => { console.log('Error'); } : fn();
    };

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
            await page.goto('http://localhost:3000/');
        } catch (error) {
            console.error('Application is down and could not be started');
            skippedTest = true;
            throw new Error('Application is down and could not be started');
        }
    });
    afterEach(async () => {
        await browser.close();
    });

    it('should have a browser opened', e2eTest(() => {
       expect(skippedTest).toBe(false);
    }));

    it('should open the application', e2eTest(async () => {
        await page.waitForSelector('.App');

        const html = await page.$eval('.App-link', (e: any) => e.innerHTML);
        expect(html).toBe('Learn React');
    }));

    it('should open the application 2', e2eTest(async () => {
        await page.waitForSelector('.App');

        const html = await page.$eval('.App-link', (e: any) => e.innerHTML);
        expect(html).toBe('Learn React');
    }));
});
