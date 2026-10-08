const puppetieer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const {
    Given,
    When,
    Then,
    Before,
    After,
    setDefaultTimeout,
} = require("cucumber");

const { clickElement, getText, getElement} = require("../../lib/commands.js");

setDefaultTimeout(70000);

Before(async function () {
    const browser = await puppetieer.launch({headless: false, slowMo: 200});
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

Given("user is on {string} page", async function (string) {
    return await this.page.goto(`https://qamid.tmweb.ru/client${string}`);
});

When("user chose date", async function () {
    return await clickElement(this.page,
        "a:nth-child(7)"
    );
});

When("user chose seanse", async function () {
    await this.page.waitForSelector('.movie-seances__time[data-seance-id="239"]');
    return await clickElement(this.page,
        ".movie-seances__time[data-seance-id='239']"
    );
});

When("user chose hall", async function () {
     return actual = await getText(this.page,
        ".buying__info-hall"
    );
});

Then("user sees hall {string}", async function (string) {
    const expected = await string;
    expect(actual).contains(expected);
});

When('user click by place1', async function () {
    return await clickElement(this.page, "div:nth-child(7) span:nth-child(6)");
});

When('user click by place2', async function () {           
    return await clickElement(this.page, "div:nth-child(7) span:nth-child(7)");
});
         
When('user click by place3', async function () {
    return await clickElement(this.page, "div:nth-child(7) span:nth-child(8)");
});         

When('user click by acception', async function () {
    return await clickElement(this.page, ".acceptin-button");      
         });
         
Then('user sees places {string}', async function (string) {
    const actualPlace = await getText(this.page, ".ticket__details.ticket__chairs");
    const expectPlace = await string;
    expect(actualPlace).contains(expectPlace);
});  
         
        
Then('user sees date {string}', async function (string) {
    const actualDate = await getText(this.page, "p:nth-child(4) span:nth-child(1)");
    const expectDate = await string;
    expect(actualDate).contains(expectDate);
});    
         
Then('user sees seccion {string}', async function (string) {
    const actualSession = await getText(this.page, ".ticket__details.ticket__start");
    const expectSession = await string;
    expect(actualSession).contains(expectSession);
});     
         
Then('user sees cost {string}', async function (string) {
    const actualCost = await getText(this.page, ".ticket__details.ticket__cost");
    const expectCost = await string;
    expect(actualCost).contains(expectCost);
});
         
When('user click by place', async function () {
    return await clickElement(this.page, "div:nth-child(11) span:nth-child(1)");
}); 
         
When('user returns', function () {
    return this.page.goBack();
});

Then('link is not clicable', function () {
    return clickElement(this.page, "div:nth-child(11) span:nth-child(1)");
});         