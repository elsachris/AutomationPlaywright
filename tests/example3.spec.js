const{test,expect} = require('@playwright/test');
test.only('UI Controls',async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userEmail = await page.locator('#userEmail');
    const userPassword = await page.locator('#userPassword');
    const dropdown = await page.locator('select.form-control');
    await dropdown.selectOption("consult");
    
    await page.locator('.checkmark').last().click();
    await expect(page.locator('.checkmark').last()).toBeChecked();
    await page.locator('#okayBtn').click();
    //await page.pause();
    expect( await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class","blinkingText");
    const documentLink= await page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all(
        [
    context.waitForEvent('page'),
    documentLink.click(),
]
)
    //await text= newPage.locator(".red").textContent();
     //text = ;
    console.log(await newPage.locator(".red").textContent());
    
    
});