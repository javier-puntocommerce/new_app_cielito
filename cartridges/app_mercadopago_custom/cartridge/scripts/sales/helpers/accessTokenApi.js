const service = require("*/cartridge/scripts/sales/service/accessTokenRest");

const getAccessToken = () => {
  const token = service.call({
    dummy: "dummy",
  });
  return token;
};

module.exports = {
  getAccessToken: getAccessToken,
};
