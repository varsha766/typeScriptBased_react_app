// tuples
/**
 * Tuple is a special type array where length of the array as well as each of the value is predefined
 */

//  assume a person array with below properties

let people: [string, string, number]; // example of tuple with exact same number of prop and exact same order as repereseted in array
people = ["varsha", "kumari", 23];
//people = [18, "varsha", "kumari"]; // getting error aas it need exact same order of types also

// passing optional property in tuples

let persons: [string, string, number?];
persons = ["varsha", "kumari"];

// custom type for list of student with heterogeneous list

type listOfStudents = [number, boolean, ...string[]];

const passingStudents: listOfStudents = [3, true, "varsha", "john", "Mark"];
const failingStudents: listOfStudents = [1, false, "scott"];
// here passingStudents and failingStudents is a heterogenous list as both has variable number of students
