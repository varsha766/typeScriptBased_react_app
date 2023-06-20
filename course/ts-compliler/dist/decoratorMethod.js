"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//whenever we apply a decorator to the parameter of a FirstDecorator, we get three argument passed to the decorator
function ParameterDecorator(classPrototype, methodName, index) {
    console.log(classPrototype, methodName, index);
}
class Airoplane {
    constructor(_aircraftModel) {
        this._aircraftModel = _aircraftModel;
    }
    static seatCount() {
        console.log("156 seats");
    }
    pilotName(name, lastName) {
        console.log(name);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
}
__decorate([
    __param(1, ParameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], Airoplane.prototype, "pilotName", null);
//Define a property decorator
// property decorator two argument
//1. prototype Of the class(if property is an instance member), class Constructor(if property is static member )
function PropertyDecorator1(classPrototype, propertyName) {
    console.log(classPrototype, propertyName);
}
// decorator for accessor method i.e public get aircraftModel
// Decorator to accessor takes three arguments
//1. classPrototype
//2. accessorName
//3. propertyDescriptor
function AccessorDecorator(classPrototype, accessorName, propertyDescriptor) {
    console.log(classPrototype, accessorName, propertyDescriptor);
}
class Airoplane1 {
    constructor(aircraftModel) {
        this._aircraftModel = aircraftModel;
    }
    static seatCount() {
        console.log("156 seats");
    }
    pilotName(name, lastName) {
        console.log(name);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
}
__decorate([
    PropertyDecorator1,
    __metadata("design:type", String)
], Airoplane1.prototype, "_aircraftModel", void 0);
__decorate([
    AccessorDecorator,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Airoplane1.prototype, "aircraftModel", null);
// multiple decorator and returning value from class decorator
/**
 * class decorator is capable of returning something within the decorator function
 * class decorator can alter the constructor function and return new constructor function
 *
 */
// using multiple decorator
function DecoratorOne(target) {
    console.log("Decorator for class 1");
}
function DecoratorTwo(target) {
    console.log("Decorator for class 2");
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    DecoratorOne,
    DecoratorTwo,
    __metadata("design:paramtypes", [String])
], Person);
// modified the constructor of person1  using decorator and added mapLocationObject
// we used FunctionConstructor rather Function because tells type script we are expecting a constructor function
function AddLocation(lat, long) {
    return function (classConstructor) {
        return class extends classConstructor {
            constructor(...args) {
                super(...args);
                this.mapLocation = { lat, long };
            }
        };
    };
}
let Person1 = class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
Person1 = __decorate([
    AddLocation(1.234, 1.876),
    __metadata("design:paramtypes", [String, Number])
], Person1);
const person = new Person1("john", 32);
console.log(person);
