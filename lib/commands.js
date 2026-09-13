module.exports {
    clickElement: async function (page, selector) {
        try {
            page await.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error("Selector is not clicable: $(selector)");
        }
        
    },

    getText: async function (page, selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (link) => link.textContent);
        }
        catch (error) {
            throw new Error("Text is not available for srlector: $(selector)");
        }
        
    },
};