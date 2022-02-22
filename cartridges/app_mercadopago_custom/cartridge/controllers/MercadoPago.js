"use strict";

/**
 * @namespace MercadoPago
 */

const server = require("server");
const mpPaymentForm = server.forms.getForm("mpPayment");
const {
  getToken,
  getPaymentMethods,
  getCardToken,
  createPayment,
} = require("*/cartridge/scripts/mercadopago/helpers/mercadoPagoApi");
var csrfProtection = require("*/cartridge/scripts/middleware/csrf");

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

server.post("SubmitCard", (req, res, next) => {
  const cardholdername = mpPaymentForm.cardholdername.value;
  const cardnumber = mpPaymentForm.cardnumber.value;
  const cardExpirationDate = mpPaymentForm.cardExpirationDate.value;
  // const issuer = mpPaymentForm.issuer.value;
  const securityCode = mpPaymentForm.securityCode.value;
  // const installments = mpPaymentForm.installments.value;

  const token = getToken();
  const paymentMethods = getPaymentMethods(cardnumber);

  const viewData = res.getViewData();

  viewData.paymentMethod = paymentMethods;

  res.setViewData(viewData);
  next();
});

server.post("SavePayment", server.middleware.https, (req, res, next) => {
  const cardholdername = mpPaymentForm.cardholdername.value;
  const cardnumber = mpPaymentForm.cardnumber.value;
  const cardExpirationDate = mpPaymentForm.cardExpirationDate.value;
  // const issuer = mpPaymentForm.issuer.value;
  const securityCode = mpPaymentForm.securityCode.value;
  // const installments = mpPaymentForm.installments.value;
  const token = getToken();
  const paymentMethods = getPaymentMethods(cardnumber);
  const issuer_id = paymentMethods.results[0].issuer.id;
  const cartToken = getCardToken(
    cardholdername,
    cardnumber,
    cardExpirationDate.split("/")[0],
    cardExpirationDate.split("/")[1],
    securityCode
  );

  const tokenId = cartToken.id;

  this.on("route:BeforeComplete", function (req, res) {
    res.json({
      cardholdername: cardholdername,
      cardnumber: cardnumber,
      cardExpirationDate: cardExpirationDate,
      securityCode: securityCode,
      token: token,
      paymentMethods: paymentMethods,
      cartToken: cartToken,
      payment: payment,
    });
  });

  return next();
});

// server.post("Payment", (req, res, next) => {
//   res.render("/MercadoPago/Payment", {});

//   next();
// });

module.exports = server.exports();
