/**
 * functions in typescript
 * function declaration in ts is same as js only difference is
 *  in ts we define type of each parameter as well function return type
 * */

//named function declaration
function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
}

//declaring function as expression

const intro2 = function intro(name: string, age: number): string {
  return `My name is ${name} and age is ${age}`;
};

// using arraow function

const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and age is ${age}`;
};
