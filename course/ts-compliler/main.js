// This keyword

// it always refer to the object that executing the current function
//

const book = {
  title: "The title",
  authors: ["varsha", "john"],
  read() {
    console.log(this);
  },
  printAuther() {
    this.authors.forEach((author) => {
      console.log(this.title, "-", author);
    });
  },
};

book.stopreading = function () {
  console.log(this);
};
book.stopreading();

function watchmovie() {
  console.log(this);
}
watchmovie();
book.printAuther();

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name, "Has logged in");
  }
  logout() {
    console.log(this.name, "has logged out ");
  }

  addPoint() {
    this.points++;
    console.log("total points", this.points);
  }
}

const user1 = new User("john", "john@gmail.com");
// const user2 = new User("varsha", "varsha@gmail.com");
console.log(user1);
// user2.addPoint()

// why javascript all method to the prototype of the object rather in main object

/**
 *  examplef constructor function
 *  function syntax is same but constructor function differ by the way we invoke it
 *  constructor functon is invoked by using new keyword
 *  constructor function alway generate empty object
 * by this below code it will log empty {}
 * function User(name, email) {}
 * const user= new User("john", "john@gail.com");
 * console.log(user)
 *  */

function Admin(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
  this.login = () => {
    console.log(this.name, "Has logged in");
  };
  this.logout = () => {
    console.log(this.name, "has logged out ");
  };
  this.addPoint = () => {
    this.points++;
    console.log("total points", this.points);
  };
}
const user = new Admin("john", "john@gail.com");
console.log(user, "user");

// Prototype
/**
 * Javascript uses prototypical inheritance
 */
// To add method in Admin prototype
function Admins(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}
Admins.prototype.login = function () {
  console.log(this.name, "Has logged in");
};
Admins.prototype.logout = function () {
  console.log(this.name, "has logged out ");
};
Admins.prototype.login = function () {
  this.points++;
  console.log("total points", this.points);
};

// Inheriting user properties

function AdminUser(name, email, peopleReporting) {
  // apply()  instruct js to instantiate all the properties that are part of user constructor function

  Admins.apply(this, [name, email]); // sequence matter
  this.peopleReporting = peopleReporting;
}
AdminUser.prototype = Object.create(Admins.prototype); // Object.create() creates an  empty object

// adding extra method to the Admin user prototype
AdminUser.prototype.updatePeopleReporting = function (newNumber) {
  this.peopleReporting = newNumber;
};
const admin = new Admins("john", "john@gail.com");

const adminUser = new AdminUser("varsha", "varsha@gmail.com", 10);
console.log(admin);

console.log(adminUser);

// depth of javascript object

// literal syntax for creating javascript object
const Book = {
  title: "The title",
  pages: 300,
  author: "John",
};

// object constructor to create new javascript object

const book2 = new Object(); // create an empty object
book2.title = "Book2 title";
book2.pages = 250;
book2.author = "Mark";

console.log(Book, book2);

/**
 * Property discriptor
 * Every property of an object has an object associated with it called property discriptor
 *  value -> The value of the property
 * writable (boolean) -> whether this property in question is writable or not
 * enumerable (boolean)  -> whether you can enumerate or loop through this property or not
 *  configurable (boolean) -> The configurable property tells whether the user has permission
								           to change property descriptor such as to change the value of
                          writable and enumerable settings.

 */

// how to get property descriptor of each property
console.log(Object.getOwnPropertyDescriptors(Book));

// how to define proerty descriptor for various property of an object

const Book1 = new Object();
Object.defineProperty(Book1, "title", {
  value: "This is title of the book",
  writeable: true,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(Book1, "author", {
  value: "Varsha",
  writeable: false,
  enumerable: true,
  configurable: true,
});
Book1.author = "Mark";
console.log(Book1);

