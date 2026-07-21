import {test, expect} from '@playwright/test';

test('ping',async ({request})=>{
   const responseData = await request.get('https://restful-booker.herokuapp.com/ping');
   expect(responseData.status()).toBe(201);
})

test('get all bookings',async ({request})=>{
   const response = await request.get('https://restful-booker.herokuapp.com/booking');
   expect(response.status()).toBe(200);
   const body = await response.json();
   console.log(body);
})