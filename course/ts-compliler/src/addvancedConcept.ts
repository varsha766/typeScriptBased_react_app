/**
 * subtype:- If we have two type A and B and B is subtype of A i.e B extends A then we can use B easily anywhere A is required
 * superType:- If A and B are two types and B is a super type of A , then we can safely use A anywhere B is required
 */

let number: number[] = [2, 3, 4, 6];

let number1: object = [2, 3, 4, 6];
// here we have defiende type of array of number to object but typescript not complening
// because array is subtype of object

let numbers = [2, 3, 4, 5, 6]; // if we check its type typescript infers it as number[] not object because typescript move down the tree of super and subclass and reaches a subtype that fits our requirement
// we set it number[] as it will make our type strict

// Type widening
/**
 * At the time of type inference typescript use the conceptof type widening,typescript lean towards assigning a more general and closest type possible to a value rather than the strit and most
 * regid type
 */
// example of typewidenin
let x = "t"; // if we hover over variable name it will show let x:string this is because in midof code we can change value of x
const y = "t"; // if we hover over the variable then it will show const y: "t" this is because const value can't be changed later on

enum Roles {
  admin = "admin",
  author = "author",
}
const user = Roles.admin; // if we check what type script infer its type e could get   const user: Roles.admin
let user2 = Roles.admin; // ts infers let user2: Roles which means in some time we can change its value

// typecasting
/**
 * we can cast one type to another using as keyword
 */

const number3 = {
  x: 10,
  y: {
    z: 20,
  },
};
const number4 = {
  x: 10,
  y: {
    z: 20,
  },
} as const; // here we made the object as constant using as keyword
//number4.x = 11;// snce we make that object constant then we no more able to change the value
console.log(number3);

// we can typecast as below also
const number5 = <const>{
  x: 10,
  y: {
    z: 20,
  },
};

// Totality :- TYpescript also check missing cases

type weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = weekdays | "Sat" | "Sun";

function nextDayForWeekDay(weekday: weekdays): Day {
  switch (weekday) {
    case "Mon":
      return "Tue";
    case "Tue":
      return "Wed";

    case "Wed":
      return "Thu";
    case "Thu":
      return "Fri";
    case "Fri":
      return "Sat";
  }
}

// Discriminated Union

type Cat = {
  type: "cat"; // we added type to create discriminated union this will help not to add cat property to dog after creating there union
  purrs: boolean;
};
type Dog = {
  type: "dog";
  barks: boolean;
};
type Animal = Cat | Dog;

let cat: Animal = {
  type: "cat",
  // barks: true, throw error here
  purrs: true,
};

let dog: Animal = {
  type: "dog",
  barks: true,
};

function animalReaction(animal: Animal) {
  switch (animal.type) {
    case "cat":
      console.log("The animal is a cat and it purrs");
      break;
    case "dog":
      console.log("The animal is a dog and it barks");
      break;
  }
}

animalReaction(cat);
animalReaction(dog);

//INdex accessed type
// mimicing an api response
/**
 * Index accessed type:- if we have nested object and if we need to use that sub part some where in code we use to define its structure as different type
 * using Index accessed type we can avoid redundent code
 */
// type ServiceList = {
//   count: number;
//   services: {
//     id: number;
//     name: string;
//     price: number;
//   };
// }[];
//in place of writing above code we c an do as below
type ServiceList = UserDetailsAPIResponse["servicesList"];
type UserDetailsAPIResponse = {
  id: number;
  name: string;
  servicesList: {
    count: number;
    services: {
      id: number;
      name: string;
      price: number;
    }[];
  };
};

function fetchUserDetails(name: string): Promise<UserDetailsAPIResponse> {
  return new Promise((res, rej) => {
    if (name) {
      res({
        id: 23,
        name: "John",
        servicesList: {
          count: 2,
          services: [
            {
              id: 1,
              name: "Accounting",
              price: 49,
            },
            {
              id: 2,
              name: "Design",
              price: 19,
            },
          ],
        },
      });
    } else rej(new Error("Pass new a valid name"));
  });
}

function printServiceList(services: ServiceList): void {
  console.log(services);
}

fetchUserDetails("John")
  .then((res: UserDetailsAPIResponse) => {
    console.log(res);
    printServiceList(res.servicesList);
  })
  .catch((err) => console.log(err));

// key of operator
/**
 * keyof operator returns a new type, which is union of all the keys of the
 * properties of a type
 */
type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

// -> "id" | "date" | "type"

type unionOfKeysOfEvents = keyof Events;

type Numeric = {
  [key: number]: string;
};

type NumericKeyOf = keyof Numeric;

type NumberAndString = {
  [key: string]: string;
};

type NumberAndStringKeyoff = keyof NumberAndString;
// type of NumberAndStringKeyoff infer as number | string. when we define key as string it will be union of string and number

