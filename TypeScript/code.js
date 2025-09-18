var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 2;
var r = "sdsd";
// this is giving type safety error
/*Data types
primitive and refrence types
*/
var b = 3;
var c = b + 4;
// console.log(c);
// console.log(b);
var arr = [1, 32, 4, 5, 6];
var brr = arr;
brr.pop();
// console.log(arr);
// console.log(brr);
// Lets Tuple it , 
var tuple = ["harsh", 3];
//ENUMS
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["GUEST"] = "guest";
    Role["USER"] = "user";
})(Role || (Role = {}));
// console.log(Role.ADMIN);
// Types of variable
// ANY
var a1;
// console.log(typeof a1);
a1 = "harsh"; // type is any and we can assign any type of value
var a2;
a2 = "harh"; // type is number and we can assign only number type value
// UNKNOWN
var a3;
a3 = 2;
a3 = "harsh"; // type is unknown and we can assign any type of value
a3.toUpperCase(); // we cannot use any method on unknown type without type assertion
if (typeof a3 === "string") {
    a3.toUpperCase(); // we can use any method on unknown type after type assertion
}
// Type Inference
var a4; // type is any
var a5 = 2; // this is type inference and type is number,  automatically detected by typescript
// type annotation
var a6 = "harsh"; // type is string
function greetPerson(person) {
    return "Hello ".concat(person.name, ", you are ").concat(person.age, " years old");
}
var data = greetPerson({ name: "harsh", age: 20, isMarried: true });
function greetAdmin(admin) {
    return "Hello ".concat(admin.name, ", you are ").concat(admin.age, " years old and your role is ").concat(admin.role);
}
var adminData = greetAdmin({ name: "harsh", age: 20, role: "admin" });
function greet(obj) {
    return "Hello ".concat(obj.name, ", you are ").concat(obj.age, " years old");
}
var a7;
a7 = true;
// type cannot be re-declared but Interface can be re-declared
// CLASSES OBJECT ORIENTED PROGRAMMING
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        // console.log(`Animal name is ${name} and age is ${age}`);
    }
    return Animal;
}());
var objAnimal = new Animal("dog", 3);
// console.log(objAnimal);
var BottleMaker = /** @class */ (function () {
    function BottleMaker(color, type, price) {
        if (type === void 0) { type = "plastic"; }
        this.color = color;
        this.type = type;
        this.price = price;
        // console.log(`Bottle color is ${color}, type is ${type} and price is ${price}`);
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("red", "plastic", 200);
var b2 = new BottleMaker("red", undefined, 200);
b1.color = "blue"; // we can access public property
// console.log(b1.color,b1.type); // we can access public property
var Abcd = /** @class */ (function () {
    function Abcd(name, age) {
        // console.log(name);
        this.name = name;
    }
    // console.log(this); we can not use console outside methods
    Abcd.prototype.consoleLog = function () {
        // console.log(this.name);
    };
    return Abcd;
}());
var objAbcd = new Abcd("harsh", 20);
objAbcd.consoleLog();
var PersonClass = /** @class */ (function () {
    function PersonClass(name) {
        // console.log(name);
        this.name = name;
    }
    return PersonClass;
}());
var obj = new PersonClass("harsh");
// Public Private Protected
// public - can be accessed anywhere, can be accesed from inherteince , inside a class , inside a subclass , method inside a class ,inside constructor , outisde a class
// private - can be accessed only inside a class, cannot be accessed from inherteince , inside a class , inside a subclass , method inside a class ,inside constructor , outisde a class
var Information = /** @class */ (function () {
    function Information(name, adhaar, age, country) {
        this.name = name;
        this.adhaar = adhaar;
        this.age = age;
        this.country = country;
        //  console.log("Construtor",name,adhaar,age);
    }
    Information.prototype.display = function () {
        // console.log("Method",this.name,this.adhaar,this.age);   
    };
    return Information;
}());
this.name = "harsh"; // we can access public property
var SubInformation = /** @class */ (function (_super) {
    __extends(SubInformation, _super);
    function SubInformation(name, adhaar, age, country) {
        var _this = _super.call(this, name, adhaar, age, country) || this;
        console.log("SubClass", _this.name, _this.age, _this.adhaar); // we can access public and protected property
        return _this;
        // console.log(this.adhaar); // we cannot access private property
    }
    return SubInformation;
}(Information));
var Info = new Information("harsh", 123456789012, 20, "India");
var SubInfo = new SubInformation("harsh", 123456789012, 20, "India");
Info.name = "sharma"; // we can access public property
Info.adhaar = 123456789013; // we cannot access private property
Info.age = 21; // we cannot access protected property
Info.country = "USA"; // we cannot access readonly property
// console.log(Info.name);
// console.log(Info.adhaar);
// console.log(Info.age);
// console.log(Info.country);
// getters and setters
var Employee = /** @class */ (function () {
    function Employee(_fullName, _age) {
        this._fullName = _fullName;
        this._age = _age;
    }
    Object.defineProperty(Employee.prototype, "fullname", {
        get: function () {
            return this._fullName;
        },
        set: function (name) {
            this._fullName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee("harsh", 20);
// console.log(emp.fullname);
emp.fullname = "sharma";
// console.log(emp.fullname);
// Static properties and methods
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        Car.numberOfCars++;
    }
    Car.getNumberOfCars = function () {
        return Car.numberOfCars;
    };
    Car.numberOfCars = 0;
    return Car;
}());
var car1 = new Car("BMW");
var car2 = new Car("Audi");
// console.log(Car.getNumberOfCars());
// console.log(Car.numberOfCars);
// FUNCTIONS
function RandomFun(name, age, cb) {
    cb();
}
//RandomFun("Vermaa",23, ()=>console.log("hello"));
// spread parametrs
function SpreadOperator(a) {
    // console.log(b);
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
}
SpreadOperator(1, 2, 3, 4, 5, 6);
// functions over loading
/*
functions with same name but different parameters

function add(a:number,b:number):number;
function add(a:string,b:string):string;
*/
function add(a, b) {
    return a + b;
}
// generics Functions
// function generic<T>(a:T)
// {
//    console.log(a.length);
// }
// generic  (12);
// generic  ("saurabh");
function generic(a) {
    console.log(a.length);
}
generic(12);
generic("saurabh");
// function wrap(value: any): any[] {
//   return [value];
// }
// const result = wrap("hello");
// result[0].toUpperCase(); // ✅ Works
// const broken = wrap(42);
// broken[0].toUpperCase(); // ❌ Runtime error — no warning
function wrapInArray(value) {
    return [value];
}
var safe = wrapInArray(42);
function APIdata(animal) {
    return animal.API;
}
console.log(APIdata({ API: "Saurabh", PASS: 2 }));
