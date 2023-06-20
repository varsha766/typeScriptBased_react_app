// type aliases

type Article = {
  author: string;
  content: string;
  title: string;
  image?: string;
};

let articles: Article = {
  author: "Jhon",
  content: "Content",
  title: "test title",
};

let post: Article = {
  author: "sam",
  content: "Hellow sam",
  title: "Hello",
};

// union type

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

// sign of boolean
// |
type DogUnionCat = Dog | Cat;

let dog: DogUnionCat = {
  name: "Buddy",
  barks: true,
  wags: true,
}; // here dog variable do not throw error even if cat property is missing

let cat: DogUnionCat = {
  name: "Bella",
  purrs: true,
};

// benifit of union is we can use property of both objects

let habrid: DogUnionCat = {
  name: "donkey",
  barks: false,
  purrs: false,
  wags: false,
};

//union type must contain type A or type B or all the common property of type A and B together

//use of union in real world

type StringOrNumber = number | string;
function addNumberOrString(a: StringOrNumber, b: StringOrNumber) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(addNumberOrString(5, 10));
console.log(addNumberOrString("Mark", 10));
//console.log(addNumberOrString("Mark", null)); // only number and string are allowed
