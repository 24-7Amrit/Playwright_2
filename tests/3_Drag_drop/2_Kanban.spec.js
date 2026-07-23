import { test,expect,FrameLocator,locator} from '@playwright/test';

test ('Drag Drop', async ({page})=> {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

    await page.getByTestId('card-write-spec').dragTo(page.getByTestId('col-in-progress'));

});