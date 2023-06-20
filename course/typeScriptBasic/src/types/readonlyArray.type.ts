/**
 * Array in javascrit is mutable i.e after defining it we can change its value
 * Typescript provide functionality to make array immutable
 * we can create array immutaable just by adding readonly keyword at the time of declering it
 * Read only array are created if we need either to read or copy it
 * */

let numbers: readonly number[] = [1, 2, 3];
//number.push(5);//Property 'push' does not exist on type 'number'.

// readonly tuples

type readOnlyPerson = readonly [string, string, number];
const readonlyPerson: readOnlyPerson = ["varsha", "kumari", 23];

type array1 = Readonly<string[]>;
type array2 = Readonly<[string, string, number]>;
