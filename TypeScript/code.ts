var a=2
let r="sdsd"
// this is giving type safety error


/*Data types
primitive and refrence types
*/

let b=3;
let c=b+4;
// console.log(c);
// console.log(b);


let arr=[1,32,4,5,6];
let brr=arr;
brr.pop();

// console.log(arr);
// console.log(brr);

// Lets Tuple it , 

let tuple:[string,number]=["harsh",3];

//ENUMS
 enum Role{
    ADMIN="admin",
    GUEST="guest",
    USER="user"
 }


// console.log(Role.ADMIN);


// Types of variable

// ANY
let a1;
// console.log(typeof a1);
a1="harsh"; // type is any and we can assign any type of value
let a2:number;
a2="harh"; // type is number and we can assign only number type value

// UNKNOWN
let a3:unknown;
a3=2;
a3="harsh"; // type is unknown and we can assign any type of value

a3.toUpperCase(); // we cannot use any method on unknown type without type assertion

if(typeof a3==="string"){
    a3.toUpperCase(); // we can use any method on unknown type after type assertion
}



// Type Inference
let a4:string; // type is any
let a5=2; // this is type inference and type is number,  automatically detected by typescript

// type annotation
let a6:string="harsh"; // type is string
// by using :string - type annotation


// INTERFACES

interface Person{
    name:string;
    age:number;
    isMarried?:boolean; // optional property
    greet?():string; // method
    AnotherGreet?():string;
}

function greetPerson(person:Person):string{
    return `Hello ${person.name}, you are ${person.age} years old`;
}

let data:string=greetPerson({name:"harsh",age:20,isMarried:true});

// console.log(data);

interface Admin extends Person{
    role:string;
}

function greetAdmin(admin:Admin):string{
    return `Hello ${admin.name}, you are ${admin.age} years old and your role is ${admin.role}`;
}

let adminData:string=greetAdmin({name:"harsh",age:20,role:"admin"   });

// console.log(adminData);

/* 2 INTERFACES ARE SAME OF NAME GET MERGED*/

interface Person{
    name:string;
}

interface Person{
    age:number;
}

function greet(obj:Person):string{
    return `Hello ${obj.name}, you are ${obj.age} years old`;
}

// console.log(greet({name:"harsh",age:20}));

// Type Assertions

type a6=string | number;
let a7:a6;
 a7=true;

// type vs interface
// type can be used to define primitive types, union types, tuple types etc
// interface can be used to define object types

type abc= number | string;
type abc = number | string; // cannot be re-declared

// type cannot be re-declared but Interface can be re-declared


// CLASSES OBJECT ORIENTED PROGRAMMING


class Animal{
    constructor(name:string,age:number){
        // console.log(`Animal name is ${name} and age is ${age}`);
        
    }
}

let objAnimal= new Animal("dog",3);
// console.log(objAnimal);

class BottleMaker{
    constructor(public color:string,public type:string="plastic",private price:number){
        // console.log(`Bottle color is ${color}, type is ${type} and price is ${price}`);
     }
}

let b1=new BottleMaker("red","plastic",200);
let b2=new BottleMaker("red",undefined,200);
b1.color="blue"; // we can access public property
// console.log(b1.color,b1.type); // we can access public property

class Abcd
{ // public keyword - Make these parameters class properties and assign them automatically.”
    constructor(public name:string,age:number){
        // console.log(name);
        
    }
    // console.log(this); we can not use console outside methods

    consoleLog(){
        // console.log(this.name);
        
    }
    
}
let objAbcd=new Abcd("harsh",20);
objAbcd.consoleLog();


class PersonClass{
    constructor(public name:string){
        // console.log(name);
        
    }
}
let obj= new PersonClass("harsh");

// Public Private Protected
// public - can be accessed anywhere, can be accesed from inherteince , inside a class , inside a subclass , method inside a class ,inside constructor , outisde a class
// private - can be accessed only inside a class, cannot be accessed from inherteince , inside a class , inside a subclass , method inside a class ,inside constructor , outisde a class


class Information{
    constructor(public name:string, private adhaar:number,protected age:number, public readonly country:string){
        //  console.log("Construtor",name,adhaar,age);
    }
    display(){
        // console.log("Method",this.name,this.adhaar,this.age);   
    }
    this.name="harsh"; // we can access public property
}

class SubInformation extends Information{
    constructor(name:string,adhaar:number,age:number,country){
        super(name,adhaar,age,country);
        console.log("SubClass",this.name,this.age, this.adhaar); // we can access public and protected property
        // console.log(this.adhaar); // we cannot access private property
    }
}

let Info=new Information("harsh",123456789012,20,"India");

let SubInfo=new SubInformation("harsh",123456789012,20,"India");

Info.name="sharma"; // we can access public property
Info.adhaar=123456789013; // we cannot access private property
Info.age=21; // we cannot access protected property
Info.country="USA"; // we cannot access readonly property
// console.log(Info.name);
// console.log(Info.adhaar);
// console.log(Info.age);
// console.log(Info.country);



// getters and setters

class Employee{
    constructor(private _fullName:string,private _age:number){}

    get fullname():string{
        return this._fullName;
    }

    set fullname(name:string){
        this._fullName=name;
    }
}

let emp=new Employee("harsh",20);

// console.log(emp.fullname);
emp.fullname="sharma";
// console.log(emp.fullname);


// Static properties and methods
class Car{
    static numberOfCars:number=0;
    constructor(public model:string){
        Car.numberOfCars++;
    }
    static getNumberOfCars():number{
        return Car.numberOfCars;
    }
}

let car1=new Car("BMW");
let car2=new Car("Audi");
// console.log(Car.getNumberOfCars());
// console.log(Car.numberOfCars);




// FUNCTIONS

function RandomFun(name:string,age:number , cb:()=>void )
{
     cb();
}

//RandomFun("Vermaa",23, ()=>console.log("hello"));



// spread parametrs

function SpreadOperator(a:number,...b:any)
{
    // console.log(b);
    
}

SpreadOperator(1,2,3,4,5,6);

// functions over loading
/* 
functions with same name but different parameters

function add(a:number,b:number):number;
function add(a:string,b:string):string;
*/
function add(a:any,b:any):any{
    return a+b;
}


// generics Functions

// function generic<T>(a:T)
// {
//    console.log(a.length);
    
    
// }

// generic  (12);
// generic  ("saurabh");


function generic<T extends { length: number }>(a: T) {
  console.log(a.length);
}

generic  (12);
generic  ("saurabh");

// function wrap(value: any): any[] {
//   return [value];
// }

// const result = wrap("hello");
// result[0].toUpperCase(); // ✅ Works

// const broken = wrap(42);
// broken[0].toUpperCase(); // ❌ Runtime error — no warning


function wrapInArray<T>(value: T): T[] {
  return [value];
}

const safe = wrapInArray(42);
// safe[0].toUpperCase(); // ❌ Compile-time error — TypeScript warns you



//Interface with generic
interface Animal<T>
{
    API:string,
    PASS:T
}

function APIdata<T>(animal:Animal<T>):string{
   return animal.API;
}
// console.log(APIdata({API:"Saurabh", PASS:2}));


// Class with generic

class Food<T,Q>{
    constructor(public name:T,public quantity:Q){
        console.log(name,quantity);
        
    }

}
let f1= new Food("Pizza","2");
let f2= new Food( "Burger",3);


function abcd<T>(a: T, b: T): T {
        return "hey"; // Error: Type 'string' is not assignable to type 'T'
}
abcd<string>("hey", "hello");


