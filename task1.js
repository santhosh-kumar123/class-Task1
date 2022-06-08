getMessage()
var getMessage = () => {
    console.log("good morning");
}


let arr = [1, 2, 3]
let str = "1,2,3"
console.log(arr==str);


let count = 10;
(function inn() {
    if (count === 10) {
        let count = 11;
        console.log(count);
    }
    console.log(count);
})();



let zero = new Number(0);
if (zero) {
    console.log("if");
}
else {
    console.log("else");
}

console.log(typeof typeof typeof true);

class Vehicle{
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`${this.name} vehicle started`);
    }
}
class Car extends Vehicle{
    start() {
        console.log(`${this.name} car Strted`);
        super.start();
    }
}
const car = new Car("BMW");
console.log(car.start());


function Person() { }
P


const squareObj = new Square(10);
console.log(squareObj.area);

class Square{
    constructor(length) {
        this.length = length;
    }
    get area() {
        return this.length * this.length;
    }
    set area(value) {
        this.area = value;
    }
}


// const num = 0o38;
console.log(num);

const obj = { key: "value" };
const array = [...obj];
console.log(array);


function myfun(x,y,...manyMoreArgs) {
    console.log(manyMoreArgs);
}
myfun(1, 2, 3, 4, 5);
myfun(1, 2);


function greet(greeting, name ,message=greeting + "" + name) {
    console.log([greeting,name,message]);
}
greet("hello", "John");
greet("hello", "John","good Morning");

function add(item, items =[]) {
    items.push(item);
    return items;
}
console.log(add("orange"));
console.log(add("Apple"));


const { a: x = 10, b: y = 20 } = { a: 30 };
console.log(x);
console.log(y);


class A{
    constructor() {
        console.log(new.target.name);
    }
}

class B extends A{
    constructor() {
        super();
    }
}
new A();
new B();


console.log(JSON.stringify({ myArray: ["one", undefined, function () { }, Symbol("")] }));

console.log(JSON.stringify({[Symbol.for("one")]:"one"},[Symbol.for("one")]));

let myNum = 100;
let myString = "100";
if (!typeof myNum === "string") {
    console.log("It is not a string");
}
else {
    console.log("it is a string");
}
if (!typeof myString === "number") {
  console.log("It is not a number");
} else {
  console.log("it is a number");
}


// var set = new Set();
// set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
// console.log(set);
