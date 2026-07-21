import { test, expect, Locator} from '@playwright/test';

const URL = 'https://flipkart.com/search';

test.describe('svg',()=> {

    test.beforeEach(async({page})=>{
        await page.goto(URL);
    });

    test('locate svg',async({page})=>{
        // const svg:Locator = page.locator('svg').first();
        // await expect(svg).toBeVisible();
        await page.locator('input[name="q"]').fill("macmini");
        //await page.locator('input[class="nw1UBF v1zwn25"]').fill("macmini");
        //await page.getByTitle('Search for Products, Brands and More').fill("macmini");
        const svg_element:Locator = page.locator('svg');
        await svg_element.first().click();
        //await svgElements.nth(2).click();

        await page.waitForTimeout(5000);
    });

});