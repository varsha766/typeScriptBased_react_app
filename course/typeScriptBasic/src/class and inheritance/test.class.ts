class Person15 {
  name = "Varsha";
  email = "varsha@gmail.com";
  constructor(name: string, email: string) {
    console.log(name, email);
  }
  greet() {
    return `Hello varsha`;
  }
}
console.log(Person15);
const person30 = new Person15("varsha", "varsha@gmail.com");
console.log(person30);
