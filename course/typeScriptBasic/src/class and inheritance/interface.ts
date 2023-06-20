/**
 *                        Interface
 * Interface is nothing but structure that they defines in advance how an object
 * or class structure going to look like.
 * Interface is declared using interface keyword
 * Interface can be assigned to object
 * Interfaces and custom type are almost same but interface help when we use them in conjunction with our classes
 * they help us in structuring the classes
 * As well we can use inheritance in interface
 * interface can also have optional property as well call signature
 */

interface Developer {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void;
}

const developer: Developer = {
  name: "varsha",
  email: "varsha@gmail.com",
  age: 23,
};
