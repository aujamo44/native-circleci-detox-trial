const {device} = require('../node_modules/detox');
const {
  Before,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
  After,
} = require('@cucumber/cucumber');
const {
  init,
  cleanup,
  onTestDone,
  onTestStart,
} = require('../node_modules/detox/internals');
setDefaultTimeout(240 * 1000);

BeforeAll(async () => {
  await init();
  await device.launchApp({newInstance: true});
});
Before(async testCase => {
  await device.reloadReactNative();

  const testSummary = {
    fullName: testCase.pickle.name,
    status: 'running',
  };

  onTestStart(testSummary);
});
After(async scenario => {
  const testSummary = {
    fullName: scenario.pickle.name,
    status: scenario.result.status.toLowerCase(),
  };
  if (scenario.result.status === 'FAILED') {
    const scenarioName = scenario.pickle.name.replace(/\s+/g, '-');
    await device.takeScreenshot(`${device.getPlatform()}_${scenarioName}`);
  }

  await onTestDone(testSummary);
});
AfterAll(async () => {
  await cleanup();
});
