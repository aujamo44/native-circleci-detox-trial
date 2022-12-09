import {
  Before,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} from '@cucumber/cucumber';
setDefaultTimeout(240 * 1000);

const init = require('../node_modules/detox/internals').init({workerId: null});
const cleanup = require('../node_modules/detox/internals').cleanup();

BeforeAll(async () => {
  await init;
  await device.launchApp({newInstance: true});
});
Before(async () => {
  await device.reloadReactNative();
});
AfterAll(async () => {
  await cleanup;
});
