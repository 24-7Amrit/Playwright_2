import{ test, expect } from "@playwright/test";
// double quote above

test.describe('javascript alert',()=>{
    // group test cases together
    //--------question--------
    // what is the use of grouping test cases together, what is the advantage

    test.beforeEach(async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    });

    test('JS alert 1',async ({page})=>{
        page.once('dialog',async dialog =>{
            console.log('alert type:',dialog.type());
            console.log('alert meaasge:',dialog.message());
            expect(dialog.message()).toBe('I am JS alert');
            await dialog.accept();


        });

    });
});