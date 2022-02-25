"use strict";

const server = require("server");
const {
  getAccessToken,
} = require("*/cartridge/scripts/sales/helpers/accessTokenApi");

server.get("AccessToken", (req, res, next) => {
  const token = getAccessToken();

  res.json({
    hola_mundo: "hola mundo",
    token: token,
  });
  next();
});

module.exports = server.exports();
