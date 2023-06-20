// ENUM
/**
 * ENUM can be declared usins enum keyword
 * two types on enum are string and number
 * Numeric enums first value defaults to 0
 */

//const roles = ["admin", "author", "editor"]; // is also a way to tackel enum but issue with this is we won't have exact index of each element
// and if roles array grow it will we tedious to know the list
import { Roles } from "../role";
type Persons = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};
console.log(Roles.admin);

const person1: Persons = {
  name: "varsha",
  email: "varshakumari370@gmail.com",
  password: "pass",
  role: Roles.admin,
};
console.log(person1);
