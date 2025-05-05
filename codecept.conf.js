'use strict';
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const isMobile = process.env.TEST_MODE === 'mobile';
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.aljazeera.com',
      browser: process.env.BROWSER || 'chrome',
      desiredCapabilities: {
        chromeOptions: isMobile
            ? {
              mobileEmulation: { deviceName: 'iPhone X' },
              args: ['--window-size=375,812']
            }
            : {
              args: ['--window-size=1366,768']
            }
      }
    }
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      output: './output/allure-results',
    },
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/homePage.js',
    livePage: './pages/livePage.js'
  },
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/steps.js'
  },
  name: 'aljazeera-tests'
}