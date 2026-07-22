import {test, expect, frameLocator, Locator} from '@playwright/test'

test('keyboard',async ({page})=> {

    await page.goto('https://keycode.info');

    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png'});

    await page.keyboard.press("t");
    await page.screenshot({path:"copy.png"});

    await page.waitForTimeout(3000);

    //await page.keyboard.insertText





});

//------------ QUESTIONS---------------
// OOOOOOOO MEANS NOT ANSWERED
// YYYYYYYY MEANS ANSWERED
// how did he managed to store the screenshot in gitignore ? OOOOOOOO
// if screen shot is added then automatically it goes to headed mode, even without writhng it ? OOOOOOOOO
//