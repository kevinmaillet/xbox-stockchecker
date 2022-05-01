const gamestop = async (driver, By, Key, until) => {
  try {
    await driver.get(
      `https://www.gamestop.com/consoles-hardware/xbox-series-x%7Cs/consoles/products/xbox-series-x/B224744V.html`
    );

    await driver.wait(
      until.elementLocated(By.xpath(`//*[contains(text(),'Add to Cart')]`)),
      1 * 5000
    );

    console.log('IN STOCK!!!');
    console.log(
      'https://www.gamestop.com/consoles-hardware/xbox-series-x%7Cs/consoles/products/xbox-series-x/B224744V.html'
    );
  } catch (e) {
    console.log('not in stock gamestop');

    return false;
  }

  return true;
};

exports.gamestop = gamestop;
