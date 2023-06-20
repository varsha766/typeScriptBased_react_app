function convertNumberToString(number: any) {
  if (typeof number !== "number") {
    console.log("Input a valid number");
  }
  return number.toString();
}

function printStrings(str: string | string[] | null) {
  if (str && typeof str === "object") {
    // checking if str is array of string
    for (const s of str) {
      console.log(s);
    }
  } else if (str == "string") {
    console.log(str);
  } else {
    console.log("Pass an arrary of string or a string array");
  }
}

// truthiness narrowing  in typescript
/**
 * truthiness narrowing is the process of refining a type from variable based on a condition that checks if it's true or false
 * example of falsy value:- null, undefined, false, 0, NaN, ''
 */

type Persons1 = {
  name: String;
  age?: number;
};

function printAge(person: Persons1) {
  if (person.age) {
    console.log(person.age);
  } else {
    console.log("Age unknown");
  }
}

const user5: Persons1 = {
  name: "varsha",
  // age:"varsha" will throw error
  age: 23,
};

// Equality narrowing
//Equality narrowing refers to a type of narrowing technique that helps typescript compiler infer
// more specific type based on type
/**
 * ex:- ===
 * !==
 * ==
 * and !=
 */

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

// in operator narrowing
function getArea2(shape: Shape) {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

// instance for type gaurd
// Type script automatically narrows down the type of object within the block allowing us to access and use properties and method

abstract class Product {
  constructor(public name: string, public price: number) {}

  abstract getPrice(): number;
}

class Electronics extends Product {
  constructor(name: string, price: number, public warranty: Number) {
    super(name, price);
  }

  getPrice(): number {
    return this.price;
  }
}

class Clothing extends Product {
  constructor(
    name: string,
    price: number,
    public size: string,
    public material: string
  ) {
    super(name, price);
  }
  getPrice(): number {
    return this.price;
  }
}

function displayDetails(product: Product): void {
  console.log(`Name:${product.name}`);
  console.log(`Name:${product.getPrice()}`);

  if (product instanceof Electronics) {
    console.log(`Warrenty: ${product.warranty}`);
  } else if (product instanceof Clothing) {
    console.log(`Size: ${product.size}`);
    console.log(`Material: ${product.material}`);
  }
}
