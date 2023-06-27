function introduction4(name: string, age: number): string {
  return "'varsha";
}

const t = introduction4("varsha", 24);
console.log(t);
/**
 *  TypeScript does not directly support overloading functions within an interface.
 *  Overloading is typically used with function implementations rather than function declarations within interfaces.
 */
enum AgeUnit {
  year = "years",
  month = "months",
}

type HypersignUser = {
  name: string;
  age: number;
  country: string;
  ageUnit: AgeUnit;
};

const Hperson: HypersignUser = {
  name: "varsha",
  age: 30.5,
  ageUnit: AgeUnit.year,
  country: "India",
};

// using type in function declaration

function convertAge(Hperson: HypersignUser) {
  Hperson.age = Hperson.age * 12;
  Hperson.ageUnit = AgeUnit.month;
  return Hperson;
}

const convertedAge = convertAge(Hperson);
console.log(convertedAge); //{ name: 'varsha', age: 366, ageUnit: 'months', country: 'India' }

// function call signature
type Greeting = (greeting: string) => string;

type functionCallSign = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  // greet: (greeting: string) => string; // function call signature. defining greet is a function that take one pram greeting of type string and return string
  greet: Greeting;
};

const greetResult: functionCallSign = {
  name: "varsha",
  age: 30.5,
  ageUnit: AgeUnit.year,
  country: "India",
  greet: (greeting: string) => {
    return `${greeting} ${greetResult.name} `;
  },
};

console.log(greetResult.greet("Good morning")); // Good morning varsha

// Function overloading

/**
 * In order to use function overloading we have to add two call signature to our type.
 *
 */

// type of argument that function will take
type TicketReservation = {
  departureDate: Date;
  returnDate?: Date;
  departureFrom: string;
  destination: string;
};

// defining function call signature
// differeent ways of defining function call signature
// case 1
type TcketR = (
  departureDate: Date,
  returnDate: Date,
  departureFrom: string,
  destination: string
) => TicketReservation;

// casae2:- benifit of below syntax is we can add multiple call signature as in case of function overloading
// as function will return diffeerent valaue with differe parameter

type TicketReserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departureFrom: string,
    destination: string
  ): TicketReservation | never;

  (departureDate: Date, departureFrom: string, destination: string):
    | TicketReservation
    | never;
};

// using type script we can define only one function which return multiple values
/**
 * Now main issue is to know if our function will take three or four parameter
 * Typescript take common properties from both call signatures and formulate parmeter
 * Typescript will take one parameter from each signature and if it is same  both in terms of  type nd value then will put it as parameter
 * like  departureDate: Date it is common in both and is first parameter
 * and if it is different we have to union them and define like
 * returnDateOrDepartureFrom:Date | string,
 * i.e returnDate is second parameter from first caall signature of type Date  and second parameter in second call signature is departureFrom of type string
 * so typeScript will take union of both type
 *
 */

const ticketReserve: TicketReserve = (
  departureDate: Date,
  returnDateOrDepartureFrom: Date | string,
  departureFromOrDestination: string,
  destination?: string // optional as it will not available in second call signature
) => {
  if (returnDateOrDepartureFrom instanceof Date && destination) {
    return {
      departureDate,
      returnDate: returnDateOrDepartureFrom,
      departureFrom: departureFromOrDestination,
      destination,
    };
  }
  if (typeof returnDateOrDepartureFrom === "string") {
    return {
      departureDate,
      departureFrom: returnDateOrDepartureFrom,
      destination: departureFromOrDestination,
    };
  }
  throw new Error("Please provide valid details to reserve  ticket");
};

ticketReserve(new Date(), new Date(), "Delhi", "Mumbai");
ticketReserve(new Date(), "Delhi", "Mumbai");
console.log(ticketReserve(new Date(), new Date(), "Delhi", "Mumbai"));
//{
//   departureDate: 2023-06-22T08:10:28.903Z,
//   returnDate: 2023-06-22T08:10:28.903Z,
//   departureFrom: 'Delhi',
//   destination: 'Mumbai'
// }
console.log(ticketReserve(new Date(), "Delhi", "Mumbai"));
// {
//   departureDate: 2023-06-22T08:10:28.904Z,
//   departureFrom: 'Delhi',
//   destination: 'Mumbai'
// }

const ticketReserve2: TicketReserve = (
  x,
  y,
  z,
  w?: string // optional as it will not available in second call signature
) => {
  if (y instanceof Date && w) {
    return {
      departureDate: x,
      returnDate: y,
      departureFrom: z,
      destination: w,
    };
  }
  if (typeof y === "string") {
    return {
      departureDate: x,
      departureFrom: y,
      destination: z,
    };
  }
  throw new Error("Please provide valid details to reserve  ticket");
};

console.log(ticketReserve2(new Date(), "Delhi", "Mumbai"));
// {
//   departureDate: 2023-06-22T08:23:14.054Z,
//   departureFrom: 'Delhi',
//   destination: 'Mumbai'
// }

// interface MyInterface {
//   (x: string): string;
//   (x: number): number;
// }

// const myFunc: MyInterface = (x: string | number): string | number => {
//   if (typeof x === "string") {
//     return `Received string: ${x}`;
//   } else {
//     return x * 2;
//   }
// };

/**
 * TypeScript supports overloading based on number of parameters
 * If we define two function with same number of argument but type difference
 * when both functions are compiled to JavaScript, their signature is totally identical.
 *  As JavaScript doesn't have types, we end up creating two functions taking same number of arguments
 * so typescript won't allow to create such function
 * so we can do like below
 */

const testFunction = (x: string | number): string | number => {
  if (typeof x === "string") {
    return x as string;
  } else if (typeof x === "number") {
    return x as number;
  }
  throw new Error("Invalid argument");
};

interface MyInterface {
  (x: string): string;
  (x: number): number;
}

const myFunc = ((x: string | number): string | number => {
  if (typeof x === "string") {
    return `Received string: ${x}`;
  } else {
    return x * 2;
  }
}) as MyInterface;
console.log(myFunc("varsha"));
console.log(myFunc(5));

// function overloading using type

type hack = {
  arg: string | number;
};

type Hacker = {
  (arg: string): string;
  (arg: number): number;
};

// const testFunction: Hacker = (x) => {
//   if (typeof x === "string") {
//     return x as string;
//   } else if (typeof x === "number") {
//     return x as number;
//   }
//   throw new Error("Invalid argument");
// };
