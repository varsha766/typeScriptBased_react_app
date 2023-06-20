/**
 * Static member
 * member of class that can be access without instantiating a class
 * we can directly access static member of the class
 * we can make property as well as method of class as static
 */

class Automobile {
  public static color: string = "red";

  public static calculateMileage(miles: number, liters: number) {
    return miles / liters;
  }
}

console.log(Automobile.color);
console.log(Automobile.calculateMileage(50, 10));
const pi = Math.PI;
console.log(pi);
