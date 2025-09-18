


/**** This keyowrd works differently in strict and non strict mode ****/



//**  "this" in GLOBAL
//  console.log(this); 
 //  thiss refers to global object, Global object can be differnt in diffenret env , like in web browser in vs code

 //**  this in FUNCTION
 // if we use (strict mode) - "this" will be undefined , there is one phoenomena (this substution)
 // if we do not use strict mode = "this" will be global o0bject
 // (non strict mode)if the "this" is undefined or null then "this" will refer to global object
// "use strict";
 
//  function fname() {
//     console.log(this);
    
//  }
 //fname();




 // *** this under strict mode
//  "use strict";
//    function f1()
// {
//     console.log(this);
    
// }
// f1();// if function is called without refrence then "this"=undefined
// global.f1 = f1; // attaching f1 to global object
// global.f1();// here "this"= global object 


// ** this in the object

// in object "this" refers to the object itself 
// let obj={
//     name:"saurabh",
//     a:10,
//     get:function(){console.log(this); return "x";
//     }
// };

// let x=obj.get();
// console.log("x",x);


// object nesting  , "this" will point out to inner object
// let outerObj={
//     fname:"saurabh",
//     inner:{city:"bbk" , country:function(){console.log(this)  ; console.log("inside");
//       }}
// }

// console.log(outerObj.inner.country());


// with the use of call , apply and bind the we can alter the "this" to another object




// ****"this" with arrow function
// this always points out to the lexical envirenment

let x =()=>{console.log(this)};
//console.log(x());// here this will point out to global object

// function fun()
// {
//    return y =()=>{console.log(this)}; // here this will point to its lexical enviremont and "this" will be global object
// }

// console.log(fun()()); 


// let arrowObj={
//     a:10,
//     name:()=>{console.log(this)    },  // here this will point to its lexical enviremont and "this" will be global object
//     // this is nested arrow function
//     anothername:()=>{
//         return ()=>{console.log(this)} // here this will point to its lexical enviremont and "this" will be global object

//     }
// }

// // console.log(arrowObj.name()); // in 
// arrowObj.anothername()();



let ObjectP={
    a:10,
    fun: function(){
        return ()=>{console.log(this)//Arrow function apna this bind nahi karta. Wo lexical parent se this inherit karta hai.
        /* 
                - fun ek regular function hai → iska this hota hai ObjectP
        - Arrow function ke andar this → inherit karta hai fun ka this
        - So final this → ObjectP



        */
      

        }
    }
}

ObjectP.fun()();








 

 

  