/**
 * optional and default parameter of function
 *to make a parameter option just add ? afterm the name of the parameter
 *
 * */

//named function declaration
function introduction(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and age is ${age}.I live in ${country}`;
  }
  return `My name is ${name} and age is ${age}`;
}

console.log(introduction("John", 32));
console.log(introduction("John", 32, "India"));
