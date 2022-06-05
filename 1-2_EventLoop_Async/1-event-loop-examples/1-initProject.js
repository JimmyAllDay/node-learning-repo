console.log("Hello world");

const amount1 = 9;
const amount2 = 10;

function logAmount(amount) {
  if (amount < 10) {
    console.log("small number");
    return "small number";
  } else {
    console.log("large number");
    return "large number";
  }
}

logAmount(amount1);
logAmount(amount2);

module.exports = logAmount;
