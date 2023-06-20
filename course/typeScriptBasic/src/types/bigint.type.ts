// type bigInt
// There are two methods to create bigInt in javascript
//- using constructor BigInt() method
// - using literal syntax by passing an integere follow by suffix n

let bigInt1 = BigInt(345668);

let bigInt2 = 12345667n;
console.log(bigInt1, bigInt2);

const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne, safeIntPlusTwo);
console.log(safeIntPlusOne === safeIntPlusTwo);

let a: bigint = BigInt(1234567);

let b: bigint = 23456712n;

let c: bigint = a - b;
console.log(c);

// Note:- bigint can not be decimal value

// c = 123456789.1n; // getting error type number cannot be assignable to type bigint

// // bigint won't work with math object
// let f:bigint= Math.log(a) // argument of type 'bigint' is not assignable to parameter of type number