// typeof operator
let greeting = "Hellow world";
let firstName: string; // if we want to assign firstName as typeof greeting we can write as below
let firstName2: typeof greeting;
//typeof operator can be used other than native type also like type of some custom object
// we can use typeof operator as type gaurd
const user1 = {
  name: "john",
  age: 32,
};
// if we wnat to create another variable of same type as user we can do as below

let tom: typeof user1;

// Mapped types

let numbers1 = [1, 3, 4, 5, 6, 8];
let stringNumber = numbers1.map((each) => each.toString());
console.log(stringNumber);

type Nextday = {
  [w in weekdays]: Day;
};
let nextDay: Nextday = {
  Mon: "Tue",
  Tue: "Wed",
  Wed: "Thu",
  Thu: "Fri",
  Fri: "Sat",
};

type Artist = {
  id: number;
  name: string;
  bio: string;
};

const artist: Artist = {
  id: 1,
  name: "Varsha",
  bio: "Hey, I ma varsha",
};

const editedArtist = {
  id: 1,
  bio: "Hello, I am varsha",
};

// in above editedArtist if we assign Artist type typescript will start con=mplainig name should be theer. Let us assume that Artist is stored in db and use only wants to update bio
// so he sent its id and bio. we can solve this issue by making name and bio field as optional and create another type with that field as initial it should be mandatory
// for creating new Artist object
// There will be redandancy then. we can solve it by mapped type  as below

type MappedArtistForEdit = {
  [Property in keyof Artist]?: Artist[Property];
};

// now we can assign it to the editArtist object to accept either name or bio or both
const editedArtist2: MappedArtistForEdit = {
  id: 1,
  bio: "Hello, I am varsha",
};
// but the issue with MappedArtistForEdit is that it made all field as optional even id we can solve this ass below

type MappedArtistForEdit2 = {
  [Property in keyof Artist]?: Artist[Property];
} & { id: number };
// now if we remove id from the object it will throw error
const editedArtist3: MappedArtistForEdit2 = {
  id: 1,
  bio: "Hello, I am varsha",
};

// Conditional type
//conditional types allow us to add conditions to typeScript type system
// Using condition type we can check if one type extends the other type and
// perform actions based on the condition being true
interface Animals {
  live: () => void;
}

interface Dogs extends Animals {
  woof: () => void;
}

type Example = Dogs extends Animals ? string : number;

// SomeType extends OtherType ? TrueType : FalseType
// Conditions can be used with ny types, event with generic and primitive

type isString<T> = T extends string ? true : false;

type A = isString<string>;
type B = isString<number>;

// constraint on conditional types

interface WritePermission {
  write: true;
}
interface ReadPermission {
  write: false;
}
interface Uswr {
  id: number;
  name: string;
  email: string;
}

interface Admin extends Uswr, WritePermission {}
interface Author extends Uswr, WritePermission {}
interface Reader extends Uswr, ReadPermission {}
// constraint on conditional type
type FilterWriteable<T> = T extends { write: true } ? true : false;
type Writble = FilterWriteable<Reader>;
// Inferring from conditional types

// Infer keyword can be used inside conditional type
type ArrayElementType<T> = T extends (infer E)[] ? E : T;
// Above expression tells does T extends array of generic type E here we instruct typescript to infer the type of array for us.
// If it extend the type of an array , infeer the type of array it is and create a
// generic E and if T does not extends an array, then return T

type TypeOne = ArrayElementType<string[]>; // string i.e return E

type TypeTwo = ArrayElementType<number[]>; // number i.e return E

type TypeThree = ArrayElementType<(number | string | boolean)[]>; // n/s/b

type TypeFour = ArrayElementType<{ name: string }>; // retuen T and type {name: string}

type TypeFive = ArrayElementType<string>; // return T i.e string

// infer return type of a function

function returnStrinig() {
  return " string";
}

type FunctionReturnType<T> = T extends () => infer R ? R : T;

type NewType = FunctionReturnType<typeof returnStrinig>; // we can only pass type

// infers function argument

function personf(name: string, age: number) {
  return {
    name: name,
    age: age,
  };
}

type GetFirstArgumentOfAnyFunction<T> = T extends (
  first: infer FirstArgument,
  ...args: any[]
) => any
  ? FirstArgument
  : never;

type GetSecondArgumentOfAnyFunction<T> = T extends (
  first: any,
  second: infer SecondArgument,
  ...args: any[]
) => any
  ? SecondArgument
  : never;

type firstArgument = GetFirstArgumentOfAnyFunction<typeof personf>;
type SeconsArg = GetSecondArgumentOfAnyFunction<typeof personf>;

//Satisfies operator
// Satisfies operator pre validates all the properties of the object for us

type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

// const color: Record<Properties, RGB | string> = {
//   red: [255, 0, 0],
//   green: "#00ff00",
//   blue: [255, 255, 0],
// };
// we can write above code using satisfies keyword

const color = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [255, 255, 0],
} satisfies Record<Properties, RGB | string>;

const redComponent = color.red[0];
const greenValue = color.green.toUpperCase();
// const blueValue = color.blue.toUpperCase(); here we can not add string value to blueValue as w have define it as number


