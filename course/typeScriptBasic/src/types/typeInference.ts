// type inference

let firstname = "john";
// this is same as firstname:string="john" now we can not store number in fullname field
//firstname = 123;

const number1 = 85;

let num = 23;

let finalResult: number;

function addNumber(a: number, b: number) {
  return a + b;
}
finalResult = addNumber(10, 14);
