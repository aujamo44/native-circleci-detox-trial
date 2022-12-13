const { device } = require('../node_modules/detox')
const { Before, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { init, cleanup } = require('../node_modules/detox/internals')
setDefaultTimeout(240 * 1000);

BeforeAll(async () => {
  await init();
  await device.launchApp({newInstance: true});
});
Before(async () => {
  await device.reloadReactNative();
});
AfterAll(async () => {
  await cleanup();
});
