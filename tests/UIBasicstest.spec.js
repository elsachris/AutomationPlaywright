const{test,expect} = require('@playwright/test');


test('MyFirst playwright testcase', async ({browser,page})=>
{
  // const context = await browser.newContext();
   //const page = await context.newPage;
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
   //css
   const userName = page.locator("#username");
   const signIn = page.locator("#signInBtn");
   const cardTitle = page.locator('.card-title a');
   
   await userName.fill("rahulshetty");
   await page.locator("[type='password']").fill("learning");
   await signIn.click();
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await signIn.click();
   await expect(cardTitle.nth(0)).toContainText('iphone');
   const allTitles = await cardTitle.allTextContents();
   console.log(allTitles);




});