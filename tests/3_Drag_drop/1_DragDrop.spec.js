import { test, expect,FrameLocator } from '@playwright/test';

test('keyboard', async ({page})=> {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const colA = page.locator('#column-a');
    const colB = page.locator('#column-b');

    await expect(colA).toHaveText('A');
    await expect(colB).toHaveText('B');

    await colA.dragTo(colB);
    
    await expect(colA).toHaveText('B');
    await expect(colB).toHaveText('A');
    
    await page.waitForTimeout(50000);

});