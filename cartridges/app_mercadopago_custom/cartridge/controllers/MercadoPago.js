"use strict";

const server = require("server");
const mpPaymentForm = server.forms.getForm("mpPayment");

/**
 * Creates a list of expiration years from the current year
 * @returns {List} a plain list of expiration years from current year
 */
function getExpirationYears() {
  var currentYear = new Date().getFullYear();
  var creditCardExpirationYears = [];

  for (var i = 0; i < 10; i++) {
    creditCardExpirationYears.push((currentYear + i).toString());
  }

  return creditCardExpirationYears;
}

server.get("Start", (req, res, next) => {
  const creditCardExpirationYears = getExpirationYears();
  res.render("/MercadoPago/PaymentForm", {
    mpPaymentForm: mpPaymentForm,
    expirationYears: creditCardExpirationYears,
  });
  next();
});

server.post("SavePayment", (req, res, next) => {
  const cardholdername = mpPaymentForm.cardholdername.value;
  const cardnumber = mpPaymentForm.cardnumber.value;
  const cardExpirationDate = mpPaymentForm.cardExpirationDate.value;
  const issuer = mpPaymentForm.issuer.value;
  const securityCode = mpPaymentForm.securityCode.value;
  const installments = mpPaymentForm.installments.value;
  res.json({});
});

// server.post("Payment", (req, res, next) => {
//   res.render("/MercadoPago/Payment", {});

//   next();
// });

module.exports = server.exports();
