"use strict";
/**
 * subtype:- If we have two type A and B and B is subtype of A i.e B extends A then we can use B easily anywhere A is required
 * superType:- If A and B are two types and B is a super type of A , then we can safely use A anywhere B is required
 */
let number = [2, 3, 4, 6];
let number1 = [2, 3, 4, 6];
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
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
})(Roles || (Roles = {}));
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
}; // here we made the object as constant using as keyword
//number4.x = 11;// snce we make that object constant then we no more able to change the value
console.log(number3);
// we can typecast as below also
const number5 = {
    x: 10,
    y: {
        z: 20,
    },
};
function nextDayForWeekDay(weekday) {
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
let cat = {
    type: "cat",
    // barks: true, throw error here
    purrs: true,
};
let dog = {
    type: "dog",
    barks: true,
};
function animalReaction(animal) {
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
function fetchUserDetails(name) {
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
        }
        else
            rej(new Error("Pass new a valid name"));
    });
}
function printServiceList(services) {
    console.log(services);
}
fetchUserDetails("John")
    .then((res) => {
    console.log(res);
    printServiceList(res.servicesList);
})
    .catch((err) => console.log(err));
// type of NumberAndStringKeyoff infer as number | string. when we define key as string it will be union of string and number
// typeof operator
let greeting = "Hellow world";
let firstName; // if we want to assign firstName as typeof greeting we can write as below
let firstName2;
//typeof operator can be used other than native type also like type of some custom object
// we can use typeof operator as type gaurd
const user1 = {
    name: "john",
    age: 32,
};
// if we wnat to create another variable of same type as user we can do as below
let tom;
// Mapped types
let numbers1 = [1, 3, 4, 5, 6, 8];
let stringNumber = numbers1.map((each) => each.toString());
console.log(stringNumber);
let nextDay = {
    Mon: "Tue",
    Tue: "Wed",
    Wed: "Thu",
    Thu: "Fri",
    Fri: "Sat",
};
const artist = {
    id: 1,
    name: "Varsha",
    bio: "Hey, I ma varsha",
};
const editedArtist = {
    id: 1,
    bio: "Hello, I am varsha",
};
// now we can assign it to the editArtist object to accept either name or bio or both
const editedArtist2 = {
    id: 1,
    bio: "Hello, I am varsha",
};
// now if we remove id from the object it will throw error
const editedArtist3 = {
    id: 1,
    bio: "Hello, I am varsha",
};
// infer return type of a function
function returnStrinig() {
    return " string";
}
// infers function argument
function personf(name, age) {
    return {
        name: name,
        age: age,
    };
}
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
};
const redComponent = color.red[0];
const greenValue = color.green.toUpperCase();
// const blueValue = color.blue.toUpperCase(); here we can not add string value to blueValue as w have define it as number
