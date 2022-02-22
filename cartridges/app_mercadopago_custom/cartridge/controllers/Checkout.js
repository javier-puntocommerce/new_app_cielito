"use strict";

const server = require("server");
const page = module.superModule;

server.extend(page);

const mpPaymentForm = server.forms.getForm("mpPayment");

server.append("Begin", (_, res, next) => {
  res.setViewData({
    mercadopago: {
      mpPaymentForm: mpPaymentForm,
    },
  });
  next();
});

module.exports = server.exports();
