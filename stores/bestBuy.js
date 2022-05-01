const bestBuy = async (driver, By, Key, until) => {
  try {
    await driver.get(
      `https://www.bestbuy.com/site/microsoft-xbox-series-x-1tb-console-black/6428324.p?skuId=6428324`
    );

    await driver.wait(
      until.elementLocated(By.xpath(`//*[contains(text(),'Add to Cart')]`)),
      1 * 5000
    );

    console.log('IN STOCK!!!');
    console.log(
      'https://www.bestbuy.com/site/microsoft-xbox-series-x-1tb-console-black/6428324.p?skuId=6428324'
    );
  } catch (e) {
    console.log('not in stock best buy');

    return false;
  }

  return true;
};

exports.bestBuy = bestBuy;
