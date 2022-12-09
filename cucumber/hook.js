import {
  Before,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import {init, cleanup} from 'detox';
import {detox as config} from 'detox';
setDefaultTimeout(240 * 1000);
BeforeAll(async () => {
  await init(config);
  await device.launchApp({newInstance: true});
});
Before(async () => {
  await device.reloadReactNative();
});
AfterAll(async () => {
  await cleanup();
});
