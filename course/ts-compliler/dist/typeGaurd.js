"use strict";
function convertNumberToString(number) {
    if (typeof number !== "number") {
        console.log("Input a valid number");
    }
    return number.toString();
}
function printStrings(str) {
    if (str && typeof str === "object") {
        // checking if str is array of string
        for (const s of str) {
            console.log(s);
        }
    }
    else if (str == "string") {
        console.log(str);
    }
    else {
        console.log("Pass an arrary of string or a string array");
    }
}
function printAge(person) {
    if (person.age) {
        console.log(person.age);
    }
    else {
        console.log("Age unknown");
    }
}
const user5 = {
    name: "varsha",
    // age:"varsha" will throw error
    age: 23,
};
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2;
    }
}
// in operator narrowing
function getArea2(shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2;
    }
}
// instance for type gaurd
// Type script automatically narrows down the type of object within the block allowing us to access and use properties and method
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    getPrice() {
        return this.price;
    }
}
class Clothing extends Product {
    constructor(name, price, size, material) {
        super(name, price);
        this.size = size;
        this.material = material;
    }
    getPrice() {
        return this.price;
    }
}
function displayDetails(product) {
    console.log(`Name:${product.name}`);
    console.log(`Name:${product.getPrice()}`);
    if (product instanceof Electronics) {
        console.log(`Warrenty: ${product.warranty}`);
    }
    else if (product instanceof Clothing) {
        console.log(`Size: ${product.size}`);
        console.log(`Material: ${product.material}`);
    }
}
