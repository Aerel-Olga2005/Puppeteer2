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
    await page.waitForSelector('.movie-seances__time[data-seance-id="217"]');
    await clickElement(page, '.movie-seances__time[data-seance-id="217"]');
    
});

   
    test("Goto hall", async () => {
        const expected = "ЗалЗал90";
        //await clickElement(page, 'a:nth-child(7)');
        //await clickElement(page, '.movie-seances__time[data-seance-id="217"]');
        //await clickElement(page, '.acceptin-button');
        const actual = await page.$eval(
            ".buying__info-hall",
            link => link.textContent,

        );
        expect(actual).toContain(expected);
    });

    test("Booking", async () => {
        //const expectFilm = ""Сталкер(1979)"";
        const expectPlace = "7/6, 7/7, 7/8";
        const expectHall = "ЗалЗал90";
        const expectDate = "05-10-2026";
        const expectSession = "13:00";
        const expectCost = "300";
        //await clickElement(page, 'a:nth-child(7)');
        //await clickElement(page, '.movie-seances__time[data-seance-id="217"]');
        //await page.waitForSelector('.movie-seances__time[data-seance-id="217"]');
        await clickElement(page, 'div:nth-child(7) span:nth-child(6)');
        await clickElement(page, 'div:nth-child(7) span:nth-child(7)');
        await clickElement(page, 'div:nth-child(7) span:nth-child(8)');
        await clickElement(page, '.acceptin-button');
        //const actualFilm = await page.$eval(
        //    ".ticket__details.ticket__title",
        //    link => link.textContent,

        //);
        const actualPlace = getText(page, '.ticket__details.ticket__chairs');
        const actualHall = getText(page, 'p:nth-child(3) span:nth-child(1)');
        const actualDate = getText(page, 'p:nth-child(4) span:nth-child(1)');
        const actualSession = getText(page, '.ticket__details.ticket__start')
        const actualCost = getText(page, '.ticket__details.ticket__cost');
        //expect(actualFilm).toContain(expectFilm);
        expect(actualPlace).toContain(expectPlace);
        expect(actualHall).toContain(expectHall);
        expect(actualDate).toContain(expectDate);
        expect(actualSession).toContain(expectSession);
        expect(actualCost).toContain(expectCost);
    });

   //test("Reserved plases", async () => {
    //    const expected = "Selector is not clicable: Занято";
        //await clickElement(page, 'body nav.page-nav a:nth-child(7)');
        //await clickElement(page, '.movie-seances__time[data-seance-id="217"]');
    //    await clickElement(page, 'div:nth-child(7) span:nth-child(8)');
    //    await expect(page.click('.buying-scheme__chair.buying-scheme__chair_taken')).toThrow(expected);
    //});
});

