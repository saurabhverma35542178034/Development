// Q1. What is a Closure?
// A closure is a function that retains access to its lexical scope (the scope in which it was created) even when the function 
//is executed outside that lexical scope.
function outerFunction() {
    let outerVariable = 'I am outside!';
    console.log(outerVariable+" I am inside Outer Function");

    function innerFunction() {
        console.log(outerVariable+" I am inside inner function");
    }

    return innerFunction;
}

console.log(outerFunction()+"I am at global level");
const myInnerFunction = outerFunction();
myInnerFunction(); // Logs: I am outside!
