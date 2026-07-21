import {test, expect} from '@playwright/test';

test('ping',async ({request})=>{
   const responseData = await request.get('https://restful-booker.herokuapp.com/ping');
   expect(responseData.status()).toBe(201);
})