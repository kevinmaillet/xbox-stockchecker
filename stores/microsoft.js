const microsoft = async (driver, By, Key, until) => {
  try {
    await driver.get(
      `https://www.xbox.com/en-us/configure/8WJ714N3RBTL?ranMID=24542&ranEAID=alVlsby6UJ8&ranSiteID=alVlsby6UJ8-qdWl2zid8zPrYMOlCUGrKg&epi=alVlsby6UJ8-qdWl2zid8zPrYMOlCUGrKg&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=%28ir__rzxrnhczm0kf6l6aan3ggvxane2xrjsahh2q0bcu00%29%287593%29%281243925%29%28alVlsby6UJ8-qdWl2zid8zPrYMOlCUGrKg%29%28%29&irclickid=_rzxrnhczm0kf6l6aan3ggvxane2xrjsahh2q0bcu00`
    );

    await driver.wait(
      until.elementLocated(By.xpath(`//button[contains(text(),'Checkout')]`)),
      1 * 5000
    );

    console.log('IN STOCK!!!');
    console.log(
      'https://www.xbox.com/en-us/configure/8WJ714N3RBTL?ranMID=24542&ranEAID=alVlsby6UJ8&ranSiteID=alVlsby6UJ8-qdWl2zid8zPrYMOlCUGrKg&epi=alVlsby6UJ8-qdWl2zid8zPrYMOlCUGrKg&irgwc=1&OCID=AID2200057_aff_7593_1243925&tduid=%28ir__rzxrnhczm0kf6l6aan3ggvxane2xrjsahh2q0bcu00%29%287593%29%281243925%29%28alVlsby6UJ8-qdWl2zid8zPrYMOlCUGrKg%29%28%29&irclickid=_rzxrnhczm0kf6l6aan3ggvxane2xrjsahh2q0bcu00'
    );

    return true;
  } catch (e) {
    console.log('not in stock microsoft');
    return false;
  }
};

exports.microsoft = microsoft;
