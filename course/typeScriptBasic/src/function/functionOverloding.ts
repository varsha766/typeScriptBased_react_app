/**
 * function call signature
 * It is used to show particular function takes function as its parametr
 * It is done by greet:Function
 * Issue with above syntax os we don't know which type of function parameterName will be.what is its return type nd so on
 * We can do it in better way using function call signature it is as below
 *  greet:(greeting:string)=> string
 *
 * we can also use custom type for greeting function as bellow
 * type greetingFunction=(greeting:string) =>string;
 * greet:greetingFunction
 * */

enum AgeUnit1 {
  years = "years",
  months = "months",
}

type greetingFunction = (greeting: string) => string;
type Teacher = {
  name: string;
  age: number;
  ageUnit: AgeUnit1;
  country: string;
  //   greet: (greeting: string) => string; // this means function takes greeting as argument which is of type string and return string
  //or we can write it as
  greet: greetingFunction;
};

const child1: Teacher = {
  name: "Ayush",
  age: 30.5,
  ageUnit: AgeUnit1.years,
  country: "India",
  greet: (greeting) => `${greeting} ${child1.name}`,
};

function convertAgeToMonth(person: Person): Person {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
}

console.log(child1.greet("Good morning"));

// real-life use case  of function call signature eg:- ticket reservation

type Reservation = {
  departureDate: Date;
  returnDate: Date;
  departureForm: string;
  destination: string;
};

// explicit way of defining function call signature
type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departureForm: string,
    destination: string
  ): Reservation;
};

// in javascript we have ability to call same function with different argument and return different values
// so we can make the returnDate as optional if traveller just want one side ticket and so on
type Reservations = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// here we have two call signature in same type
// and type script will able to know that function will be called in multiple ways and might return different values
type Reserv = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservations | never; // first call signature. Here I have added union of never as this call may throw error in case mandatory parameters is not sent

  (departureDate: Date, departingFrom: string, destination: string):
    | Reservations
    | never; // second call signature
  // first call signature. Here I have added union of never as this call may throw error in case mandatory parameters is not sent
};
// combination of call signature of first and second

const reserve: Reserv = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  // checking for the case of round trip. In this case all four parametr should be there as well second parameter should be of type Date

  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Please provide valid details to reserve a ticket");
};

console.log(reserve(new Date(), new Date(), "Delhi", "Mumbai"));
console.log(reserve(new Date(), "Delhi", "Mumbai"));
