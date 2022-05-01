const target = async (driver, By, Key, until) => {
  let pickUp = false;
  let shipIt = false;

  try {
    await driver.get(
      `https://www.target.com/p/xbox-series-x-console/-/A-80790841?clkid=adfc6934N035011ec8d20f53c1d7ca8dd&lnm=81938&afid=HotStock&ref=tgt_adv_xasd0002`
    );

    await driver.wait(
      until.elementLocated(By.xpath(`//button[contains(text(),'Ship it')]`)),
      1 * 10000
    );

    await driver
      .findElements(By.xpath(`//button[contains(text(),'Ship it')]`))
      .then((elements) => {
        if (elements.length >= 1) {
          console.log('available for pick up target');
          pickUp = true;
        }
      });

    shipIt = true;
    console.log('IN STOCK!!!');
    console.log(
      'https://www.target.com/p/xbox-series-x-console/-/A-80790841?clkid=adfc6934N035011ec8d20f53c1d7ca8dd&lnm=81938&afid=HotStock&ref=tgt_adv_xasd0002'
    );
  } catch (e) {
    console.log('not in stock target');

    return {
      pickUp,
      shipIt,
    };
  }

  return {
    pickUp,
    shipIt,
  };
};

exports.target = target;
