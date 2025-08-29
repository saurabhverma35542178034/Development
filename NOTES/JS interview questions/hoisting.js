// it works with var keyword and functions declration not with function as a variable 
console.log(foo);
var foo=1;

console.log(foo);
let foo=1;


console.log(foo);
const foo=1;

// now we do function hositing
hositing();
function hositing(){
    console.log("Learning Javascript");
}
