const runScrape = async () => {
  const chrome = require('selenium-webdriver/chrome');
  const { Builder, By, Key, until } = require('selenium-webdriver');
  const fakeUa = require('fake-useragent');
  const opts = new chrome.Options();
  const { microsoft } = require('./stores/microsoft');
  const { gamestop } = require('./stores/gamestop');
  const { target } = require('./stores/target');
  const { sendMessage } = require('./twilio');

  opts.addArguments([
    `user-agent="${fakeUa()}"`,
    'disable-infobars',
    '--disable-extensions',
    'start-maximized',
    '--headless',
    '--disable-blink-features=AutomationControlled',
  ]);

  let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(opts)
    .usingServer('http://localhost:4444/wd/hub')
    .build();

  driver.executeScript(
    "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"
  );

  try {
    const isAvailMicrosoft = await microsoft(driver, By, Key, until);

    if (isAvailMicrosoft) {
      sendMessage(
        'Microsoft',
        'https://www.xbox.com/en-us/configure/8WJ714N3RBTL?ranMID=24542&ranEAID=alVlsby6UJ8&ranSiteID=alVlsby6UJ8-qdWl2zid8zPrYMOlCUGrKg&epi=alVlsby6UJ8-qdWl2zid8zPrYMOlCUGrKg&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=%28ir__rzxrnhczm0kf6l6aan3ggvxane2xrjsahh2q0bcu00%29%287593%29%281243925%29%28alVlsby6UJ8-qdWl2zid8zPrYMOlCUGrKg%29%28%29&irclickid=_rzxrnhczm0kf6l6aan3ggvxane2xrjsahh2q0bcu00'
      );
    }

    const isAvailGamestop = await gamestop(driver, By, Key, until);

    if (isAvailGamestop) {
      sendMessage(
        'Gamestop',
        'https://www.gamestop.com/consoles-hardware/xbox-series-x%7Cs/consoles/products/xbox-series-x/B224744V.html'
      );
    }

    const isAvailTarget = await target(driver, By, Key, until);

    if (isAvailTarget.pickUp) {
      sendMessage(
        'Target Pick Up',
        'https://www.target.com/p/xbox-series-x-console/-/A-80790841?clkid=adfc6934N035011ec8d20f53c1d7ca8dd&lnm=81938&afid=HotStock&ref=tgt_adv_xasd0002'
      );
    }

    if (isAvailTarget.shipIt) {
      sendMessage(
        'Target',
        'https://www.target.com/p/xbox-series-x-console/-/A-80790841?clkid=adfc6934N035011ec8d20f53c1d7ca8dd&lnm=81938&afid=HotStock&ref=tgt_adv_xasd0002'
      );
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
};

runScrape();
