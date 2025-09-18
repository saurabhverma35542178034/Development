let fname={
    first:"saurabh",
    last:"verma",
    full:function(){console.log(this.first+" "+ this.last);
    }
};

let anotherName={
    first:"Sachin",
    last:"tendulakr"
};

// CALL
// call is function borwwoing
let callOutput=fname.full.call(anotherName,"Lucknow", "UP");

// APPLY
// the only diifernce is that we pass argument as an array and in "call" we pass as comma seprated
let applyOutput=fname.full.call(anotherName, ["lucknow", "UP"]);



// BIND
// bind will return a function 
let bindOutput=fname.full.bind(anotherName);

console.log(bindOutput("Lucknow", "UP"));

