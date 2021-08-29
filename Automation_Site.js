let puppeteer = require("puppeteer");
// let browserStartPromises = puppeteer.launch({headless: false});
// console.log("browser opended");
let browserStartPromises = puppeteer.launch({
    headless : false,
    slowMo : 100,
    defaultViewport : null,
    args : ["--start-maximized","--disable-notification"]
});

// browserStartPromises.then(function(browserObj)
// {
//      let browserTabOpenPromises = browserObj.newPage();
//      browserTabOpenPromises.then(function(page)
//      {
//           console.log("new tab opened");
//         //   let gpageOpenPromise = page.goto("https://google.com");
//         //   gpageOpenPromise.then(function()
//         //   {
//         //          console.log("opened");
//         //   });
//      });
// });

let page;
let browser;
let rTab;
browserStartPromises
.then(function(browserObj)
{
     browser = browserObj;
     let browserTabOpenPromises = browserObj.newPage();
     console.log("new tab opened");
     return browserTabOpenPromises;
}).then(function(newTab)
{
    page = newTab;
     let gpageOpenPromise = newTab.goto("https://google.com");
     console.log("google page opened");
     return gpageOpenPromise;
}).then(function()
{
     let waitForTypingPepPromise = page.type("input[title='Search']", "pepcoding");
     console.log("typed pepcoding");
     return waitForTypingPepPromise;
}).then(function()
{
     let enterWillBeDonePromise = page.keyboard.press("Enter",{delay:100});
     console.log("click entered");
     return enterWillBeDonePromise;
}).then(function()
{
     let waitForElementLoadPromise = 
     page.waitForSelector(".LC20lb.DKV0Md", {visible : true});
     console.log("waiting for selector");
     return waitForElementLoadPromise;
}).then(function()
{
      let elementClickPromise = page.click(".LC20lb.DKV0Md");
      return elementClickPromise;
}).then(function()
{
     let waitForCloseElementPromise = page.waitForSelector('#lp_modal_close', {visible : true});
     console.log("waiting for close element");
     return waitForCloseElementPromise;
}).then(function()
{
    let closeElementClickPromise = page.click("#lp_modal_close",{delay:100});
    return closeElementClickPromise;
}).then(function()
{
    let allElementLIPromise = page.$$(".site-nav-li");
    console.log("extracting all list");
    return allElementLIPromise;        
}).then(function(allElement)
{
    let allElementWillBeClicked = allElement[6].click({delay:100});
    console.log("resources tab");
    return allElementWillBeClicked;
}).then(function()
{   
     //  let future2secondAfter = Date.now() + 2000;
     //    while (Date.now() < future2secondAfter) {
     //    }
     let waitTime = page.waitFor(2000);
     console.log("static wait");
     return waitTime;
     
}).then(function()
{
     let listOfOpenedTabsPromise = browser.pages();
     console.log("new tab opened");
     return listOfOpenedTabsPromise;
}).then(function(array)
{
      rTab = array[array.length  - 1];
     let waitForLev1Promise = rTab.waitForSelector('h2[ title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',
     { visible: true });
     return waitForLev1Promise;
}).then(function()
{
    let lv1ClickedPromise = rTab.click('h2[ title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
    return lv1ClickedPromise;
}).then(function()
{
     console.log("executed successfully");
})