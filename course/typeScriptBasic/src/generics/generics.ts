/**
 * some time we won't know what type of will be passed to the argument
 * Polymoriphic function that do not have concrete input type and return type
 * Why do we need polymorphic function?
 */

// predicate is a function that returns either true or false

// function filter same as array filter

const filter = (array: any[], predicate: Function) => {
  let result: any[] = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

let num1 = [1, 3, 4, 5, 9, 8, 10, 12];
function predicate(item: number) {
  return item > 7;
}

console.log(filter(num1, predicate));

let strings = ["cat", "rat", "bat", "mat"];

function filterCats(item: string) {
  return item === "cat";
}

console.log(filter(strings, filterCats));

// issue in above code is function "filter" it takes any type array and a predicate function if we pass incorrect array or predicate function it stop working
// eg
function filterTest(item: string) {
  return "cat";
}
console.log(filter(strings, filterTest)); // haven't got expected result

// making above function type safe
/**
 * since filter function take different types of arry we can use function overload to parse in different types of values
 */

type Filter = {
  (array: number[], predicate: (item: number) => boolean): number[];
  (array: string[], predicate: (item: string) => boolean): string[];
  (array: object[], predicate: (item: object) => boolean): object[];
};
//if we try using above type we have lots of repetative code and implementing a funcntion with so many possible types of parameters is very difficult

/**
 * converting call signature generic
 * <T> it is a way we define generics
 * we can use more than one generic type as well
 * If multiple generic type is there then if first type is T then second will be U and third will be V and so on
 *
 *  */

type Filters = {
  <T>(array: T[], predicate: (item: T) => boolean): T[];
};

const newFilter: Filters = (array, predicate) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

function filterNumGtSeven(item: number) {
  return item > 7;
}

function filterCat(item: string) {
  return item === "cat";
}
console.log(newFilter(strings, filterCat));
console.log(newFilter(num1, filterNumGtSeven));

/**
 * different way of defining generic type
 */
// 1.
type Filter1<T> = {
  (array: T[], predicate: (item: T) => boolean): T[];
};
/**
 * Description
 *  this declaration means custom type filter always have generic type<T> and type T is used in all type signature
 * In this case when we use Filter type explicitly we have to send its type as below
 *
 *  */
const filters: Filter1<string> = (array, predicate) => {
  return [];
};

//2
type Filter2<T> = (array: T[], predicate: (item: T) => boolean) => T[];
//3
type Filter3 = <T>(array: T[], predicate: (item: T) => boolean) => T[]; // short hand syntax
