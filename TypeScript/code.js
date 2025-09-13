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
console.log(greet({ name: "harsh", age: 20 }));
