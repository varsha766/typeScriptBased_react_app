// get and set method of typescript
// setter method
class PersonT {
  private _age: number | undefined;
  constructor(private name: string) {}
  public getName() {
    return this.name;
  }
  public set age(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
    this._age = age;
  }

  public get age() {
    if (this._age === undefined) {
      throw new Error("The age property has not been set as yet");
    }
    return this._age;
  }
}

const persont: PersonT = new PersonT("varsha");
persont.age = 70;
console.log(persont);
console.log(persont.age);

/**
 * difference between getter, setter and other method of class
 * 1. we use get and set keyword to declae these class
 * 2. set method can have only one parameter passed to it, get method do not take any argument as get is just used to get access to property value
 * 3.
 * */

class PersonV {
  constructor(private _name: string, private _age: number) {}

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set age(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
    this._age = age;
  }
  public get age() {
    if (this._age === undefined) {
      throw new Error("The age property has not been set as yet");
    }
    return this._age;
  }
}

const personV: PersonV = new PersonV("varsha", 42);

console.log(personV);
console.log(personV.age);

class PersonW {
  private testUsersAge(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
    return age;
  }
  constructor(private _name: string, private _age: number) {
    this.testUsersAge(_age);
    this._age = _age;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set age(age: number) {
    this.testUsersAge(age);
    this._age = age;
  }
  public get age() {
    if (this._age === undefined) {
      throw new Error("The age property has not been set as yet");
    }
    return this._age;
  }
}

const personW: PersonW = new PersonW("varsha", 42);

console.log(personW);
console.log(personW.age);
console.log(personW.name);
