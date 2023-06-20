// Interface can we used to apply strict type to classes

enum AutomobileType {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileColor {
  red = "red",
  blue = "blue",
  white = "white",
  silver = "silver",
  black = "black",
}
enum AutomobileBrand {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}
interface Vehicles<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

// We use implement keyword to use interfce with class

class Car implements Vehicles<string, string, AutomobileColor> {
  public type: string = "car";
  constructor(
    public brand: AutomobileBrand,
    public colors: AutomobileColor[],
    public description: string
  ) {}
}

const ferari: Car = new Car(
  AutomobileBrand.ferrari,
  [AutomobileColor.black, AutomobileColor.blue],
  "This is ferrari"
);
//console.log(ferari);

//Multiple class with same interface
// we have created Car and Truck class with same interface Vehicles

class Truck implements Vehicles<string, string, AutomobileColor> {
  public type: string = "truck";
  constructor(
    public brand: AutomobileBrand,
    public colors: AutomobileColor[],
    public description: string
  ) {}
}

const toyotaTruck: Truck = new Truck(
  AutomobileBrand.toyota,
  [AutomobileColor.black, AutomobileColor.blue],
  "This is a toyota truck"
);
console.log(toyotaTruck);

// Implementing multiple interface to a class

interface CommercialVehicle {
  capacity: string;
  licenseRenewableDate: Date;
}

class newTruck
  implements Vehicles<string, string, AutomobileColor>, CommercialVehicle
{
  public type: string = "truck";
  constructor(
    public brand: AutomobileBrand,
    public colors: AutomobileColor[],
    public description: string,
    public capacity: string,
    public licenseRenewableDate: Date
  ) {}
}

const toyotaTrucks: newTruck = new newTruck(
  AutomobileBrand.toyota,
  [AutomobileColor.black, AutomobileColor.blue],
  "This is a  new toyota truck",
  "15 T",
  new Date()
);
console.log(toyotaTrucks);

/**
 * Multiple inheritance of class with interface
 * We can inherit only single class in Typescript. we can not inherrit from multple classes
 */

class Users {
  constructor(public name: string) {}
}

class Password {
  constructor(public password: string) {}
}

/*class RegisteredUser extends Users, Password{}
  - If trying to inherit from multiple class getting error:- Classes can only extend a single class
  - This issue we can solve by inheritance as a class can implement as many interface as we want
   
  how access modifier works with interfaces
   interface are a blueprint of the final object that a class will create
  if we make any property of interface as private typescript will throw error as we can not be able to create object with that property
  */
