// class
/**
 * In opps class is a blue print of creating an objects.
 * It defines inital value of property or methods of an objects
 * An function inside an object is called method
 * class helps us to generate objects programmatically and let us declare what property does the object contain
 * function inside class do not contain function keyword
 *
 */

let persn = {
  name: "John",
  email: "john@gmail.com",
  greet: () => console.log(`Hello ${persn.name}`),
};

// class declration

class Persons {
  name = "Varsha";
  email = "varsha@gmail.com";

  greet() {
    return `Hello varsha`;
  }
}

// creating instance of class

const person1 = new Persons();
console.log(person1);
const person2 = new Persons();
console.log(person2);
// here both person1 and person2 logs the same value

/**
 * class hs special type of function called constructor function.
 * constructor function get fired every time a class is instantiated
 * constructor function are the way to parse required arguments that we want while instantiating class
 */

class Person1 {
  name = "Varsha";
  email = "varsha@gmail.com";
  constructor(name: string, email: string) {
    console.log(name, email);
  }
  greet() {
    return `Hello varsha`;
  }
}

const person3 = new Person1("varsha", "varsha@gmail.com");
const person4 = new Person1("nandani", "nandani@gmail.com");

/**
 * use of this keyword
 * dynamic use of property value
 */

class Person3 {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  greet() {
    return `Hello ${this.name}`;
  }
}
const personNew = new Person3("Varsha", "varsha@gmail.com");
console.log(personNew);
console.log(personNew.greet());

/**
 * Inheritance
 * It occurs when one class inherits the properties and methods of another class
 */

class User {
  name: string;
  email: string;
  age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class AdminUser extends User {
  isAdmin: boolean = true;
  usersReporting: number;
  constructor(
    name: string,
    email: string,
    age: number,
    usersReporting: number
  ) {
    super(name, email, age);
    this.usersReporting = usersReporting;
  }
}

// other way of using super method in child class that has some constructor in parent class
class AdminUser2 extends User {
  isAdmin: boolean = true;
  usersReporting: number;
  constructor(usersReporting: number) {
    super("xyz", "xyz@gmail.com", 24);
    this.usersReporting = usersReporting;
  }
}

const user1: User = new User("varsha", "varsha@mail.com", 23);
const user2: AdminUser = new AdminUser("nandani", "nandani@gmail.com", 24, 5);

console.log(user1, user2);

/**
 * Access modifier
 *Access modifiers control the visibility of properties and methods.
 */

class Person5 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}

const newPerson: Person5 = new Person5("John", 32);
newPerson.name = "neha";
console.log(newPerson);
/**
 *  here in above example we can see we are able to modifiy the name property of the newPerson
 *  But some time we want that other can not be able to modify the property value
 * for that we have three access modifier
 * 1 public:- All the properties defiened in a class by default is public that means properties and method will be available inside as well as outside of the class
 * 2 protected:- If any member of the class is set to protected then that memer is not vailbale outside the class
 *    it will be available within the class as well in child class
 * 3 private:- If any member is defined as private then that member will be accessable only in parent class not in child class nor outside of class
 */

// providing access modifier to the member of the class

class Person6 {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}
let person5: Person6 = new Person6("abc", 23);
person5.name = "tuv";
console.log(person5);

class Person7 {
  private name: string;
  public age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  public getName() {
    return this.name;
  }
}
let person6: Person7 = new Person7("abc", 23);
//person6.name = "tuv";//Property 'name' is private and only accessible within class 'Person7'.
console.log(person6.getName());

// protected access modifier

class Admin extends Person7 {
  public returnName() {
    // return this.name; //Property 'name' is private and only accessible within class 'Person7'.Private memebr can not be able to access from child class
  }
}
const admin: Admin = new Admin("Mark", 42);
let person7: Person7 = new Person7("John", 42);
console.log(person7);
console.log(admin);

// shorthand hand property for initialising clas prop

class Person8 {
  constructor(protected name: string, public age: number) {}
  public getName() {
    return this.name;
  }
}
class Admins extends Person8 {
  public returnName() {
    return this.name;
  }
}

const admin1: Admins = new Admins("uvw", 43);
console.log(admin1);

//********************** */
class NewPerson {
  constructor(protected name: string, public age: number) {}
  public getName() {
    return this.name;
  }
}

const personX: NewPerson = new NewPerson("varsha", 200);
const personY: NewPerson = new NewPerson("nandani", -150);
console.log(personX, personY);
// here above we can see we are able to send negative value also in age to fix we can add condition in constructor like below
class NewPerson2 {
  constructor(protected name: string, public age: number) {
    if (age > 200 || age < 0) throw new Error("The age must be between 0-200");
  }
  public getName() {
    return this.name;
  }
}

const personR: NewPerson2 = new NewPerson2("varsha", 200);
const personS: NewPerson2 = new NewPerson2("nandani", -150);
console.log(personR, personS);
