// !(function(e){

//   const cardNumber = document.getElementById("cardnumber");

//   cardNumber.addEventListener("change", (input) => {
//     console.log(input.target.value);
//   }));
// };

!function () {
  const cardNumber = document.getElementById("cardnumber");
  cardNumber.onchange = handleChange;

  function handleChange(e) {
    console.log(e.target.value);
  }
};
