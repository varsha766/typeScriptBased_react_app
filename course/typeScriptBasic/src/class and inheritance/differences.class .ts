/**
 * Difference  between Type and interface
 *
 * Type provide us to create an union and intersection type
 * Tuples can be declared using type keyword but cannot be declared using interface
 * Interface can extends each other
 */

type User1 = {
  name: string;
};

type AdminsUser = {
  isAdmin: boolean;
};

// intersection type
const AdminAndUser: User1 & AdminsUser = {
  name: "varsha",
  isAdmin: true,
};

// uniounType
const UserOrAdmin: User1 | AdminsUser = {
  name: "varsha",
};
// Tuples
// Tuples can be declared using type keyword but cannot be declared using interface
type ResponseTuple = [string, number];

// interface

// If we create two  interface with the same name then typescript will merge the property of interface as shown below

interface PersonM {
  name: string;
}

interface PersonM {
  lastName: string;
}

const p1: PersonM = {
  name: "varsha",
  lastName: "kumari",
};

// interface can extends but type can't

interface Name {
  name: string;
}

interface LastName {
  lastName: string;
}

interface PersonZ extends Name, LastName {}
const p2: PersonZ = {
  name: "varsha",
  lastName: "kumari",
};

// Difference between abstract class and interfaces
/**
 * Abstract classes can have implementtion of methods within them that can be inherited by classes, whereas
 * interfaces can only have call signature nd cannot have actual implementations of methods inside them
 * Abstract classes can contain static methods as well whereas interfaces cannot contain static methods.
 */

// where to use abstract class and where to use interface
