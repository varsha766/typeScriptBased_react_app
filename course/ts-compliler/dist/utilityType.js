"use strict";
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
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res(1);
    }, 1000);
});
const article = {
    title: "title for the article",
    content: "content of the article",
    contributors: {
        author: { name: "John", email: "john@gmail.com", age: 23 },
        editor: { name: "Varsha", email: "varsha@gmail.com", age: 24 },
        researcher: { name: "Nandani", email: "nandani@gmail.com", age: 25 },
    },
};
const personX = {
    name: "Varsha",
    age: 32,
};
const personY = {
    name: "Varsha",
    age: 32,
};
const limitedUser = {
    name: "varsha",
    email: "varsha@gmail.com",
};
//Partial<Type>
/**
 * It allows us to create a ne type based on existing type but with all properties set to optional
 */
function updateUser(user, updates) {
    return Object.assign(Object.assign({}, user), updates);
}
const userX = {
    name: "varsha",
    email: "varsha@gmail.com",
    password: "12rjegko",
    age: 23,
};
const updatedUser = updateUser(userX, { email: "updatedemail@gmail.com" });
const userW = {
    name: "Nandu",
    age: 23,
};
userW.name = "varsha"; // here we allowewd to change the value
const userT = {
    name: "varsha",
    age: 23,
};
