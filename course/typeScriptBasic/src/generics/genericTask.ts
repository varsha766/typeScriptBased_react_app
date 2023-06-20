// implementingg map function using tyescript

//const map=(array:any[], func:(item:any)=>any[])

const map = (array: unknown[], func: (item: unknown) => unknown[]) => {
  if (array.length === 0) {
    return array;
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  return result;
};

const arra1 = [1, 3, 4, 5, 8, 9];
//@ts-ignore
const convereted = map(arra1, (num) => num.toString());
console.log(convereted);

// making code generic

const map2 = <T>(array: T[], func: (item: T) => T[]) => {
  if (array.length === 0) {
    return array;
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  return result;
};
//@ts-ignore
const mappedData = map2(arra1, (num) => num.toString());
console.log(mappedData);

// getting error Type 'string' is not assignable to type 'number[]' with above line as we are converting each element to string and storing it back to number array
//to fix above issue we could modify  map2 as  below

const map3 = <T, U>(array: T[], func: (item: T) => U) => {
  if (array.length === 0) {
    return array;
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  return result;
};
const mappedResult = map3(arra1, (num: number) => num.toString());
console.log(mappedResult, "final result");
