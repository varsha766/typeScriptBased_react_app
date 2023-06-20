/**
 * Null  and Undefiend
 * This two used to represent something is absence
 * undefiend means something that has not yet defined
 * NULL means something that javascript not able to compute
 */

let user: string;
//console.log(user); // vlaue that does not yet defiened

// let saveButton = document.getElementById("save");
// console.log(saveButton);

let loggedInUsernme: string;
const users = [
  { name: "varsha", age: 23 },
  { nme: "ayush", age: 16 },
];

const loggedInUser = users.find((user) => {
  user.name === loggedInUser;
});

//console.log(loggedInUser.age); // getting error as loggedInuser.age is undefiened

let saveButton: HTMLElement = document.getElementById("save")!; // ! mark tells  typeScript that statement will retrun an element which will be an id save

let saveButton1: HTMLElement | null = document.getElementById("save")!; // ! mark tells  typeScript that statement will retrun an element which will be an id save

if (saveButton1 === null) {
  console.log("value null");
} else {
  console.log("vlue is not null");
}
