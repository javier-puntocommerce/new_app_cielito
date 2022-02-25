"use strict";

const page = module.superModule;
const server = require("server");

server.extend(page);

// server.append("SubmitPayment", (req, res, next) => {
//   const cardholdername = mpPaymentForm.cardholdername.value;
//   const cardnumber = mpPaymentForm.cardnumber.value;
//   const cardExpirationDate = mpPaymentForm.cardExpirationDate.value;
//   // const issuer = mpPaymentForm.issuer.value;
//   const securityCode = mpPaymentForm.securityCode.value;
//   // const installments = mpPaymentForm.installments.value;
//   const token = getToken();
//   const paymentMethods = getPaymentMethods(cardnumber);
//   const issuer_id = paymentMethods.results[0].issuer.id;
//   const cartToken = getCardToken(
//     cardholdername,
//     cardnumber,
//     cardExpirationDate.split("/")[0],
//     cardExpirationDate.split("/")[1],
//     securityCode
//   );

//   const tokenId = cartToken.id;

//   this.on("route:BeforeComplete", function (req, res) {
//     res.json({
//       cardholdername: cardholdername,
//       cardnumber: cardnumber,
//       cardExpirationDate: cardExpirationDate,
//       securityCode: securityCode,
//       token: token,
//       paymentMethods: paymentMethods,
//       cartToken: cartToken,
//       payment: payment,
//     });
//   });

//   return next();
// });

module.exports = server.exports();
