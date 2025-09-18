// var a=45;
// console.log(this);
// console.log(this.a);

// // we are using node js so this will NOT point to window object
// // it will point to module.exports object
// // in browser it will point to window object
// // in strict mode it will be undefined

// // now if we have to make it point to window object in vs code
// // we can use global object

// global.b=45;
// // console.log(global);
// console.log(this.b);



// Part 2

function myfun([...arr])
{
 let sum=arr.reduce((a)=>a+b);
//  console.log(sum);
 
}
myfun([1]);

// requrie
// console.log(require);
// console.log( require.toString);


// module.exports
const [s,p] = require('./mdouleExports');
console.log(s,p);


// console.log( sum);

const math = require('./math');
const math2=require('./math2')

let sum1=math.sum([3,4]);
let product1=math.product([3,4]);

// console.log(sum1);
// console.log(product1);
// console.log(math2[0]([3,4]));
// console.log(math2[1]([3,4]));






