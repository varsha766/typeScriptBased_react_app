/**
 * utility types are predefined generic types thaat casn perform common type transformations in TypeScript
 * utility types can be considered as type functions that take one or more types as an input and produce a new type as o/p
 */
// Mapped Types
// Partial utility type implementation

// type Partial<T> = {
//   // Duplicate identifier 'Partial'. as it is defined in library itself
//   [P in keyof T]?: T[P];
// };

//Conditional Types
//Exclude Type Implementation
// Exclude check each properties of T and U and check whether each property of T assignable to U or not
//type Exclude<T, U> = T extends U ? never : T;

// Awaited<Type> // Type repersent generic type
// Aaited type is used where we don't know the type of value we will get
const promise: Promise<number> = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 1000);
});

type AwaitedType = Awaited<typeof promise>;

// Record<Type> // this type is used to combine two different type together into one
// we convert one type to object key and another type to object value
// Record<Keys, Type>

type Role = "author" | "editor" | "researcher";

interface User {
  name: string;
  email: string;
  age: number;
}

interface Article2 {
  title: string;
  content: string;
  contributors: Record<Roles, User>;
}
const article = {
  title: "title for the article",
  content: "content of the article",
  contributors: {
    author: { name: "John", email: "john@gmail.com", age: 23 },
    editor: { name: "Varsha", email: "varsha@gmail.com", age: 24 },
    researcher: { name: "Nandani", email: "nandani@gmail.com", age: 25 },
  },
};

// Pick<Type, keys>
// It let us to create a new type by picking some of the subsets or properties of an existing type

// Type parameter refers to the original type from which we want to pick parts of type or properties and key is the array of properties that wants to pick

interface Person {
  name: string;
  age: number;
  address: string;
}

type NameAndAge = Pick<Person, "name" | "age">;

const personX: NameAndAge = {
  name: "Varsha",
  age: 32,
};
//ReadOnly type: This will make type to readonly
//eg:-

type NameAndAge2 = Readonly<Pick<Person, "name" | "age">>;

const personY: NameAndAge2 = {
  name: "Varsha",
  age: 32,
};

// if we try to change the name property value type script will start complening
//personY.name = "Nandani";

/**
 * omit type
 *  Omit<OldType, Keys>
 * It is opposite of Pick type
 * In omit we are pick those properties that should not exists in new type
 * while in Pick we pick those properties that should exists in type
 * */

interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}
//scenario let say at the time of storing data we need all four mentioned above and latter on sending data back we just want to send name and email

type LimitedUser = Omit<User, "password" | "age">;
const limitedUser: LimitedUser = {
  name: "varsha",
  email: "varsha@gmail.com",
};

//Partial<Type>
/**
 * It allows us to create a ne type based on existing type but with all properties set to optional
 */

function updateUser(user: User, updates: Partial<User>): User {
  return {
    ...user,
    ...updates,
  };
}

const userX: User = {
  name: "varsha",
  email: "varsha@gmail.com",
  password: "12rjegko",
  age: 23,
};

const updatedUser = updateUser(userX, { email: "updatedemail@gmail.com" });

/**
* Required<Type>
It is opposite of Partial<Type> 
Required<Type> create a ne type that makes all the properties of the origiinal type s required
i.e any optional property from the existing property become required property
*/

interface UserZ {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
}

type Registerzuser = Required<Pick<UserZ, "email" | "password">>;
// in  line we just tried to use two different utility types together first we pick some of the properties using Pick keyword and then we made selected properties to required using required keyword

/**
 * Readonly<Type>
 * It convert all the property of the Type passed to readonly i.e we won't able to change the value of the object of that type
 */

interface UserW {
  name: string;
  age: number;
}

const userW: UserW = {
  name: "Nandu",
  age: 23,
};
userW.name = "varsha"; // here we allowewd to change the value

const userT: Readonly<UserW> = {
  name: "varsha",
  age: 23,
};

//UserActivation.name = "Nandu"; // here typescript start throwing error

/**
 * String manipulating Type
 * There are four string manipulating types which manupulate string literals within typescript
 * 1. Uppercase<StringType>
 * 2.Lowercase<StringType>
 * 3. Capitalize<StringType> : this make all the first letter of values in to capital letters
 * 4. Uncapitalize<StringType> : this convert all the capitalized letter to uncapitalized. But this conver only first leter of first word to caps
 * If e have New York then uncapitalized will convert New Yirk to ne York not new york
 */

type City = "New york" | "london" | "tokyo";
//if we want to convert all to upercase
type UpperCaseCity = Uppercase<City>;
type LowerCaseCity = Lowercase<City>;
type CapitalizeCity = Capitalize<City>;
type UnCapitalizeCity = Uncapitalize<City>;
