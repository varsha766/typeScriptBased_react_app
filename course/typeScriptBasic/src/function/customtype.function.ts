/**
 * custom type
 *
 * */
enum AgeUnit {
  years = "years",
  months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit; // ageUNit could be in years or in months
  country: string;
};

const child: Person = {
  name: "Ayush",
  age: 30.5,
  ageUnit: AgeUnit.years,
  country: "India",
};

function convertAgeToMonths(person: Person): Person {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
}

console.log(convertAgeToMonths(child));
