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




   





