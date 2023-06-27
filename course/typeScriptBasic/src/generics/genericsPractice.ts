// Take array of string or array of number and return reversed array

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

const reversedValue1 = reverse([23, 34, 54, 1, 7, 89]);
console.log(reversedValue1);

const reversedValue2 = reverse(["a", "b", "c", "t", "v"]);
console.log(reversedValue2);

const reversedValue3 = reverse([
  { name: "varsha" },
  { name: "nandani" },
  { name: "nandu" },
]);

console.log(reversedValue3);

// implementation of stack using generic

/**
 * class Stack is of generic Type <T>.It has private property stack which is of type array and store element of stack
 *  push method accept an item of Type T and add it to stack.
 * pop method remove and return top element from the stack which is of type T or undefiend in case of empty stack
 */

class Stack<T> {
  private stack: T[] = [];
  push(item: T): void {
    this.stack.push(item);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }
}

type Employee = {
  name: string;
  age: number;
};
const employee = <Employee>{};
