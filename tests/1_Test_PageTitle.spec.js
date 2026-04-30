//This spec file is to test the title name of the homepage
//30 APRIL
// 
const{test,expect} = require ('@playwright/test');

test ('Home Page', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');
    // in below line await was missing i guess thats why we were having problem 
    //in execution
    const pageTitle=await page.title();
    console.log('page title is:',pageTitle);

    await expect(page).toHaveTitle('STORE');

    //const pageURL=PageTransitionEvent.url();
    const pageURL=Page.pageURL;
    console.log('Page URL is:',pageURL);

    await expect (page).toHaveURL('https://www.demoblaze.com/');
    await page.close();
    //date:30april it is showing some kind of error 
    //tough in browser some of the result is comming -- see to it
})
