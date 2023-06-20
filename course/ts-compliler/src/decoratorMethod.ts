//whenever we apply a decorator to the parameter of a FirstDecorator, we get three argument passed to the decorator
function ParameterDecorator(
  classPrototype: Object,
  methodName: string,
  index: number
) {
  console.log(classPrototype, methodName, index);
}

class Airoplane {
  constructor(public _aircraftModel: string) {}
  public static seatCount(): void {
    console.log("156 seats");
  }

  public pilotName(name: string, @ParameterDecorator lastName: string) {
    console.log(name);
  }
  public get aircraftModel() {
    return this._aircraftModel;
  }
}

//Define a property decorator
// property decorator two argument
//1. prototype Of the class(if property is an instance member), class Constructor(if property is static member )

function PropertyDecorator1(classPrototype: Object, propertyName: string) {
  console.log(classPrototype, propertyName);
}

// decorator for accessor method i.e public get aircraftModel
// Decorator to accessor takes three arguments
//1. classPrototype
//2. accessorName
//3. propertyDescriptor
function AccessorDecorator(
  classPrototype: Object,
  accessorName: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log(classPrototype, accessorName, propertyDescriptor);
}

class Airoplane1 {
  @PropertyDecorator1
  public _aircraftModel: string;
  constructor(aircraftModel: string) {
    this._aircraftModel = aircraftModel;
  }
  public static seatCount(): void {
    console.log("156 seats");
  }

  public pilotName(name: string, lastName: string) {
    console.log(name);
  }
  @AccessorDecorator
  public get aircraftModel() {
    return this._aircraftModel;
  }
}

// multiple decorator and returning value from class decorator
/**
 * class decorator is capable of returning something within the decorator function
 * class decorator can alter the constructor function and return new constructor function
 *
 */
// using multiple decorator
function DecoratorOne(target: Function) {
  console.log("Decorator for class 1");
}

function DecoratorTwo(target: Function) {
  console.log("Decorator for class 2");
}

@DecoratorOne
@DecoratorTwo
class Person {
  constructor(public name: string) {}
}

// modified the constructor of person1  using decorator and added mapLocationObject
// we used FunctionConstructor rather Function because tells type script we are expecting a constructor function
function AddLocation(lat: number, long: number) {
  return function <T extends { new (...args: any[]): {} }>(
    classConstructor: T
  ) {
    return class extends classConstructor {
      public mapLocation: MapLocation;
      constructor(...args: any[]) {
        super(...args);
        this.mapLocation = { lat, long };
      }
    };
  };
}

interface MapLocation {
  lat: number;
  long: number;
}
@AddLocation(1.234, 1.876)
class Person1 {
  constructor(public name: string, public age: number) {}
}

const person: Person1 = new Person1("john", 32);
console.log(person);
