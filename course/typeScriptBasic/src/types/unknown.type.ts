// type unknown
function multiplyTwoNumber(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
  return "Please provide a valid number";
}

console.log(multiplyTwoNumber(4));
console.log(multiplyTwoNumber("john"));
