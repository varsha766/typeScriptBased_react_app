// convert the below code using type script
const library = {
  name: "New York Library",
  address: " 24, Some Street, New York",
  numberOfBooks: 1254,
  type: "national", // 'national', 'academic', 'public'
  books: [
    {
      title: "Harry Potter",
      pages: 756,
      isbn: "9971-5-0210-0",
    },
    {
      title: "Davinci Code",
      pages: 386,
      isbn: "9971-5-0210-0",
    },
  ],
  genres: ["fiction", "history", "computers", "poetry"],
  members: [
    {
      name: "John Doe",
      phone: "+167678978",
    },
    {
      name: "Mark Doe", // Name is mandatory
      phone: "+167678978", // Phone is mandatory
      email: "mark@email.com", // Can have additional optional fields
    },
  ],
};
import { Types } from "../role";
// type Members = [string, string, ...string[]];
type Members = {
  name: string;
  phone: string;
  /**
   * email?: string
   * this is wrong beacuse it will allow only one optional property for multiple optional property
   * we could use index signature  as below
   */
  [key: string]: string;
};

type BOOK = {
  title: string;
  pages: number;
  isbn: string;
};
type LIBRARY = {
  name: string;
  address: string;
  numberOfBooks: number;
  type: Types; // we can also use union type like TYPE="national"|"academic" | "public"
  books: BOOK[];
  genres: string[];
  memebers: Members[];
};

const libraryType: LIBRARY = {
  name: "Indian Library",
  address: "24, some street, India",
  numberOfBooks: 5000,
  type: Types.national,
  books: [
    {
      title: "Prem chand",
      pages: 500,
      isbn: "9971-5-0210-0",
    },
    {
      title: "Maha devi burman",
      pages: 800,
      isbn: "9971-4-0310-1",
    },
  ],
  genres: ["fiction", "poetry"],
  memebers: [
    {
      name: "varsha kumari",
      phone: "62983415723782",
      email: "varsha@gmail.com",
    },
    {
      name: "Nandani kumari",
      phone: "62983415723782",
      address: "xyz",
    },
  ],
};

 class MyClass {
  constructor() {}
  static className = "Myclass";

  z = "params";
  static toString() {
    return "[Class: MyClass]";
  }
}
console.log(MyClass);
