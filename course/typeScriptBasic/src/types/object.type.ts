// type object

let person = {
  name: "Mark",
  age: 23,
};

// let Car: {
//   color: string;
//   brand: string;
// } = {}; // throwing error as object is empty and car object has two property

let car: {
  color: string;
  brand: string;
} = {
  color: "blue",
  brand: "BMW",
};
// another way of declearing onbject type

let article: {
  author: string;
  content: string;
  title: string;
  image?: string; // optional property
};
article = {
  author: "Prem chand",
  content: "Hello",
  title: "My first article",
};
