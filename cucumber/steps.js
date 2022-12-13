const {Then, When, Given} = require('@cucumber/cucumber');

Given('user sees the homescreen', async () => {
  await device.reloadReactNative();
});
When('user clicks the hello button', async () => {
  await expect(element(by.id('hello_button'))).toBeVisible();
});
Then('user should see the hello text', async () => {
  await element(by.id('hello_button')).tap();
  await expect(element(by.id('printed-message'))).toBeVisible();
});
