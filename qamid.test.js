//const { expect } = require("chai");
const { clickElement, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
    page = await browser.newPage();
    await page.setDefaultNavigationTimeout(50000);
    await page.setDefaultTimeout(40000);
});

//afterEach(() => {
//page.close();
//})

describe("Go to the cinema tests", () => {
    beforeEach(async () => {
    await page.goto("https://qamid.tmweb.ru/client/index.php");
    await clickElement(page, 'a:nth-child(7)');
    await page.waitForSelector('.movie-seances__time[data-seance-id="239"]');
    await clickElement(page, '.movie-seances__time[data-seance-id="239"]');
    
});

   
    test("Goto hall", async () => {
        const expected = "зал 5";
        const actual = await getText(page, '.buying__info-hall');
        
        expect(actual).toContain(expected);
    });

    test( "Booking", async () => {
        
        const expectPlace = "7/6, 7/7, 7/8";
        const expectHall = "зал 5";
        const expectDate = "14-10-2026";
        const expectSession = "20:00";
        const expectCost = "750";
        
        await clickElement(page, 'div:nth-child(7) span:nth-child(6)');
        await clickElement(page, 'div:nth-child(7) span:nth-child(7)');
        await clickElement(page, 'div:nth-child(7) span:nth-child(8)');
        await clickElement(page, '.acceptin-button');
        
        const actualPlace = await getText(page, '.ticket__details.ticket__chairs');
        const actualHall = await getText(page, 'p:nth-child(3) span:nth-child(1)');
        const actualDate = await getText(page, 'p:nth-child(4) span:nth-child(1)');
        const actualSession = await getText(page, '.ticket__details.ticket__start');
        const actualCost = await getText(page, '.ticket__details.ticket__cost');
        
        expect(actualPlace).toContain(expectPlace);
        expect(actualHall).toContain(expectHall);
        expect(actualDate).toContain(expectDate);
        expect(actualSession).toContain(expectSession);
        expect(actualCost).toContain(expectCost);
    });

   
   test("Reserved plases", async () => {
    await clickElement(page, 'div:nth-child(11) span:nth-child(1)');
    await clickElement(page, '.acceptin-button');
    await clickElement(page, '.acceptin-button');

    try {
        await page.goBack();
        await clickElement(page, 'a:nth-child(7)');
        await page.waitForSelector('.movie-seances__time[data-seance-id="239"]');
        await clickElement(page, '.movie-seances__time[data-seance-id="239"]');
        await clickElement(page, 'div:nth-child(11) span:nth-child(1)');
    } catch (error) {
        throw new Error(`Selector is not clickable: ${selector}`);
    }

              
    }, 60000);
});
