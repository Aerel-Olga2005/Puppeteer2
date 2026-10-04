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

const { getText, getElement} = require("../../lib/commands.js");

setDefaultTimeout(70000);

Before(async function () {
    const browser = await puppetieer.launch({headless: false, slowMo: 200});
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

Given("user is on {string} page", async function (string) {
    return await this.page.goto('https://qamid.tmweb.ru/${string}');
});

When("user chose hall", async function (string) {
    return await getText(this.page,
        ".buying__info-hall",
        string
    );
});

Then("user opened {string}", async function (string) {
    const actual = await getText (this.page, ".buying__info-hall");
    const expected = await string;
    expect(actual).contains(expected);
});

When('user click by place1', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           return await clickElement(this.page, "div:nth-child(7) span:nth-child(6)");
          });

When('user click by place2', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           return await clickElement(this.page, "div:nth-child(7) span:nth-child(7)");
          });
         
When('user click by place3', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           return await clickElement(this.page, "div:nth-child(7) span:nth-child(8)");
         });         

When('user click by acception', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           return await clickElement(this.page, ".acceptin-button");
         });
         
Then('user sees places {string}', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           const actualPlace = await getText(this.page, ".ticket__details.ticket__chairs");
           const expectPlace = await string;
           expect(actualPlace).contains(expectPlace);
         });  
         
Then('user sees hall {string}', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           const actualHall = await getText(this.page, "p:nth-child(3) span:nth-child(1)");
           const expectHall = await string;
           expect(actualHall).contains(expectHall);
         });  
         
Then('user sees date {string}', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           const actualDate = await getText(this.page, "p:nth-child(4) span:nth-child(1)");
           const expectDate = await string;
           expect(actualDate).contains(expectDate);
         });    
         
Then('user sees seccion {string}', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           const actualSession = await getText(this.page, ".ticket__details.ticket__start");
           const expectSession = await string;
           expect(actualSession).contains(expectSession);
         });     
         
Then('user sees cost {string}', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           const actualCost = await getText(this.page, ".ticket__details.ticket__cost");
           const expectCost = await string;
           expect(actualCost).contains(expectCost);
         });         