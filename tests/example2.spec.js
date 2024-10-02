const{test,expect} = require('@playwright/test');
test.only('Retreive the first product title',async({browser,page})=>
{
    const productName="ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client/");
    const userEmail = await page.locator('#userEmail');
    const userPassword = await page.locator('#userPassword');
    const login = await page.locator('#login');
    
    await userEmail.fill("chrisginilopez@gmail.com");
    await userPassword.fill("Elsa@123");
    await login.click();
    await page.waitForLoadState('networkidle');
    const products = page.locator('.card-body');
    const card1Title = await page.locator(".card-body b").allTextContents();
    console.log(card1Title);
    const count = products.count();
    for(let i=0;i<count;++i){
      if(await products.nth(i).locator("b").textContent())=== productName){
        
      }
    }

});